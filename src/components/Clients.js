import React from "react";
import styled from "styled-components";
import bgPattern from "../images/bg-pattern-about-4.svg";
import verge from "../images/logo-the-verge.png";
import jakarta from "../images/logo-jakarta-post.png";
import guardian from "../images/logo-the-guardian.png";
import techradar from "../images/logo-tech-radar.png";
import gadgets from "../images/logo-gadgets-now.png";
const Clients = () => {
    return (
        <ClientsWrapper>
            <div className="container">
                <h1>Some of our clients</h1>
                <div className="clients">
                    <img src={verge} alt="" />
                    <img src={jakarta} alt="" />
                    <img src={guardian} alt="" />
                    <img src={techradar} alt="" />
                    <img src={gadgets} alt="" />
                </div>
            </div>
        </ClientsWrapper>
    )
}
const ClientsWrapper = styled.section`
background-color: #012F34;
background-image: url(${bgPattern});
background-position: top left;
background-repeat: no-repeat;
padding-top: 140px;
padding-bottom: 130px;
h1{
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 65px;
}
.clients{
    display: grid;
    grid-template-columns: 160px 160px 160px 160px 115px;
    justify-content: space-between;
    align-items: center;
    img{
        width: 100%;
        transition: 0.3s ease;
        &:hover{
            box-shadow: 0 1rem 2rem rgb(0 0 0 / 30%);
            transform: rotate(
            5deg
            ) scale(1.1);
        }
    }
}
@media (max-width:768px){
    padding-bottom: 80px;
    h1{
        margin-top: 80px;
    }
    .clients{
        grid-template-columns: 180px;
        justify-content: center;
        img{
            margin-bottom: 40px;
        }
    }
}
`
export default Clients;