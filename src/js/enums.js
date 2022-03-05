"use strict";
const EXTENSION_NAME = 'NightThemeLikeTwitter';
const LOGTYPE = {
    EVENT: 'EVENT'
};
const LIGHT_THEME = 'https://aker-h.github.io/myLib/css/rootTwitterLight.css', DARK_BLUE_THEME = 'https://aker-h.github.io/myLib/css/rootTwitterDarkBlue.css', BLACK_THEME = 'https://aker-h.github.io/myLib/css/rootTwitterBlack.css';
const VOID_PROMISE = new Promise((resolve) => { resolve(); });
const SRC_ACTION_LIB = 'action/script/actionLib.js';
const SRC_ACTION_ONLOAD = 'action/script/actionOnload.js';
const SRC_ACTION_ONMESSAGE = 'action/script/actionOnMessage.js';
const SRC_CS_LIB = 'content_scripts/csLib.js';
const SRC_CS_ONLOAD = 'content_script/csOnload.js';
const SRC_CS_ONMESSAGE = 'content_script/csOnMessage.js';
const SRC_GOOGLE_LIB = 'content_script/google/googleLib.js';
const SRC_GOOGLE_ONLOAD = 'content_script/google/googleOnload.js';
const SRC_OL_LIB = 'content_script/outlool/lib.js';
const SRC_OL_ONLOD = 'content_script/outlool/onload.js';
