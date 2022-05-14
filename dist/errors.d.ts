export declare class BadRequest extends Error {
    description: string;
    code: number;
    type: string;
    constructor({ message, code, type }: {
        message: any;
        code: any;
        type: any;
    });
}
export declare class Unauthorized extends Error {
    description: string;
    code: number;
    type: string;
    constructor({ message, code, type }: {
        message: any;
        code: any;
        type: any;
    });
}
export declare class NotFound extends Error {
    description: string;
    code: number;
    type: string;
    constructor({ message, code, type }: {
        message: any;
        code: any;
        type: any;
    });
}
export declare class ServerError extends Error {
    description: string;
    code: number;
    type: string;
    constructor({ message, code, type }: {
        message: any;
        code: any;
        type: any;
    });
}
