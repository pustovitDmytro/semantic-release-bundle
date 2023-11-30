import { assert } from 'chai';
import { verifyConditions, prepare } from '../entry';
import '../Test';

suite('Configurations');

test('verifyConditions', function () {
    assert.isFunction(verifyConditions);
});

test('prepare', function () {
    assert.isFunction(prepare);
});
