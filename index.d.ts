declare module 'gulp-html-angular-validate' {
    interface ILineErrors {
        msg: string;
        line: number;
        col: number;
    }

    interface IOptions {
        /**
         * Set this to true if you want the gulp task to emit an error when validation failure occur.
         * Default: false
         */
        emitError?: boolean;

        /**
         * Set this to true if you want the gulp task's callback to return a message saying there were validation failures.
         * Default: false
         */
        errorInCallback?: boolean;

        /**
         * An optional function that takes an array of file failure objects.
         * Default: null
         */
        reportFn?: (errors: ILineErrors[]) => void;
    }

    interface IgulpHtmlAngularValidate {
        /**
         * Create a transform stream that passes through files whose modification time
         * is more recent than the corresponding destination file's modification time.
         */
        (options?: IOptions): any;
    }

    const gulpHtmlAngularValidate: IgulpHtmlAngularValidate;
    export = gulpHtmlAngularValidate;
}
