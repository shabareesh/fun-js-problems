const finalObj = {};
export const generateObjectBreadCrumbs = (obj, parent = "obj") => {
    for(let key in obj) {
        if (typeof obj[key] === 'object') {
            generateObjectBreadCrumbs(obj[key], `${parent}_${key}`);
        } else {
            finalObj[`${parent}_${key}`] = obj[key];
        }
    }

    return finalObj;
};
