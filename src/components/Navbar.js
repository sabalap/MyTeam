import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUseContext } from "../context/context";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    const { openSidebar } = useUseContext();
    return (
        <NavWrapper>
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <button type="button" className="nav-toggle" onClick={openSidebar}>
                    <FaBars />
                </button>
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="about">about</Link>
                        </li>
                    </ul>
                    <Link className="contact-btn" to="/contact">Contact us</Link>
                </div>
            </div>
        </NavWrapper>
    )
}
const NavWrapper = styled.nav`
background-color: #014E56;
.nav-toggle{
    background:transparent;
    border:none;
    font-size:20px;
    display:none;
}
.container{
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    > a{
        margin-right: 65px;
        width: 160px;
        height: 40px;
        transition: 0.2s ease-in-out;
        &:hover{
            background:#F67E7E;
        }
    }
    .navbar{
    display: flex;
    justify-content: space-between;
    width: 100%;
    ul{
        display: flex;
        align-items: center;
        li:first-of-type{
            margin-right: 35px;
        }
        li{
            transition: 0.2s ease-in-out;
            &:hover{
                transform: rotate(-5deg) scale(1.15);
            }
        }
        a{
            font-size: 18px;
            transition: 0.2s ease-in-out;
            &:hover{
                color:#F67E7E;
            }
        }
    }
    .contact-btn{
        background: transparent;
        color: white;
        border: 2px solid white;
        padding: 4px 35px;
        font-size: 18px;
        border-radius: 100px;
        transition: 0.2s ease-in-out;
        &:hover{
            background-color: #FFF;
            color: #002529;
        }
    }
}
}
@media (max-width:1020px){
    .container > a{
        margin-right: 50px;
    }
}
@media (max-width:700px) {
    .container{
        justify-content: space-between;
    }
    .navbar{
        display:none !important;
    }
    .nav-toggle{
        display:unset;
        font-size: 35px;
        color: turquoise;
    }
}
`
export default Navbar;