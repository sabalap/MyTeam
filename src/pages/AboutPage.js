import React from "react";
import AboutHeader from "../components/AboutHeader";
import DirectorsSection from "../components/DirectorsSection";
import Banner from "../components/ReadyBanner";
const About = () => {
    return (
        <React.Fragment>
            <AboutHeader />
            <DirectorsSection />
            <Banner />
        </React.Fragment>
    )
}
export default About;