// BEGIN
function make(n = 0, d = 1) {
    let numerator = n;
    let denominator = d;

    const setNumer = (number) => {
        numerator = number;
    }
    const setDenom = (number) => {
        denominator = number!==0 ? number : 1;
    }

    const getNumer = () => {
        return numerator;
    }
    const getDenom = () => {
        return denominator;
    }

    const toString = () => {
        return numerator + "/" + denominator;
    }
    const add = (rat_number) => {
        var commonDenom = denominator * rat_number.getDenom();
        var resultNumer = numerator * rat_number.getDenom() + denominator * rat_number.getNumer();
        return make(resultNumer, commonDenom);
    }

    return { setNumer, setDenom, getNumer, getDenom, toString, add };
}

export default make;
// END