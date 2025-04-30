import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div id='nav'>
                <div id='nav_left '>Logo</div>
                <div id='nav_right'>
                    <Link to='/home'><span>home</span></Link>
                    <Link to='/about'><span>about</span></Link>
                    <Link to='/products'><span>Products</span></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
