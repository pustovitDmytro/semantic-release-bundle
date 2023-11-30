export default class SemanticReleaseBundleError extends Error {
    #payload;

    constructor(payload) {
        super();

        this.name = this.constructor.name;
        this.#payload = payload;

        Error.captureStackTrace(this, this.constructor);
    }

    get payload() {
        return this.#payload;
    }
}

export class VERIFICATION_MISSED extends SemanticReleaseBundleError {
    message = `verifyConditions should be passed to run step [${this.payload}]`;
}

export class VALIDATION_FAILED extends SemanticReleaseBundleError {
    message = this.payload.prettify;
}

export class NO_FILE extends SemanticReleaseBundleError {
    message = `File not found: ${this.payload}`;
}
