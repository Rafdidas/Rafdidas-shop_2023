import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart(){

    let store = useSelector((state)=>{ return state });

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
                    <tr>
                        <td>{ store.cartEa[0].id }</td>
                        <td>{ store.cartEa[0].name }</td>
                        <td>{ store.cartEa[0].count }</td>
                        <td>안녕</td>
                    </tr>
                    <tr>
                        <td>{ store.cartEa[1].id }</td>
                        <td>{ store.cartEa[1].name }</td>
                        <td>{ store.cartEa[1].count }</td>
                        <td>안녕</td>
                    </tr>
                </tbody>
            </Table> 
        </div>
    );
}

export default Cart;