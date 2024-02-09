"use strict";
// ['page','limit','sortBy','sortOrder']
Object.defineProperty(exports, "__esModule", { value: true });
//here Record is used instead of Object
const pick = (obj, keys) => {
    const finalObj = {};
    for (const key of keys) {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            finalObj[key] = obj[key]; // finalObj er modhe append
        }
    }
    return finalObj;
};
exports.default = pick;
