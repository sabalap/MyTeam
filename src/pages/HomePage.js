import React from "react";
import BuildSection from "../components/BuildSection";
import Header from "../components/Header";
import SuccessSection from "../components/SuccessSection";
import Banner from "../components/ReadyBanner";
const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <BuildSection />
            <SuccessSection />
            <Banner />
        </React.Fragment>
    )
}

export default HomePage;