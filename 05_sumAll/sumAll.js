/*const sumAll = function(start,end) {
    let lowerNum = start
    let higherNum = end 
    
    if (start > end){
        let lowerNum = end
        let higherNum = start   
    }
    
    let i = lowerNum
    let result = 0
    while (i <= higherNum){
        result += i;
        i++
    }
    return result 
}*/

const sumAll = function(start,end) {
    /*if (start < 0 || end < 0 || typeof(start) !== 'number' || typeof(end) !== 'number'){
        let result = "ERROR"
        return result
    */
    if (start < end){
        let result = Math.abs((end*start)/2) + ((end*end)/2);
        return result
    
    } else {
        result = Math.abs((end*start)/2) + ((start*start)/2);
        return result
    }

}
// Do not edit below this line
module.exports = sumAll;
