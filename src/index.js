import verifyConditionsFn from './verifyConditions';
import prepareFn from './prepare';

const context = {};

const verifyConditions = verifyConditionsFn.bind(context);
const prepare          = prepareFn.bind(context);

export {
    verifyConditions,
    prepare
};
