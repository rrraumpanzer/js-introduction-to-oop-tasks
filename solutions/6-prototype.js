// BEGIN
function Money (val, cur = "usd") {
    var value = val;
    var currency = cur;
    
    const setValue = (v) => { value = v; }
    const getValue = () => { return value; }
    const setCurrency = (c) => { currency = c;}
    const getCurrency = () => {return currency;}
    
    var exchangeTo = (newCurrency) => {
        var exchangedValue = value;
        if (currency === newCurrency) {return Money(value, currency)} //Money laundering
        if ((newCurrency === 'eur') && (currency==='usd')) {
            exchangedValue *= 0.7;
        }
        else {
            exchangedValue *= 1.2;
        }
        return Money(exchangedValue, newCurrency);
    }

    const add = (addingMoney) => {
        var newValue = value;
        if (addingMoney.getValue() === 0) {return Money(value, currency);}
        if (currency === addingMoney.getCurrency) {
            newValue += addingMoney.getValue();
        }
        else {
            newValue += addingMoney.exchangeTo(currency).getValue();
        }
        return Money(newValue, currency);
    }
    const format = () => {
        return value.toLocaleString(undefined, {style : "currency", currency : currency});
    }
    return { setValue, getValue, setCurrency, getCurrency, exchangeTo, add, format }
}

export default Money;
// END
