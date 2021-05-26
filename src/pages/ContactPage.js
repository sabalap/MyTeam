import React from "react";
import person from "../images/icon-person.svg";
import usage from "../images/icon-cog.svg";
import chart from "../images/icon-chart.svg";
import bgPattern1 from "../images/bg-pattern-contact-2.svg";
import bgPattern2 from "../images/bg-pattern-about-2-contact-1.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
const Contact = () => {
    const pageVariants = {
        in: {
            y: 0
        },
        out: {
            y: "120px"
        }
    }
    const pageTransition = {
        duration: 0.5
    }
    return (
        <ContactWrapper>
            <motion.div className="container" initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <div className="text">
                    <h1>Contact</h1>
                    <h3>Ask us about</h3>
                    <div className="feature">
                        <img src={person} alt="" />
                        <p>The quality of our talent network</p>
                    </div>
                    <div className="feature">
                        <img src={usage} alt="" />
                        <p>Usage and implementation of our software</p>
                    </div>
                    <div className="feature">
                        <img src={chart} alt="" />
                        <p>How we help drive innovation</p>
                    </div>
                </div>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" required />
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" required />
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" required />
                    <label htmlFor="message">Message</label>
                    <textarea type="text" id="message" />
                    <button type="submit">Submit</button>
                </form>
            </motion.div>
        </ContactWrapper>
    )
}
const ContactWrapper = styled.header`
background-color: #014E56;
background-image: url(${bgPattern2}),url(${bgPattern1});
background-position: top 120px left -100px, bottom right -100px;
background-repeat: no-repeat;
padding-top: 110px;
padding-bottom: 120px;
.container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 50px;
    padding-right: 50px;
    column-gap: 40px;
    .text{
        margin-top: 60px;
    }
    h1{
        font-size: 64px;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 60px;
    }
    h3{
        color: rgb(246,126,126);
        font-size: 32px;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 50px;
    }
    .feature{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        p{
            font-size: 18px;
            font-weight: 600;
            line-height: 28px;
            margin-left: 25px;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        input{
            padding-top: 7px;
            padding-bottom: 7px;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid black;
            outline: none;
            margin-bottom: 30px;
            color: white;
            font-size: 17px;
            &:focus{
                border-bottom: 2px solid black;
            }
        }
        textarea{
            padding-top: 7px;
            padding-bottom: 7px;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid black;
            outline: none;
            margin-bottom: 30px;
            color: white;
            font-size: 17px;
            &:focus{
                border-bottom: 2px solid black;
            }
        }
        label{
            margin-bottom: -5px;
        }
        label:last-of-type{
            margin-bottom: 25px;
        }
        button{
            margin-top: 25px;
            background: transparent;
            color: #FFF;
            border: 2px solid #FFF;
            max-width: 70px;
            padding:15px 80px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100px;
            font-size: 18px;
            font-weight: 400;
            transition: 0.3s ease;
            cursor: pointer;
            &:hover{
                background: white;
                color: #002529;
            }
        }
    }
}
@media (max-width:1280px){
    .container{
        padding-left: 90px;
        padding-right: 90px;
        column-gap: 55px;
    }
}
@media (max-width:1024px){
    .container{
        grid-template-columns: 1fr;
        .text{
            text-align: center;
            .feature{
                justify-content: center;
            }
        }
        form{
            padding-left: 100px;
            padding-right: 100px;
            margin-top: 60px;
            button{
                margin: 25px auto 0px;
            }
        }
    }
}
@media (max-width:640px){
    padding-bottom: 150px;
    background-position: top 30px left -100px,center bottom -100px;
    .container{
        padding-left: 20px;
        padding-right: 20px;
    }
    form{
        padding-left: 0px !important;
        padding-right: 0px !important;
        button{
            margin: 25px auto 30px !important;
        }
    }
    .text{
        margin-top: 130px !important;
        h1{
            font-size: 46px;
        }
        h3{
            font-size: 28px;
        }
        .feature{
            flex-direction: column;
            img{
                margin-bottom: 15px;
            }
            p{
                margin-left: 0px;
            }
        }
    }
}
`
export default Contact;