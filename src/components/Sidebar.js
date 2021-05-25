import React from "react";
import logo from "../images/logo.svg";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { useUseContext } from "../context/context";
import { Link } from "react-router-dom";
import img from "../images/bg-pattern-about-1-mobile-nav-1.svg";
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useUseContext();
    return (
        <SidebarWrapper>
            <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
                <div className="header">
                    <img src={logo} alt="" />
                    <button className="close-btn" type="button" onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <hr />
                <ul>
                    <li>
                        <Link to='/' onClick={closeSidebar}>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeSidebar}>
                            about
                        </Link>
                    </li>
                </ul>
                <Link to="/contact" className="contact-btn" onClick={closeSidebar}>
                    Contact us
                </Link>
            </aside>
        </SidebarWrapper>
    )
}
const SidebarWrapper = styled.nav`
.sidebar {
    z-index:-1;
    transition: 0.4s ease-in-out;
    width:70%;
    height:100%;
    position:fixed;
    transform:translate(100%);
    top:0;
    left:0;
    color: white;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: bottom right -95px;
    .header{
        padding: 40px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            margin-left: auto;
            display: block;
            font-size: 30px;
        }
    }
    hr{
        display: none;
    }
    ul{
        margin-top: 0px;
    }
    .close-btn{
        color: var(--clr-red-light);
        font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    }
}
.show-sidebar{
    z-index:999;
    transform:translate(45%);
    background-color: #2C6269;
    background-repeat-x: repeat;
}
ul{
    margin-top:40px;
    padding:0px 70px;
    li{
        margin-bottom:15px;
    }
    li a{
        color:white;
        font-size:23px;
    }
}
.contact-btn{
    border: 2px solid white;
    padding: 10px 30px;
    border-radius: 100px;
    display: block;
    width: 35%;
    margin: 0 auto;
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: #FFF;
        color: #002529;
    }
}
`
export default Sidebar;