import React from "react";
import { Link as Link2 } from "react-router-dom";
import Navbar from "../component/Navbar";
import BackgroudImage from "../assets/images/bg/01.jpg";
import { Hexagon } from 'react-feather';
import ClientTwo from "../component/Client-two";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";
import GetInTuch from "../component/Get-in-tuch";

export default function Features() {
    return (
        <>
            <Navbar navClass="navbar-white" />
            {/* <!-- Start Hero --> */}
            <section
                style={{ backgroundImage: `url(${BackgroudImage})` }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Services</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            {/* <!-- End Hero --> */}

            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[50px]">

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-home-city-outline"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Property Listing</Link2>
                                <p className="text-slate-400 mt-3">We help you showcase your property to a wide range of potential buyers through our comprehensive property listing service. With professional photography, compelling descriptions, and targeted marketing, we ensure that your property stands out in the market and attracts interested buyers.</p>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-shield-sun"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Buyer Representation</Link2>
                                <p className="text-slate-400 mt-3">As your trusted real estate agency, we provide dedicated buyer representation services. Our experienced agents guide you through the entire buying process, from property search to negotiation and closing. We understand your unique requirements and work tirelessly to find the perfect property that meets your needs and fits your budget.</p>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-star"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Property Marketing</Link2>
                                <p className="text-slate-400 mt-3">Effective property marketing is essential for attracting potential buyers. We create strategic marketing campaigns tailored to your property, leveraging various channels and platforms to reach a wide audience. From online listings to print advertisements, we ensure maximum exposure and visibility for your property.</p>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-currency-usd"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Property Valuation</Link2>
                                <p className="text-slate-400 mt-3">Accurate property valuation is crucial for making informed decisions in the real estate market. Our skilled team utilizes in-depth market analysis and industry expertise to provide you with comprehensive property valuation services. Whether you are buying or selling, our valuation reports help you determine the fair market value of the property.</p>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-map-marker"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Property Management</Link2>
                                <p className="text-slate-400 mt-3">We offer professional property management services to help you efficiently handle your real estate investments. From tenant screening and rent collection to property maintenance and legal compliance, our experienced team ensures smooth operations and maximizes the return on your investment.</p>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-chart-arc"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Investment Consultation</Link2>
                                <p className="text-slate-400 mt-3">Considering real estate as an investment? Our expert consultants provide personalized investment advice based on your financial goals and risk tolerance. We analyze market trends, identify lucrative investment opportunities, and guide you in making sound investment decisions that yield long-term returns.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <ClientTwo />

                <GetInTuch/>
            </section>
            <Footer />
            <Switcher />
        </>
    );

}
