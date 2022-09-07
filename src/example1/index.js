import {useEffect, useState} from "react";
import {Btn} from "../styledComponent/btn";

//解構賦值
function Example1(){
    useEffect(()=>{
        console.clear();
    }, []);

    // Destructuring assignment
    // 解構1 陣列的解構
    // useState => [state, 改變 state 的 function]
    const [count, setCount] = useState(0);

    // 解構賦值時，可重新命名變數
    const [word, wordChange] = useState('word');

    // 接 API data
    const [res, setRes] = useState({});

    const plusNumber = 2;
    // call 解構後的 setCount
    const plus = (plusNumber) => setCount(prevCount => prevCount + plusNumber);

    useEffect(() => {
        fetch('/data.json')
            .then(result => result.json())
            .then(data => {
                console.group('解構賦值');
                console.log('raw', data);
                //解構2 物件的解構，取出特定 Property
                const { items } = data;
                console.log('物件的解構 特定Property:', items);

                //解構2 物件解構的 rename { Property: 新的變數 }
                const { items: listItem } = data;
                console.log('物件的解構 重新命名:', listItem);

                //解構2 物件解構的預設值
                console.log('cooking method:', items[2].cookingMethod);
                const {cookingMethod = ['eatraw']} = items[2];
                console.log('default cooking method:', cookingMethod);

                //解構3 陣列的解構，取出各項值 => 重新賦值
                const [fish, apple, slime] = items;
                console.group('陣列的解構:');
                console.log('item1 fish:', fish);
                console.log('item2 apple:', apple);
                console.log('item3 slime:', slime);

                console.groupEnd();
                console.groupEnd();

                setRes(data);
            });
    }, []);

    return (
        <>
            <section>
                陣列解構
                $count：{count}<br/>
                <Btn onClick={() => plus(plusNumber)}>plus {plusNumber}</Btn>
            </section>
            <section>
                陣列解構賦值
                $word：{word}<br/>
                <Btn onClick={() => wordChange('world')}>word2world</Btn>
            </section>
        </>
    )
}

export default Example1;