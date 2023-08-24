const removeFromArray = function(array) {
    let i = 1
    
    while( i < arguments.length){
    
        let index = array.indexOf(arguments[i]);
        
        if (index >-1){
            array.splice(index,1);
        
            
    }
    
    i++
}
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
