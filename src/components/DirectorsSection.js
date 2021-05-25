import React from "react";
import styled from "styled-components";
import Nikita from "../images/avatar-nikita.jpg";
import Cristian from "../images/avatar-christian.jpg";
import Cruz from "../images/avatar-cruz.jpg";
import Drake from "../images/avatar-drake.jpg";
import Griffin from "../images/avatar-griffin.jpg";
import Aden from "../images/avatar-aden.jpg";
import bgPattern1 from "../images/bg-pattern-about-2-contact-1.svg";
import bgPattern2 from "../images/bg-pattern-home-4-about-3.svg";
import iconCross from "../images/icon-cross.svg";
import { useUseContext } from "../context/context";
const DirectorsSection = () => {
    const { isFlipped, flipped, backFlipped } = useUseContext();
    return (
        <DirectorsWrapper>
            <div className="container">
                <h1>Meet the directors</h1>
                <div className="directors">
                    <div className="director">
                        <div className={`${isFlipped ? "card front-side hidden" : "card front-side show"}`}>
                            <img src={Nikita} alt="" />
                            <h4>Nikita Marks</h4>
                            <p>Founder & CEO</p>
                            <div className="plus-button" onClick={flipped}>
                            </div>
                        </div>
                        <div className={`${isFlipped ? "card back-side show" : "card back-side hidden"}`}>
                            <h4>Nikita Marks</h4>
                            <p>
                                “It always amazes me how much
                                talent there is in every corner of the globe.”
                            </p>
                            <div className="icons">
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                            <div className="minus-button" onClick={backFlipped}>
                            </div>
                        </div>
                    </div>
                    <div className="director">
                        <div className={`${isFlipped ? "card front-side hidden" : "card front-side show"}`}>
                            <img src={Cristian} alt="" />
                            <h4>Cristian Duncan</h4>
                            <p>Co-founder & COO</p>
                            <div className="plus-button" onClick={flipped}>
                            </div>
                        </div>
                        <div className={`${isFlipped ? "card back-side show" : "card back-side hidden"}`}>
                            <h4>Cristian Duncan</h4>
                            <p>
                                “Distributed teams required unique processes.
                                You need to approach work in a new way.”
                            </p>
                            <div className="icons">
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                            <div className="minus-button" onClick={backFlipped}>
                            </div>
                        </div>
                    </div>
                    <div className="director">
                        <img src={Cruz} alt="" />
                        <h4>Cruz Hamer</h4>
                        <p>Co-founder & CTO</p>
                        <div className="plus-button">
                        </div>
                    </div>
                    <div className="director">
                        <img src={Drake} alt="" />
                        <h4>Drake Heaton</h4>
                        <p>Business Development Lead</p>
                        <div className="plus-button">
                        </div>
                    </div>
                    <div className="director">
                        <img src={Griffin} alt="" />
                        <h4>Griffin Wise</h4>
                        <p>Lead Marketing</p>
                        <div className="plus-button">
                        </div>
                    </div>
                    <div className="director">
                        <img src={Aden} alt="" />
                        <h4>Aden Allan</h4>
                        <p>Head of Talent</p>
                        <div className="plus-button">
                        </div>
                    </div>
                </div>
            </div>
        </DirectorsWrapper >
    )
}
const DirectorsWrapper = styled.section`
background-color: #004047;
padding-top: 140px;
padding-bottom: 190px;
background-image: url(${bgPattern1}), url(${bgPattern2});
background-repeat: no-repeat;
background-position: top left -100px, bottom right;
h1{
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 60px;
}
.directors{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(320px,350px));
    justify-content: center;
    column-gap: 30px;
    row-gap: 65px;
    .director{
        width: 100%;
        text-align: center;
        position: relative;
        cursor: pointer;
        padding-top: 30px;
        padding-bottom: 55px;
        perspective: 150rem;
        img{
            width: 96px;
            height: 96px;
            border-radius: 50%;
            border: 2px solid #C4FFFE;
        }
        .plus-button{
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background-color: rgb(246,126,126);
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            bottom: -24px;
            background-image: url(${iconCross});
            background-repeat: no-repeat;
            background-position: center;
        }
        h4{
            color: #79C8C7;
            font-size: 19px;
            font-weight: 700;
            line-height: 28px;
            margin-bottom: 5px;
        }
        p{
            font-size: 15px;
            font-weight: 600;
            font-style: italic;
            line-height: 25px;
        }
    }
    .card{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        transition: all 0.8s ease;
        padding-top: 30px;
        padding-bottom: 55px;
        background-color: #012F34;
         &:hover{
        box-shadow: 1px 2px 51px -5px rgb(121 200 199 / 50%);
        }
    }
    .back-side{
        padding-left: 40px;
        padding-right: 40px;
        transform: rotateY(180deg);
        h4{
            margin-top: 5px;
            margin-bottom: 15px;
        }
        p{
            margin-bottom: 15px;
        }
        .icons{
            font-size: 20px;
            i:first-of-type{
            margin-right: 15px;
            }
        }
        .minus-button{
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background-color: #79C8C7;
            position: absolute;
            left: 50%;
            transform: translate(-50%) rotate(45deg);
            bottom: -24px;
            background-image: url(${iconCross});
            background-repeat: no-repeat;
            background-position: center;
        }
    }
    .show{
        transform: rotateY(0);
    }
    .hidden{
        transform: rotateY(-180deg);
    }
    .director > .hidden:nth-of-type(even){
        transform: rotateY(180deg) !important;
    } 
}
`
export default DirectorsSection;