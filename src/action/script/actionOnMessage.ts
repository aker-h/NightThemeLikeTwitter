// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     console.log(message);

//     switch (message.text) {
//         case 'changeIcon': {
//             changeIcon();
//             break;            
//         }
//         default: {
//             logEvent('Caught unknown message.', SRC_ACTION_ONMESSAGE, getIndex());
//         }
//     }

//     sendResponse();
//     return true;
// });