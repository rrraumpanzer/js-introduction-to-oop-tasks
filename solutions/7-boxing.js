// BEGIN
const magic = (...numz) => {
    const mana = 0;
    
    const addmana = (num) => {
        mana+=1;
    }
    if (numz.length === 0) {return mana;}
    if (mana === undefined) {mana = 0}
    for (val of numz) {
        mana += val;
    }
    return { addmana}
};
export default magic;
// END
