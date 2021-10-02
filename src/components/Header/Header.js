import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Button, Image, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    
    return (
        
        <Navbar bg="light" expand="lg">
            
            <NavLink to="/home">
                <Image height="50px" src="./logo192.png" />
            </NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" />
            
                <Navbar.Collapse>
                    <Nav className="me-auto nav">
                        <NavLink to="/all_sports">All sports </NavLink>
                        <div className="vr" />
                        <NavLink to="/la_liga">La Liga</NavLink>
                        <div className="vr" />
                        <NavLink to="/english_league">English Premier League</NavLink>
                        <div className="vr" />
                        <NavLink to="/stadium">Stadium</NavLink> 
                        <div className="vr" />  
                        <NavLink to="/api">About API</NavLink>  
                    </Nav>
                    <div className="search-feild">
                        <input type="text" placeholder="search" />
                        <Button variant="secondary">Search</Button>
                    </div>
                </Navbar.Collapse>
                
        </Navbar>
    );
};

export default Header;