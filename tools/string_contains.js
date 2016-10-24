
Object.defineProperty(String.prototype,'contains',{
    value : function contains(arr){
        for(i in arr)
            if(this.indexOf(arr[i])!==-1)
                return true
        return false
    }
})
