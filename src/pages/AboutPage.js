import React from "react";
import AboutHeader from "../components/AboutHeader";
import Directors from "../components/Directors";
import Clients from "../components/Clients";
import Banner from "../components/ReadyBanner";
const About = () => {
    return (
        <React.Fragment>
            <AboutHeader />
            <Directors />
            <Clients />
            <Banner />
        </React.Fragment>
    )
}

export default About;