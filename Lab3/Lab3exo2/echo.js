const exf = function(n, a) {
    let result = '';
    for (let i = 0; i < a; i++) {
        result += n;
    }
    return result;
}

module.exports = { exf };

exf("echo", 5) ;
exf("JS from server", 10) ;
