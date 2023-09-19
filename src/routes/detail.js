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
let MsgBox = styled.div`
  width:100%;
  height:50px;
  color:#000;
  text-align:center;
  line-height:50px;
  background:grey;
  border:1px solid #000;
  border-radius:10px;
  margin-top:20px;
`

function Detail(props){

  useEffect(()=>{
    for (var i = 0; i < 10000; i++){
      console.log(i);
    }
  })

  setTimeout( ()=> {},2000);
  

  let [count,setCount] = useState(0);

  let {id} = useParams();
  let findPrd = props.shoes.find(function(x){
    return x.id == id;
  });

  return (
    <div className="container">
      {count}
      <button onClick={()=>{ setCount(count+1) }}>Button</button>
      <BlackBox>
          <BtnStyled bg="yellow">Button</BtnStyled>
          <BtnStyled bg="blue">Button</BtnStyled>
          <BtnStyled bg="orange">Button</BtnStyled>
      </BlackBox>
      <MsgBox>2초이내 구매 시 할인</MsgBox>
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

export default Detail;