import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount, removeProduct } from '../store';
import { increase } from '../store/userSlice';
import { useState, memo } from 'react';

let Child = memo( function(){
    console.log('re');
    return <div>Child</div>
});


function Cart(){

    let store = useSelector((state)=>{ return state.cartEa });
    let users = useSelector((state)=>{ return state.user })
    let dispatch = useDispatch();
    let [count,setCount] = useState(0);

    return(
        <div className="container cart">
            <Child count={count}></Child>
            <button onClick={()=>{ setCount(count+1) }}>{count}</button>
            <h2>cart</h2>
            <h3>{users.name} {users.age}살의 장바구니</h3>
            <button onClick={()=>{
                dispatch(increase(100))
            }}>나이 변경</button>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        store.map((a,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{ store[i].id }</td>
                                    <td>{ store[i].name }</td>
                                    <td>{ store[i].count }</td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(changeCount(store[i].id))
                                        }}>+</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(removeProduct(store[i].id))
                                        }}>삭제</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table> 
        </div>
    );
}

export default Cart;