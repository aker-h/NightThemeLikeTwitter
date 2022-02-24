class MyString extends String {
    value: string;
    
    constructor (value: string) {
        super(value);
        this.value = value;
    }

    isMatch (pattern: string) {
        let value: string = this.value;           

        pattern = pattern.replaceAll('\\*', '<escapedAsterisk>').replaceAll('\\?', '<escapedQuestionMard>');
        pattern = pattern.replaceAll('*', '.*').replaceAll('?', '.');
        pattern = pattern.replaceAll('<escapedAsterisk>', '\\*').replaceAll('<escapedQuestionMard>', '\\?')
        let reg = new RegExp(pattern, 'i');

        console.log(reg);

        console.log(value.match(reg));

        if (value.match(reg) !== null) {
            return true;
        }

        return false;
    }
};

function logEvent (message: string, src: string, index: number):void {
    styleLog(LOGTYPE.EVENT, message, src, index);
};

function styleLog (type: string, message: string, src: string, index: number): void {
    let logTime: string = ((now) => {
        let fix= (num: number): string  => {
            let str = '0' + Number(num).toString();
            return str.slice(-2);
        };
        return `${fix(now.getHours())}:${fix(now.getMinutes())}:${now.getSeconds()}`;
    })(new Date);
    
    console.log(`[${type}] ${logTime} -- ${message} [${src}:${index} (${EXTENSION_NAME})]`);
};

// @TODO
// getIndex();
// sleep();
// getDOMbyUrl();
// createToastField();
// putToast();