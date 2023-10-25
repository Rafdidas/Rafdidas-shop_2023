import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

import data from './data';
import Detail from './routes/detail';
import Cart from './routes/cart';

import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

export let Context1 = createContext();

function App() {

  let [shoes,setShoes] = useState(data);
  let [재고] = useState([10,11,12]);

  let navigate = useNavigate();

  let [watched, setWatched] = useState([]);
  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify([]))
    let initialWatched = JSON.parse(localStorage.getItem('watched')) || [];
    setWatched(initialWatched);
    //localStorage.setItem('watched', JSON.stringify([]))
  }, []);

  // let updateWatched = (newWatched)=>{
  //   setWatched(newWatched);
  // };

  useEffect(()=>{
    console.log(watched);
  });

  

  return (
    <div>
      <Navbar bg="dark" variant="dark" className='header'>
        <Container>
        <Navbar.Brand><Link to='/'>Shop</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={ ()=>{ navigate('/') } }>Home</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/detail/1') } }>Detail</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/cart') } }>Cart</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/about') } }>About</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/about/member') } }>Member</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/about/location') } }>Location</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/event') } }>Event</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/event/one') } }>Event One</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/event/two') } }>Event Two</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={
          <>
            <div className='main_bg'></div>
            <div className='main_inner'>
              <div className='main_prd'>
                {
                  shoes.map(function(shoes,index){
                    return(
                      <PrdBox shoes={shoes} key={index}/>
                    )
                  })
                }
              </div>
              <div className='btn_box'>
                <span className='box_btn' onClick={()=>{
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((res)=>{ 
                    const newData = res;
                    setShoes(shoes => [...shoes, ...newData.data]);
                    console.log(newData);
                  })
                  .catch(()=>{ console.log('실패'); })
                }}>More</span>
              </div>
            </div>
            <RecentMain watched={ watched } />
          </>
        }/>
        <Route path='/detail/:id' element={
          <Context1.Provider value={{ 재고 }}>
            <Detail shoes={ shoes } watched={ watched } setWatched={ setWatched }  />
          </Context1.Provider>
        } />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>Member</div>} />
          <Route path='location' element={<div>Location</div>} />
          <Route/>
        </Route>
        <Route path='/event' element={<Event/>} >
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path='*' element={<div>404 ERROR</div>} />
      </Routes>
    </div>
  );
}

function PrdBox({shoes}){
  return(
    
    <div className='box'>
      <Link to={'/detail/'+shoes.id}>
        <div className='img'><img alt="shoes" src={process.env.PUBLIC_URL + '../img/shoes'+shoes.id+'.jpg'}/></div>
      </Link>
      <div className='info'>
        <p className='subject'>{ shoes.title }</p>
        <p className='content'>{ shoes.content }</p>
        <p className='price'>{ shoes.price }</p>
      </div>
    </div>
  );
}

function About(){
  return(
    <div className='about'>
      <h4>About</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event(){
  return(
    <div className='event'>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function RecentMain(props){
  return(
    <div className='main_recent'>
      <h4>최근 본 상품</h4>
      <ul>
        {
          props.watched.map((a,i)=>{
                return(
                    <li key={i}>{ props.watched[i] }</li>
                );
            })
          }
        
      </ul>
    </div>
  )
}

export default App;
