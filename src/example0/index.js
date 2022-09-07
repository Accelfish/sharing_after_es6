function Example0(){
    // Symbol
    const swim = Symbol();
    const obj = {
        [Symbol('name')]: 'Fish',
        [swim]() {
            console.log('swimming');
    }

    // Set 值唯一
    const notUniqueArr = [1,1,1,2,3,4,5,6,7,8,3,5,6,7];
    const uniqueSet = new Set([...notUniqueArr]);
    console.group("Set")
    console.log(notUniqueArr);
    console.log(uniqueSet);
    console.groupEnd();


    // Map key可以是任何東西
    function printHell(){
        console.log('Hell');
    };

    const mapExample = new Map();
    console.group("Map");
    //使用 set 放內容
    mapExample.set('string', {'desc': 'this key is string'});
    mapExample.set(1, {'desc': 'this key is number'});
    mapExample.set(printHell, {'desc': 'this key is function'});
    console.log('map:', mapExample);
    //使用 get 拿內容
    console.log('map key is function', mapExample.get(printHell));
    console.log('map key is number', mapExample.get(1));
    console.log('map key is string', mapExample.get('string'));
    //使用 size 取數量
    console.log('map count', mapExample.size);
    //使用 has 確認存在
    console.log('map has', mapExample.has(1));
    console.log('map has', mapExample.has(2));

    console.group("for of Map");

    //用 for of 遍歷
    for (const [key, value] of mapExample) {
        switch (typeof(key)) {
            case 'function':
                console.log('function', key, value);
                //console.log('function', key(), value);
                break;
            case 'string':
                console.log('string', key, value);
                break;
            case 'number':
                console.log('number', key, value);
                break;
        }
    };
    // 清空 map
    mapExample.clear();
    console.log(mapExample);
    console.groupEnd();
    console.groupEnd();


    // 用物件模擬 map
    // class myMap{
    //     constructor(){
    //         this.items = {}
    //     }
    //     set (key, value) {
    //         this.items[key] = value;
    //     };
    //     delete (key) {
    //         if(this.has(key)){
    //             delete this.items[key];
    //             return true;
    //         }
    //         return false;
    //     };
    //     has (key) {
    //         return this.items.hasOwnProperty(key)
    //     };
    //     get (key) {
    //         return this.has(key) ? this.items[key] : undefined;
    //     };
    //     clear () {
    //         this.items = {}
    //     };
    //     size () {
    //         return Object.keys(this.items).length;
    //     };
    //     keys () {
    //         return Object.keys(this.items);
    //     };
    //     values () {
    //         return Object.values(this.items);
    //     };
    // };
    // const dictionary = new myMap();;
    // dictionary.set('Mark', 'mark@gmail.com');
    // dictionary.set('Ivy', 'ivy@gmail.com');
    // dictionary.set('Mary', 'mary@gmail.com');
    // console.log(dictionary.values())
    //

    return(<></>)
}

export default Example0;