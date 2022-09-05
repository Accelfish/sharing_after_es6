import {Btn} from "./styledComponent/btn";

function SubComponent(props) {

    // props 的解構
    const printProps = function ({name, detail, data, data2}) {
        console.group('props 的解構')
        console.log('name:', name);
        console.log('detail', detail);
        console.log('data', data);
        console.log('data2', data2);
        console.groupEnd();
    }

    // 可選串連 ?.
    let lists = props.data.items?.map((item) => <li key={item.id}> {item.name} </li>);

    // Nullish Coalescing Operator
    let items = props.data2 ?? [{id:1, name:'default1'}, {id:2, name:'default2'}];
    let lists2 = items.map((item) => <li key={item.id}> {item.name} </li>);

    return (
        <>
            <ul>
                可選串聯 ?.
                {lists}
            </ul>
            <Btn onClick={() => printProps(props)}> 列印函數參數解構 </Btn>

            <ul>
                Nullish Coalescing Operator ??
                {lists2}
            </ul>
        </>
    )
}

export default SubComponent;