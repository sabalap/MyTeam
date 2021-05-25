import React from "react"
import styled from "styled-components"
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <FooterWrapper>
            <div className="container">
                <div className="footer-nav">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <ul>
                        <li>
                            <Link to="/">
                                home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                about
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="address">
                    <li>987 Hillcrest Lane</li>
                    <li>Irvine, CA</li>
                    <li>California 92714</li>
                    <li>Call Us : 949-833-7432</li>
                </ul>
                <div className="social-box">
                    <ul>
                        <li>
                            <i className="fab fa-facebook-square"></i>
                        </li>
                        <li>
                            <i className="fab fa-pinterest"></i>
                        </li>
                        <li>
                            <i className="fab fa-twitter"></i>
                        </li>
                    </ul>
                    <p>Copyright 2021. All Rights Reserved</p>
                </div>
            </div>
        </FooterWrapper>
    )
}
const FooterWrapper = styled.footer`
background-color: #002529;
padding-top: 50px;
padding-bottom: 50px;
.container{
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    .footer-nav{
        img{
            margin-bottom: 21px;
            transition: 0.2s ease-in-out;
            &:hover{
                background: #F67E7E;
            }
        }
        ul{
            display: flex;
            li:first-of-type{
                margin-right: 45px;
            }
            li{
            transition: 0.2s ease-in-out;
            font-size: 18px;
            &:hover{
                transform: rotate(-5deg) scale(1.15);
            }
        }
        a{
            transition: 0.2s ease-in-out;
            &:hover{
                color:#F67E7E;
            }
        }
        }
    }
    .address{
        margin-right: 170px;
        li{
            margin-bottom: -17px;
            font-size: 15px;
        }
    }
    .social-box{
        ul{
            display: flex;
            margin-bottom: 35px;
            justify-content: flex-end;
            li{
                margin-right: 20px;
                font-size: 25px;
                transition: 0.3s ease;
                cursor: pointer;
                &:hover{
                    transform: scale(1.2) rotate(360deg);
                    color: #F67E7E;
                }
            }
        }
    }
}
@media (max-width:1020px){
    .container{
        display: flex;
        flex-wrap: wrap;
        .footer-nav{
            margin-bottom: 10px;
        }
        .social-box{
            display: flex;
            width: 100%;
            justify-content: space-between;
        }
        .address{
            margin-right: 0px;
        }
    }
}
@media (max-width:700px){
    .container{
        flex-direction: column;
        align-items: center;
        text-align: center;
        .footer-nav{
            ul{
                justify-content: center;
            }
        }
        .social-box{
            flex-direction: column;
            align-items: center;
            ul{
                margin-bottom: 0px;
                li:last-of-type{
                    margin-right: 0px;
                }
            }
        }
        .address{
            margin-bottom: 30px;
        }
    }
}
`
export default Footer;