import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
const Navigation = () => {
    const history = useHistory()
    return (
        <div className="pt-2 px-5 border-bottom">
            <Navbar expand="lg">
                <NavLink to="/" className="text-decoration-none font-weight-bold mx-3 my-2">
                    <h2 style={{color: 'rgb(0, 255, 60)', fontWeight: 'bold'}}>Aircnc</h2>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/home">Host your name</NavLink>
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/experience">Host your experience</NavLink>
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/help">Help</NavLink>
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to='/login'>Log in</NavLink>
                        <button className='btn px-4 mx-3 rounded-pill text-white font-weight-bold' style={{backgroundColor: '#3FE27C'}} onClick={() => history.push('/')}>Sign up</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;