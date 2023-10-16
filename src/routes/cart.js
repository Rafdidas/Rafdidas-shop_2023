import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart(){

    let store = useSelector((state)=>{ return state.cartEa });

    return(
        <div className="container cart">
            <h2>cart</h2>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
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
                                    <td>안녕</td>
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