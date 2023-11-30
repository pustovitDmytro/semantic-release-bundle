#!./node_modules/.bin/babel-node
/* eslint-disable import/no-extraneous-dependencies */

import path from 'path';
import { docopt } from 'docopt';
import verifyConditions  from '../src/verifyConditions';

const doc =
`Usage:
   test.js success --chats=<chats> [<rootDir>]
   test.js fail --chats=<chats> [<rootDir>]
   test.js verifyConditions [<rootDir>]
   test.js -h | --help

Options:
   -h --help    Run test with real credentials.
`;

const testBundles = path.resolve('tests/bundles');
const tastoriaDist = path.resolve(testBundles, 'tastoria_1.2.1/dist');
const tastoriaPackage = path.resolve(testBundles, 'tastoria_1.2.1/package.json');

const options = {
    repositoryUrl : 'https://github.com/pustovitDmytro/semantic-release-telegram.git',
    'telegra.ph'  : {
        title   : '{name} v.{version}',
        message : '<a href=\'{telegraph_url}\'>Release Notes</a>',
        content : '{release_notes}'
    },
    assets : [
        { path: 'README.md' },
        { glob: [ '.docs/*' ], name: 'Docs.zip' }
    ]
};
const branch = { name: 'master' };

async function main(opts) {
    try {
        const rootDir = opts['<rootDir>'] || process.cwd();

        if (opts.verifyConditions) {
            await verifyConditions.call(
                {},
                {
                    type           : 'q-manifest',
                    directory      : tastoriaDist,
                    'package.json' : tastoriaPackage
                },
                {
                    logger : console,
                    env    : { ...process.env },
                    cwd    : path.resolve(rootDir),
                    options,
                    branch
                }
            );
        }

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}


// eslint-disable-next-line unicorn/prefer-top-level-await
main(docopt(doc));
