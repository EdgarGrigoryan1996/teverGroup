import React from 'react';
import Header from "../../components/Header/Header";
import HeartbeatMiniSection from "../../components/HeartbeatMiniSection/HeartbeatMiniSection";
import Services from "../../components/Services/Services";
import UsefulResources from "../../components/UsefulResources/UsefulResources";
import Price from "../Services/Price/Price";
import EmailSendMethods from "../../components/EmailSendMethods/EmailSendMethods";

function Home() {
    return (
        <>
            <Header />
            <Services />
            <HeartbeatMiniSection />
            {/*<Projects />*/}
            <UsefulResources />
            {/*<Price />*/}
            <EmailSendMethods />
        </>
    );
}

export default Home;