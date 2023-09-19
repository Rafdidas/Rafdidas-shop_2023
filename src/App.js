import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

import data from './data';
import Detail from './routes/detail';

import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark" className='header'>
        <Container>
        <Navbar.Brand><Link to='/'>Shop</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={ ()=>{ navigate('/') } }>Home</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/detail/1') } }>Detail</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/about') } }>About</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/about/member') } }>Member</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/about/location') } }>Location</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/event') } }>Event</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/event/one') } }>Event One</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/event/two') } }>Event Two</Nav.Link>

        </Nav>
        </Container>
      </Navbar>

      <Link></Link>
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
            </div>
          </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={ shoes } />} />
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
      <div className='img'><img alt="shoes" src={process.env.PUBLIC_URL + '../img/shoes'+shoes.id+'.jpg'}/></div>
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

export default App;
