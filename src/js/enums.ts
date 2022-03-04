const EXTENSION_NAME: string = 'NightThemeLikeTwitter';

const LOGTYPE = {
    EVENT: 'EVENT'
};

const LIGHT_THEME: string = 'https://aker-h.github.io/myLib/css/rootTwitterLight.css',
      DARK_BLUE_THEME: string = 'https://aker-h.github.io/myLib/css/rootTwitterDarkBlue.css',
      BLACK_THEME: string = 'https://aker-h.github.io/myLib/css/rootTwitterBlack.css';

const VOID_PROMISE: Promise<void> = new Promise((resolve) => {resolve()});

const SRC_ACTION_LIB: string = 'action/script/actionLib.js';
const SRC_ACTION_ONLOAD: string = 'action/script/actionOnload.js';

const SRC_CS_LIB: string  = 'content_scripts/csLib.js';

const SRC_GOOGLE_LIB: string = 'content_script/google/googleLib.js';
const SRC_GOOGLE_ONLOAD: string = 'content_script/google/googleOnload.js'

const SRC_OL_LIB: string = 'content_script/outlool/lib.js'; 
const SRC_OL_ONLOD: string = 'content_script/outlool/onload.js';