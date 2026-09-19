const getLargest = (a,b) => {
    if(a>b) {
        console.log(`${a}>${b}`);
    }else if(a===b) {
        console.log(`${a}=${b}`);
    }else {
        console.log(`${a}<${b}`);
    }
}
getLargest(10,5);