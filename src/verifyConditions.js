import path from 'path';
import fs from 'fs-extra';
import { validate } from './utils';
import { NO_FILE } from './Error';

const basicRules = {
    type            : [ 'required',  { 'enum': [ 'q-manifest' ] } ],
    packageJSONPath : [ 'string', { default: 'package.json' } ]
};

const typeRules = {
    'q-manifest' : {
        buildDirectory : [ 'string', { default: 'build' } ]
    }
};

const genericRules = {
    directory         : [ 'string', { default: 'dist' } ],
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

    const valid = {
        distPath : path.resolve(cwd, data.directory)
    };

    if (basicValid.type === 'q-manifest') {
        valid.qManifestPath = path.resolve(valid.distPath, 'q-manifest.json');
        await checkFile(valid.qManifestPath);

        const qManifest = await fs.readJSON(valid.qManifestPath);
        const bundleNames = await getBundleNames(qManifest, path.basename(packageJSONPath));

        // eslint-disable-next-line require-atomic-updates
        valid.bundles = await Promise.all(bundleNames.map(async name => {
            const bundlePath = path.resolve(valid.distPath, typeValid.buildDirectory, name);

            await checkFile(bundlePath);

            return bundlePath;
        }));

        if (bundleNames.length > 0) {
            logger.log(`Replace version in: ${bundleNames.join(',')}`);
        } else {
            logger.warn(`No suitable bundles found in ${valid.qManifestPath}`);
        }
    }


    this.verified = {
        ...basicValid,
        ...data,
        ...typeValid,
        ...valid
    };

    return data;
}

