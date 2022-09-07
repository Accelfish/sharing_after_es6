function Example0(){
    // Symbol
    const swim = Symbol();
    const obj = {
        [Symbol('name')]: 'Fish',
        [swim]() {
            console.log('swimming');
        }
    }
    console.log(obj.name) // 不能用這種方法取，undefined;
    console.log(obj['name']) // 不能用這種方法取，undefined;
    console.log(obj[name]) // Fish;
    obj[swim](); //swimming

    // Set

    // Map

    return(<></>)
}

export default Example0;