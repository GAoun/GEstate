import React from "react";
import BackgroudImage from "../assets/images/bg/bg.jpg";
import Navbar from "../component/Navbar";
import ClientTwo from "../component/Client-two";
import PropertyTwo from "../component/Property-two";
import Footer from "../component/Footer";
import About from "../component/About";
import Feature from "../component/Feature";
import Switcher from "../component/Switcher";
import GetInTuch from "../component/Get-in-tuch";
import { Link } from "react-router-dom";

export default function IndexTwo() {

    return (
        <>
            <Navbar navClass="navbar-white" />
            {/* Hero Start  */}
            <section className="relative table w-full py-36 lg:py-44 overflow-hidden zoom-image">
                <div
                    style={{ backgroundImage: `url(${BackgroudImage})` }}
                    className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"></div>
                <div className="absolute inset-0 bg-black/70 z-2"></div>
                <div className="container z-3">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6"><span className="text-green-600">Aoun</span> Real Estate </h1>
                            <p style={{letterSpacing: "0.2rem"}}  className="text-white/70 text-xl max-w-xl mx-auto">Your Key to Luxurious Homes<br/>
                            <span style={{letterSpacing: "0.3rem"}} className="text-white/70 text-sm max-w-xl mx-auto">CYPRUS | ISRAEL | ROMANIA</span></p>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="text-center">
                                <div className="mt-10"><br/>
                                <Link to="/properties" className="btn bg-green-600 hover:bg-yellow-500 text-white rounded-md"><i className="uil uil-estate align-middle me-2"></i>Properties</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* Hero End */}

            <section className="relative md:pb-24 pb-16">
                <About />

                <Feature />

                <PropertyTwo />

                <ClientTwo />

                <GetInTuch/>
            </section>
            <Footer />
            <Switcher />
            {/* <!-- End --> */}
        </>
    );

}
