import path from 'path';
import { assert } from 'chai';
import { load } from '../Test';
import { checkError } from '../utils';

const verifyConditions = load('verifyConditions').default;
// const factory = new Test();

suite('verifyConditions');

before(function () {});

const options = {
    repositoryUrl : 'http://ag.bb/goref'
};

const branch = { name: 'master' };
const testBundles = path.resolve('tests/bundles');
const tastoriaDist = path.resolve(testBundles, 'tastoria_1.2.1/dist');
const tastoriaPackage = path.resolve(testBundles, 'tastoria_1.2.1/package.json');
const cwd = process.cwd();

const tastoriaValidConfig = {
    type            : 'q-manifest',
    packageJSONPath : tastoriaPackage,
    directory       : tastoriaDist
};

const defaultOptions = {
    logger : console,
    cwd,
    env    : {},
    options,
    branch
};

test('Positive: valid q-manifest configuration', async function () {
    const context = {};

    await verifyConditions.call(
        context,
        { ...tastoriaValidConfig },
        defaultOptions
    );

    assert.deepOwnInclude(context.verified, {
        type              : 'q-manifest',
        packageJSONPath   : tastoriaPackage,
        directory         : tastoriaDist,
        previousVersion   : '1.2.1',
        updatePackageJSON : false,
        buildDirectory    : 'build',
        distPath          : tastoriaDist,
        qManifestPath     : path.join(tastoriaDist, 'q-manifest.json'),
        bundles           : [
            path.join(tastoriaDist, 'build/q-e3bd038d.js')
        ]
    });
});

test('Positive: valid vite-define configuration', async function () {
    const version = '1.23.0';
    const viteDefineConfig = {
        type            : 'vite-define',
        packageJSONPath : path.resolve(testBundles, `tastoria_${version}/package.json`),
        directory       : path.resolve(testBundles, `tastoria_${version}/dist`)
    };
    const context = {};

    await verifyConditions.call(
        context,
        { ...viteDefineConfig },
        defaultOptions
    );

    assert.deepOwnInclude(context.verified, {
        type            : 'vite-define',
        directory       : viteDefineConfig.directory,
        previousVersion : version,
        distPath        : viteDefineConfig.directory
    });

    assert.includeMembers(context.verified.bundles, [
        path.join(viteDefineConfig.directory, 'service-worker.js'),
        path.join(viteDefineConfig.directory, 'build/en/q-BTttGwnV.js')
    ]);
});


test('Negative: invalid package.json path', async function () {
    const promise = verifyConditions.call(
        {},
        { ...tastoriaValidConfig, packageJSONPath: '1/2/package.json' },
        defaultOptions
    );

    await checkError(promise, 'NO_FILE', `File not found: ${cwd}/1/2/package.json`);
});

test('Negative: validation error', async function () {
    const promise = verifyConditions.call(
        {},
        {},
        defaultOptions
    );

    await checkError(promise, 'VALIDATION_FAILED', '{"type": "REQUIRED: The value is required"}');
});

test('Negative: invalid bundle path', async function () {
    const promise = verifyConditions.call(
        {},
        { ...tastoriaValidConfig, buildDirectory: 'unknown' },
        defaultOptions
    );

    await checkError(promise, 'NO_FILE', `File not found: ${tastoriaDist}/unknown/q-e3bd038d.js`);
});

after(function () {});
