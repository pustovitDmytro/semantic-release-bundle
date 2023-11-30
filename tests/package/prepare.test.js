// import { assert } from 'chai';
import path from 'path';
import { assert } from 'chai';
import fs from 'fs-extra';
import Test, { load, tmpFolder } from '../Test';
import { checkError, MockLogger } from '../utils';

const { default: prepare } = load('prepare');

suite('prepare');

const t = new Test();

const testBundles = path.resolve('tests/bundles');

const [ distBundle, packageBundle ] = [
    path.join(tmpFolder, 'tastoria_dist'),
    path.join(tmpFolder, 'tastoria_pkg')
];

const bundlename = 'q-e3bd038d.js';

before(async function () {
    await t.setTmpFolder();
    await fs.copy(path.resolve(testBundles, 'tastoria_1.2.1'), distBundle);
    await fs.copy(path.resolve(testBundles, 'tastoria_1.2.1'), packageBundle);
});

test('Negative: run prepare without verify', async function () {
    await checkError(
        prepare.call({}),
        'VERIFICATION_MISSED',
        'verifyConditions should be passed to run step [prepare]'
    );
});

test('Positive: update package.json', async function () {
    const logger = new MockLogger();

    await prepare.call(
        { verified : {
            type              : 'q-manifest',
            packageJSONPath   : path.join(path.resolve(packageBundle), 'package.json'),
            updatePackageJSON : true,
            bundles           : []
        } },
        null,
        {
            logger,
            nextRelease : { version: '1.3.0' }
        }
    );

    assert.deepEqual(logger.messages[0], {
        level   : 'info',
        message : 'package.json version updated to 1.3.0'
    });

    assert.notExists(logger.messages.find(m => m.message.includes(bundlename)));

    assert.deepOwnInclude(
        await fs.readJSON(path.join(path.resolve(packageBundle), 'package.json')),
        { version: '1.3.0' }
    );
});

test('Positive: update bundles', async function () {
    const logger = new MockLogger();

    await prepare.call(
        { verified : {
            type              : 'q-manifest',
            previousVersion   : '1.2.1',
            updatePackageJSON : false,
            bundles           : [
                path.join(distBundle, `dist/build/${bundlename}`)
            ]
        } },
        null,
        {
            logger,
            nextRelease : { version: '1.2.8' }
        }
    );

    assert.deepEqual(logger.messages[0], {
        level   : 'info',
        message : `${bundlename} version updated to 1.2.8`
    });

    assert.notExists(logger.messages.find(m => m.message.includes('package.json')));

    const buff = await fs.readFile(path.join(path.resolve(distBundle), `dist/build/${bundlename}`));

    assert.include(buff.toString(), '"1.2.8"');
});


after(async function () {
    await t.cleanTmpFolder();
});
