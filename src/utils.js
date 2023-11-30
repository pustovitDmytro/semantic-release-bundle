import cottus, { ValidationError } from 'cottus';
import { VALIDATION_FAILED } from './Error';

export function validate(data, rules) {
    const validator = cottus.compile([ 'required', { 'attributes': rules } ]);

    try {
        return validator.validate(data);
    } catch (error) {
        if (error instanceof ValidationError) {
            throw new VALIDATION_FAILED(error);
        }

        throw error;
    }
}
