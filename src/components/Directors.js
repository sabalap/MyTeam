import React, { useState } from "react";
import DirectorList from "./DirectorList";
import styled from "styled-components";
import nikita from "../images/avatar-nikita.jpg";
import christian from "../images/avatar-christian.jpg";
import cruz from "../images/avatar-cruz.jpg";
import drake from "../images/avatar-drake.jpg";
import griffin from "../images/avatar-griffin.jpg";
import aden from "../images/avatar-aden.jpg";
import bgPattern1 from "../images/bg-pattern-about-2-contact-1.svg";
import bgPattern2 from "../images/bg-pattern-home-4-about-3.svg";
import iconCross from "../images/icon-cross.svg";
const Directors = () => {
    const [directors, setDirectors] = useState(DIRECTORS);
    return (
        <DirectorsWrapper>
            <div className="container">
                <h1>Meet the directors</h1>
                <div className="directors">
                    <DirectorList directors={directors} />
                </div>
            </div>
        </DirectorsWrapper>
    )
}
const DIRECTORS = [
    {
        id: 1,
        img: nikita,
        name: 'Nikita Marks',
        job: 'Founder & CEO',
        quote:
            '“It always amazes me how much talent there is in every corner of the globe.”',
    },
    {
        id: 2,
        img: christian,
        name: 'Christian Duncan',
        job: 'Co-founder & COO',
        quote:
            '“Distributed teams required unique processes. You need to approach work in a new way.”',
    },
    {
        id: 3,
        img: cruz,
        name: 'Cruz Hamer',
        job: 'Co-founder & CTO',
        quote:
            "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
    },
    {
        id: 4,
        img: drake,
        name: 'Drake Heaton',
        job: 'Business Development Lead',
        quote:
            '“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”',
    },
    {
        id: 5,
        img: griffin,
        name: 'Griffin Wise',
        job: 'Lead Marketing',
        quote:
            '“Unique perspectives shape unique products, which is what you need to survive these days.”',
    },
    {
        id: 6,
        img: aden,
        name: 'Aden Allan',
        job: 'Head of Talent',
        quote:
            '“Empowered teams create truly amazing products. Set the north star and let them follow it.”',
    },
];
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
        height: 255px;
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
@media (max-width:640px){
    .container > h1{
        margin-top: 50px;
    }
    .directors {
        grid-template-columns: 280px;
    }
}
`
export default Directors;