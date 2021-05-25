import React from "react";
import styled from "styled-components";
import bgPatern1 from "../images/bg-pattern-home-1.svg";
import bgPatern2 from "../images/bg-pattern-home-2.svg";
const Header = () => {
    return (
        <HeaderWrapper>
            <div className="container">
                <div className="find-talent">
                    <div className="big-text">
                        <h1>Find the
                        <br />
                        best <span>talent</span>
                        </h1>
                    </div>
                    <div className="small-text">
                        <div className="line"></div>
                        <p>Finding the right people and building high <br />
                        performing teams can be hard. Most companies <br />
                        aren’t tapping into the abundance of global <br />
                        talent. We’re about to change that.</p>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    )
}
const HeaderWrapper = styled.header`
background-color: #014E56;
background-image: url(${bgPatern1}), url(${bgPatern2});
background-repeat: no-repeat;
background-position: top 100px left -100px, bottom right 190px;
.find-talent{
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 50px;
    padding-top: 100px;
    padding-bottom: 250px;
    padding-left: 50px;
    padding-right: 50px;
    align-items: end;
    .big-text h1{
        font-size: 100px;
        font-weight: 700;
        line-height: 100px;
        span{
            color: rgb(246,126,126);
        }
    }
    .small-text {
        .line{
            height: 4px;
            width: 50px;
            background-color: #79C8C7;
            color: white;
            margin-bottom: 75px;
        }
    p{
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
    }
    }
}
@media (max-width:1200px){
    background-image: url(${bgPatern2});
    background-position: bottom;
    .find-talent{
        grid-template-columns: 1fr;
        text-align: center;
        .line{
        display: none;
        }
    }
}
@media (max-width:700px){
    .find-talent{
        padding-left: 0px;
        padding-right: 0px;
        .big-text{
            h1{
                font-size: 60px;
                line-height: 60px;
            }
        }
        .small-text{
            p{
                line-height: 28px;;
            }
        }
    }
}
`
export default Header;