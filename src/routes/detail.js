import { useParams } from "react-router-dom";
import styled from "styled-components";
import {useState, useEffect} from "react";

let BtnStyled = styled.button`
  background: ${ props=> props.bg };
  color: ${ props => props.bg === 'blue' ? 'white' : 'black'};
  padding:10px;      
`
let BlackBox = styled.div`
  background:grey;
  padding:20px;
`

function Detail(props){
  
  let [count,setCount] = useState(0);
  let [msg, setMsg] = useState(true);

  let {id} = useParams();
  let findPrd = props.shoes.find(function(x){
    return x.id == id;
  });

  let [num, setNum] = useState('')

  useEffect(()=>{
    setTimeout( ()=> {
      setMsg(false);
    },2000);

    if (isNaN(num) === true){
      alert('ERROR')
    }
  }, [num])

  return (
    <div className="container">
      {count}
      <button onClick={()=>{ setCount(count+1) }}>Button</button>
      <BlackBox>
          <BtnStyled bg="yellow">Button</BtnStyled>
          <BtnStyled bg="blue">Button</BtnStyled>
          <BtnStyled bg="orange">Button</BtnStyled>
      </BlackBox>
      {
        msg === true ? <MsgBox/> : null
      }
      <input onChange={(e)=>{ setNum(e.target.value) }} />
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${id}.jpg`} width="100%" alt="detail img" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{ findPrd.title }</h4>
          <p>{ findPrd.content }</p>
          <p> { findPrd.price } </p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  );
}

function MsgBox(){
  return(
    <div className="msg_box">2초 이내에 구입 시 할인</div>
  );
}

export default Detail;