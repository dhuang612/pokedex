import React from 'react';
//import {displayAdditionalinfo} from '../src/components/App.js';

const getNestedObj = (nestedObj, pathArr)=> {
    return pathArr.reduce((obj, key)=>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined,
        nestedObj);
}
const encounterInfo = getNestedObj(displayAdditionalinfo, ['version_details', 'name']);
const displayInfo = getNestedObj(displayAdditionalinfo, ['version_details', 'name'])

export default getNestedObj;