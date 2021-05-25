import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";
import bgPatern from "../images/bg-pattern-home-6-about-5.svg";
const Banner = () => {
    return (
        <BannerWrapper>
            <div className="container">
                <div className="banner">
                    <h1>Ready to get started?
                    </h1>
                    <Link to="/contact">
                        contact us
                    </Link>
                </div>
            </div>
        </BannerWrapper>
    )
}
const BannerWrapper = styled.section`
background-color: #F67E7E;
padding:75px 0px;
background-image: url(${bgPatern});
background-position: left bottom -2px;
background-repeat: no-repeat;
background-size: 250px;
.banner{
    display: grid;
    grid-template-columns: auto auto;
    padding: 0px 170px;
    h1{
        font-size: 48px;
        color: rgb(1,47,52);
        font-weight: 700;
        line-height: 55px;
    }
    a{
        background-color: transparent;
        border: 2px solid #012F34;
        max-width: 170px;
        padding: 0px 35px;
        text-align: center;
        color: #012F34;
        border-radius: 100px;
        font-weight: 600;
        font-size: 18px;
        margin-left: auto;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        display: flex;
        align-items: center;
        &:hover{
            background-color: #012F34;
            color: white;
        }
    }
}
@media (max-width:1200px){
    background-position: left bottom -25px;
    .banner{
        padding-bottom: 40px;
        padding-left: 80px;
        padding-right: 80px;
    }
}
@media (max-width:1020px){
    .banner{
        padding-left: 40px;
        padding-right: 40px;
        grid-template-columns: 1fr;
        text-align: center;
        h1{
            margin-bottom: 35px;
        }
    }
    .banner a{
        margin: 0 auto;
    }
}
`
export default Banner;