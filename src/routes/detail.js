import { useParams } from "react-router-dom";
import styled from "styled-components";
import {useState, useEffect, useContext} from "react";

import {Context1} from './../App.js';

import { useDispatch } from "react-redux";
import { addProduct } from "../store.js";

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
  
  let [tab, setTab] = useState(0);
  let TabClick = (index) => {
    setTab(index);
  };

  let [fade,setFade] = useState('')
  useEffect(()=>{
    setFade('end')
    return ()=>{
      setFade('')
    }
  },[])

  let {재고} = useContext(Context1);

  let dispatch = useDispatch();

  return (
    <div className={`container start ${fade}`}>
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
          <button className="btn btn-danger" onClick={()=>{
            dispatch(
              addProduct(
                {id: id, name: findPrd.title, count: '1'}
              )
            )
          }}>주문하기</button>
          <div>{재고}</div>
        </div>
      </div>
      <TabCont tab={tab} shoes={props.shoes} TabClick={TabClick}/>
    </div> 
  );
}

function TabCont({tab, shoes, TabClick}){
  let {재고} = useContext(Context1);
  return(
    <>
    <ul className="tab_box">
        <li className={tab === 0 ? 'active' : ''} onClick={()=> TabClick(0)}><span>tab 01</span></li>
        <li className={tab === 1 ? 'active' : ''} onClick={()=> TabClick(1)}><span>tab 02</span></li>
        <li className={tab === 2 ? 'active' : ''} onClick={()=> TabClick(2)}><span>tab 03</span></li>
    </ul>
    <div className={tab === 0 ? 'tabCnt tabCnt0 active' : 'tabCnt tabCnt0 start'}>{shoes[tab].title} {재고[0]}</div>
    <div className={tab === 1 ? 'tabCnt tabCnt1 active' : 'tabCnt tabCnt1 start'}>{shoes[tab].content} {재고[1]}</div>
    <div className={tab === 2 ? 'tabCnt tabCnt2 active' : 'tabCnt tabCnt2 start'}>{shoes[tab].price} {재고[2]}</div>
    </>
  );
}

function MsgBox(){
  return(
    <div className="msg_box">2초 이내에 구입 시 할인</div>
  );
}

export default Detail;