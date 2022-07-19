const router = require('express').Router();
const connection = require('./../../../db/connection');

const isEven = function(number) {
    return new Promise((resolve, reject) => {
        if (number %2 === 0){
            resolve('isEven');

        }else {
            reject('isOdd');
        }
    });
};

router.get()


module.exports = router;

