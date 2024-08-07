import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Features from "./features";
import Footer from '../../components/layouts/footer/Footer';

const HomePage = () => {
    return (
        <section>
            <Navbar/>
            <Features/>
            <Footer />
        </section>
    )
}

export default HomePage;