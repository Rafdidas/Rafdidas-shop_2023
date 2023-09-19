import { useParams } from "react-router-dom";
import styled from "styled-components";

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

  let {id} = useParams();
  let findPrd = props.shoes.find(function(x){
    return x.id == id;
  });

  return (
    <div className="container">
      <BlackBox>
          <BtnStyled bg="yellow">Button</BtnStyled>
          <BtnStyled bg="blue">Button</BtnStyled>
          <BtnStyled bg="orange">Button</BtnStyled>
      </BlackBox>
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