// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    let reminder = currency;
    let coinCounter = { 0:0, 1:0, 2:0, 3:0, 4:0 };

    let exchangeArr = [ 50, 25, 10, 5, 1 ];

    for (let i = 0; i < exchangeArr.length; i++) {
        if(reminder == 0) break;
        coinCounter[i] = Math.floor(reminder/exchangeArr[i]);
        reminder -= coinCounter[i]*exchangeArr[i];
    };

    var result = {
        "H":coinCounter[0],
        "Q":coinCounter[1],
        "D":coinCounter[2],
        "N":coinCounter[3],
        "P":coinCounter[4]
    };

    for (var key in result) {
        if(result[key] == 0) delete result[key];
    };

    return result;
}
