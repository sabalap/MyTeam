import React from "react";
import styled from "styled-components";
import img from "../images/bg-pattern-about-1-mobile-nav-1.svg";
const AboutHeader = () => {
    return (
        <AboutHeadeWrapper>
            <div className="container">
                <h1>About</h1>
                <div className="info">
                    <div className="line"></div>
                    <p>
                        We help companies build dynamic teams made up of top global talent.
                        Using our network of passionate professionals we drive innovation and deliver
                        incredible outcomes. Talented, diverse teams shape the best products and experiences.
                        We’ll bring those teams to you.
                    </p>
                </div>
            </div>
        </AboutHeadeWrapper>
    )
}
const AboutHeadeWrapper = styled.header`
background: #014E56;
padding-top: 80px;
padding-bottom: 180px;
background-image: url(${img});
background-position: bottom right -100px;
background-repeat: no-repeat;
.container{
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    grid-gap: 140px;
    padding-left: 25px;
    padding-right: 25px;
    h1{
        font-size: 64px;
        font-weight: 700;
        line-height: 100px;
    }
    p{
        font-size: 18px;
        font-weight: 600;
        line-height: 33px;
    }
    .line{
        width: 50px;
        height: 4px;
        background-color: rgb(246,126,126);
        margin-bottom: 40px;
    }
}
`
export default AboutHeader;