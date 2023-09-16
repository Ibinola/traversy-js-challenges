function findMaxNumber(num) {
    // [10,9,8,7,6,5,4,3,2,1]
    //  i          j          

    // [1,2,3,4,5,6,7,8,9,10]

    // [1, 2, 3, 4, 5, 10, 9, 8, 7, 6]
    let maxNumber = num[0]
    
    for(let i = 1; i < num.length; i++){
        if(num[i] > maxNumber){
            maxNumber = num[i];
        }
    }

    return maxNumber;
    
}

module.exports = findMaxNumber;
