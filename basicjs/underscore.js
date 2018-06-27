var _ = {
    map: function(arr, callback) {
        // loop through the array
        for(var i = 0; i < arr.length; i++) {
            arr[i] = callback(arr[i]);
        }
    },
    reduce: function(arr, callback) { // 5 out of 6
        let el = 0;
        if (!memo){
            memo = array[0];
            el = 1;
        }
        for (let i = el; i < array.length; i++) {
            memo = callback(array[i], memo);
        }
        return memo;
    },
    find: function(arr, callback) {   
        // loop through the array
        for(var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) return arr[i];
        }
    },
    filter: function(arr, callback) { 
        // loop through the array
        let result = [];
        for(var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) result.push(arr[i]); 
        }
        return result;
    },
    reject: function(arr, callback) { 
        // loop through the array
        let result = [];
        for(var i = 0; i < arr.length; i++) {
            if (!callback(arr[i])) result.push(arr[i]); 
        }
        return result;
    }
}// you just created a library with 5 methods!
 