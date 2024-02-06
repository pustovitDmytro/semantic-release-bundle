import path from 'path';
import fs from 'fs-extra';
import { last, flatten } from 'myrmidon';
import { validate } from './utils';
import { NO_FILE } from './Error';

const basicRules = {
    type            : [ 'required',  { 'enum': [ 'q-manifest', 'vite-define' ] } ],
    packageJSONPath : [ 'string', { default: 'package.json' } ]
};

const typeRules = {
    'q-manifest' : {
        buildDirectory : [ 'string', { default: 'build' } ]
    },
    'vite-define' : {
        versionKey : [ 'string', { default: 'VERSION' } ]
    }
};

const genericRules = {
    directory         : [ { 'every': 'string' }, { default: [ 'dist' ] } ],
    previousVersion   : [ 'required', 'string' ],
    updatePackageJSON : [ 'boolean', { default: false } ]
};

function getBundleNames(qManifest, packageName) {
    return Object.keys(qManifest.bundles).filter(bundleName => {
        const b = qManifest.bundles[bundleName];

        return b.origins.includes(packageName);
    });
}

async function checkFile(filePath) {
    const isExists = await fs.exists(filePath);

    if (!isExists) throw new NO_FILE(filePath);
}

export async function getFiles(dir) {
    const subdirs = await fs.readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = path.resolve(dir, subdir);
        const stat = await fs.stat(res);

        return stat.isDirectory() ? getFiles(res) : res;
    }));

    // eslint-disable-next-line unicorn/prefer-spread, unicorn/no-array-reduce
    return files.reduce((a, f) => a.concat(f), []);
}

async function handleQMainfest(distPath, typeValid, { packageJSONPath }, { logger }) {
    const valid  = {
        qManifestPath : path.resolve(distPath, 'q-manifest.json')
    };

    await checkFile(valid.qManifestPath);

    const qManifest = await fs.readJSON(valid.qManifestPath);
    const bundleNames = await getBundleNames(qManifest, path.basename(packageJSONPath));

    // eslint-disable-next-line require-atomic-updates, no-param-reassign
    valid.bundles = await Promise.all(bundleNames.map(async name => {
        const bundlePath = path.resolve(distPath, typeValid.buildDirectory, name);

        await checkFile(bundlePath);

        return bundlePath;
    }));

    if (bundleNames.length > 0) {
        logger.log(`Replace version in: ${bundleNames.join(', ')}`);
    } else {
        logger.warn(`No suitable bundles found in ${valid.qManifestPath}`);
    }

    return valid;
}


async function handleViteDefine(directories, typeValid, { prevVersion }, { logger }) {
    const valid = {};
    const versionKeys = typeValid.versionKey.split('.');
    const versionKey = last(versionKeys);

    const distFiles = flatten(
        await Promise.all(directories.map(d => getFiles(d)))
    );

    const jsFiles = distFiles.filter(f => path.extname(f) === '.js');
    const bundles = [];
    // eslint-disable-next-line security/detect-non-literal-regexp
    const regexp = new RegExp(`${versionKey}[:=]['"]${prevVersion}['"]`, 'g');

    for (const fileName of jsFiles) {
        const buffer = await fs.readFile(fileName);
        const content = buffer.toString();

        if (regexp.test(content)) {
            bundles.push(fileName);
        }
    }

    if (bundles.length > 0) {
        const bundleNames = bundles.map(b => path.basename(b));

        logger.log(`Replace version in: ${bundleNames.join(', ')}`);
    } else {
        logger.warn(`No suitable bundles found in ${valid.qManifestPath}`);
    }

    valid.bundles = bundles;

    return valid;
}

export default async function verifyConditions(pluginConfig, { logger, cwd }) {
    const basicValid = validate(pluginConfig, basicRules);
    const typeValid = validate(pluginConfig, typeRules[basicValid.type]);

    const packageJSONPath = path.resolve(cwd, basicValid.packageJSONPath);

    await checkFile(packageJSONPath);

    const packageJSON = await fs.readJSON(packageJSONPath);

    const raw = {
        previousVersion : packageJSON.version,
        ...pluginConfig
    };

    const data = validate(raw, genericRules);

    logger.log(`Detected: ${basicValid.type} configuration. previous version: ${data.previousVersion}`);

    const directories = data.directory.map(d => path.resolve(cwd, d));

    let handleValid = {};

    if (basicValid.type === 'q-manifest') {
        handleValid = await handleQMainfest(directories[0], typeValid, { packageJSONPath }, { logger });
    }

    if (basicValid.type === 'vite-define') {
        handleValid = await handleViteDefine(directories, typeValid, { prevVersion: data.previousVersion }, { logger });
    }


    this.verified = {
        ...basicValid,
        ...data,
        ...typeValid,
        ...handleValid
    };

    return data;
}

