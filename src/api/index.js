// const apis = {};
// const files = require.context('./interface', false, /\.js$/);
// files.keys().forEach(key => {
//     apis[key.replace(/(\.\/|\.js)/g, '')] = files(key);
// });
// export const api = React.createContext(
//     apis // apis
// );
import * as demo from './interface/demo';
export const api = {
    demo // apis
};

