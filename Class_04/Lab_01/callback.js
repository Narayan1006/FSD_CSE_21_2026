    function sum(a,b){
        return a + b;
    }
    function sumwithmessage(callback,msg){
        console.log("Calculating...");
        const result = callback(2,3);
        const fresult="hii"+msg+"Your result is: "+result;
        return fresult;
    }


    console.log(sumwithmessage(sum," Narayan, "));