import React from 'react';
import Header from "../../components/Header/Header";
import Industries from "../../components/Industries/Industries";
import HeartbeatMiniSection from "../../components/HeartbeatMiniSection/HeartbeatMiniSection";
import Services from "../../components/Services/Services";

function Home(props) {
    return (
        <>
            <Header />
            <Industries />
            <HeartbeatMiniSection />
            <Services />
        </>
    );
}

export default Home;