import React from 'react';
import Header from "../../components/Header/Header";
import HeartbeatMiniSection from "../../components/HeartbeatMiniSection/HeartbeatMiniSection";
import Services from "../../components/Services/Services";
import Projects from "../../components/Projects/Projects";

function Home() {
    return (
        <>
            <Header />
            <Services />
            <HeartbeatMiniSection />
            <Projects />
        </>
    );
}

export default Home;