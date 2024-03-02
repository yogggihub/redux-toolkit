export const subString = (str) => {
    if (str.length > 45) {
        return str.slice(0, 60) + "...";
    }
    return str;
};