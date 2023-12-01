import path from 'path';
import fs from 'fs-extra';
import { VERIFICATION_MISSED } from './Error';

export default async function prepare(pluginConfig, { logger, nextRelease } = {}) {
    if (!this.verified) throw new VERIFICATION_MISSED('prepare');

    const next = nextRelease.version;

    if (this.verified.updatePackageJSON) {
        const packageContent = await fs.readJSON(this.verified.packageJSONPath);

        packageContent.version = next;
        await fs.writeJSON(this.verified.packageJSONPath, packageContent, { spaces: 2 });
        logger.log(`package.json version updated to ${next}`);
    }

    const prev = this.verified.previousVersion;

    const promises = this.verified.bundles.map(async bundlePath => {
        const bundleName = path.basename(bundlePath);
        const buffer = await fs.readFile(bundlePath);
        const content = buffer.toString();
        /* eslint-disable security/detect-non-literal-regexp */
        const updated = content
            .replace(new RegExp(`'${prev}'`, 'g'), `'${next}'`)
            .replace(new RegExp(`"${prev}"`, 'g'), `"${next}"`);
        /* eslint-enable security/detect-non-literal-regexp */

        if (content !== updated) {
            await fs.writeFile(bundlePath, updated);
            logger.log(`${bundleName} version updated to ${next}`);
        }
    });

    await Promise.all(promises);
}

