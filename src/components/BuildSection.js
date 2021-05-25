import React from "react";
import styled from "styled-components";
import icon1 from "../images/icon-person.svg";
import icon2 from "../images/icon-cog.svg";
import icon3 from "../images/icon-chart.svg";
import bgPatern from "../images/bg-pattern-home-3.svg";
const BuildSection = () => {
    return (
        <BuildWrapper>
            <div className="container">
                <div className="line"></div>
                <div className="build-container">
                    <div className="heading">
                        <h1>Build & manage <br />
                    distributed <br />
                    teams like no one <br />else.</h1>
                    </div>
                    <div className="features">
                        <div className="feature">
                            <div className="img">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="info">
                                <h3>Experienced Individuals</h3>
                                <p>Our network is made up of highly experienced <br />
                                professionals who are passionate about what they do.</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="img">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="info">
                                <h3>Easy to Implement</h3>
                                <p>Our processes have been refined over years of <br />
                                implementation meaning our teams always deliver.</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="img">
                                <img src={icon3} alt="" />
                            </div>
                            <div className="info">
                                <h3>Enhanced Productivity</h3>
                                <p>Our customized platform with in-built analytics helps <br />
                                you manage your distributed teams.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BuildWrapper>
    )
}
const BuildWrapper = styled.section`
background-color: #012F34;
background-image: url(${bgPatern});
background-repeat:no-repeat;
background-position: bottom right -100px;
padding-top: 150px;
padding-bottom: 100px;
.line{
    background-color: #F67E7E;
    height: 4px;
    width: 50px;
    margin-left: 75px;
}
.build-container{
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    grid-gap: 100px;
    align-items: flex-start;
    margin-top: 40px;
    .heading h1{
        font-size: 48px;
        font-weight: 700;
        line-height: 60px;
    }
    .feature{
        display: flex;
        align-items: center;
        margin-bottom: 55px;
        h3{
            color: #F67E7E;
            font-size: 19px;
            font-weight: 700;
            line-height: 28px;
            margin-bottom: 15px;
        }
        p{
            color: white;
            font-size: 16px;
            font-weight: 600;
            line-height: 25px;
        }
        .img{
            margin-right: 20px;
        }
    }
}
@media (max-width:1200px){
    background-position: top right -100px;
    .build-container{
        grid-template-columns: 1fr;
        padding-left: 140px;
        padding-right: 140px;
        h1{
            br:nth-of-type(1),br:nth-of-type(3){
                display: none;
            }
        }
    }
    .line{
        margin-left: 140px;
    }
    .feature{
        p{
            br{
                display: none;
            }
        }
    }
}
@media (max-width:1020px){
    .line{
        margin-left: 148px;
    }
    .build-container{
        text-align: center;
    }
}
@media (max-width:700px){
    .line{
        margin-left: 0px;
    }
    .build-container{
        padding-left: 0px;
        padding-right: 0px;
        .heading{
            text-align: left;
            padding-right: 50px;
            h1{
                font-size: 42px;
            }
        }
        .feature{
            flex-direction: column;
            .img{
                margin-right: 0px;
            }
        }
    }
}
`
export default BuildSection;