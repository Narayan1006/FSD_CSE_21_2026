function f1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('f1');
        resolve('f1 resolved');
    }, 4000);
})
}

function f2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('f2');
            resolve('f2 resolved');
        }, 2000);
    });
}


f1().then(f2).catch((err)=>{
    console.log("ERROR",err);
})