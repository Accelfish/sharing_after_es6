import {useEffect, useState} from "react";
import {Btn} from "../styledComponent/btn";
import SubComponent from "../SubComponent";

// 展開 & 其餘參數
function Example2(){
    useEffect(()=>{
        console.clear();
    }, []);

    // 接 API data
    const [res, setRes] = useState({});

    // 控制顯示
    const [isShow, setIsShow] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsShow(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setRes(data))
    }, [isShow]);


    // useEffect(() => {
    //     fetch('/data.json')
    //         .then(result => result.json())
    //         .then(data => {
    //             setRes(data);
    //         });
    // }, []);

    // 展開複製用的空物件
    const [obj, setObj] = useState({});

    useEffect(() => {
        // 物件的展開 Spread syntax
        setObj({...res, 'name': 'SillyFish'});
    }, [res]);

    const printRes = function() {
        console.log(res, obj)
    };

    //陣列的展開 Spread syntax
    const printItem = function() {
        console.log(...res.items)
    };

    return (
        <>
            <section>
                物件展開 用展開的方式 deep copy 物件<br/>
                <Btn onClick={() => printRes()}>Print Res</Btn>
            </section>
            <section>
                陣列展開 <br/>
                <Btn onClick={() => printItem()}>Print Res.Item</Btn>
            </section>
            <section>
                {isShow?<SubComponent data={res}></SubComponent>:<div>loading</div>}
                {/*<SubComponent name={obj.name} detail={obj.items} data={obj} data2={null} ></SubComponent>*/}
            </section>
        </>
    )
}

export default Example2;