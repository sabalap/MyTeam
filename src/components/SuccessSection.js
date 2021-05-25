import React from "react";
import styled from "styled-components";
import kady from "../images/avatar-kady.jpg";
import aiysha from "../images/avatar-aiysha.jpg";
import arthur from "../images/avatar-arthur.jpg";
import bgPatern1 from "../images/bg-pattern-home-4-about-3.svg";
import bgPatern2 from "../images/bg-pattern-home-5.svg";
import quotes from "../images/icon-quotes.svg";
const SuccessSection = () => {
    return (
        <SuccessWrapper>
            <div className="container">
                <h1>
                    Delivering real results for top
                    companies. Some of our <span>success stories.</span>
                </h1>
                <div className="stories">
                    <div className="story">
                        <p>
                            “The team perfectly fit the specialized skill set required.
                            They focused on the most essential features helping us launch the platform
                            eight months faster than planned.”
                        </p>
                        <h3>Kady Baker</h3>
                        <p>Product Manager at Bookmark</p>
                        <img src={kady} alt="" />
                    </div>
                    <div className="story">
                        <p>
                            “We needed to automate our entire onboarding process.
                            The team came in and built out the whole journey.
                            Since going live, user retention has gone
                            through the roof!”
                        </p>
                        <h3>Aiysha Reese</h3>
                        <p>Founder of Manage</p>
                        <img src={aiysha} alt="" />
                    </div>
                    <div className="story">
                        <p>
                            “Amazing. Our team helped us build an app that delivered a new experience
                            for hiring a physio.
                            The launch was an instant success with 100k downloads in the first month.”
                        </p>
                        <h3>Arthur Clarke</h3>
                        <p>Co-founder of MyPhysio</p>
                        <img src={arthur} alt="" />
                    </div>
                </div>
            </div>
        </SuccessWrapper>
    )
}
const SuccessWrapper = styled.section`
background-color: #004047;
background-image: url(${bgPatern1}),url(${bgPatern2});
background-repeat: no-repeat;
background-position: top left, bottom right;
padding-top: 140px;
padding-bottom: 150px;
.container > h1{
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    color: white;
    margin-bottom: 80px;
    span{
        color: rgb(121,200,199);
    }
}
.stories{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 70px;
    .story{
        text-align: center;
        background-image: url(${quotes});
        background-repeat: no-repeat;
        background-position: top;
        p{
            font-size: 16px;
            font-weight: 600;
            line-height: 25px;
            margin-bottom: 20px;
        }
        h3{
            color: rgb(121,200,199);
            font-weight: 700;
            font-size: 19px;
            line-height: 28px;
            margin-bottom: 10px;
        }
        p:last-of-type{
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
        }
        img{
            height: 70px;
            width: 70px;
            border-radius: 50%;
            border: 2px solid #C4FFFE;
            cursor: pointer;
            transition: 0.4s ease;
            &:hover{
                transform: scale(1.2) rotate(360deg);
                box-shadow: 0 1rem 5rem rgb(196 255 254 / 40%);
            }
        }
    }
}
@media (max-width:1200px){
    .stories{
        grid-template-columns: 1fr;
    }
}
@media (max-width:700px){
    .container h1{
        font-size: 40px;
    }
}
`
export default SuccessSection;