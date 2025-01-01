function mean(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}
<<<<<<< HEAD


module.exports = { mean };
=======
module.exports = mean;
>>>>>>> b1332b9 (add lab 4)
