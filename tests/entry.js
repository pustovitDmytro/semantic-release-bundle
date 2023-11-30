/* eslint-disable security/detect-non-literal-require */
import { entry } from './constants';

const m = require(entry);

const { verifyConditions, prepare } = m;

export { verifyConditions, prepare };
