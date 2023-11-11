import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import BackgroudImage from "../assets/images/bg/01.jpg";
import Switcher from "../component/Switcher";

export default function Privacy() {

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
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Privacy Policy</h3>
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

            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="md:flex justify-center">
                        <div className="md:w-3/4">
                            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <h5 className="text-xl font-medium mb-4">Overview</h5>
                                <p className="text-slate-400">At Aoun Real Estate Agency Ltd, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and disclose the information you provide to us through our website. By accessing or using our website, you consent to the terms of this Privacy Policy. At Aoun Real Estate Agency Ltd, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and disclose the information you provide to us through our website. By accessing or using our website, you consent to the terms of this Privacy Policy.</p>

                                <h5 className="text-xl font-medium mb-4 mt-8">We use your information to</h5>
                                <ul className="list-unstyled text-slate-400 mt-4">
                                <li className="flex mt-2"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Providing Services: We may use your personal information to provide the services you requested, such as property listings, property inquiries, and customer support.</li>
                                <li className="flex mt-2"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Communication: We may use your contact information to communicate with you regarding your inquiries, requests, or any updates about our services.</li>
                                <li className="flex mt-2"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Personalization: We may use your information to personalize your experience on our website and provide you with tailored content, such as property recommendations or relevant advertisements.</li>
                                <li className="flex mt-2"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Analytics and Improvements: We may collect non-personal information, such as website usage data, to analyze trends, track user activities, and improve our website's performance and functionality.</li>
                                <li className="flex mt-2"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Legal Compliance: We may use and disclose your information as required by applicable laws, regulations, or legal processes.</li>
                                <li className="flex mt-2"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Marketing Purposes: With your consent, we may use your information to send you promotional materials, newsletters, or updates about our services, events, or special offers.</li>
                                <li className="flex mt-2"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Security and Fraud Prevention: We may use your information to detect and prevent fraudulent activities, unauthorized access, or other security breaches.</li>
                                <li className="flex mt-2"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Aggregate Information: We may aggregate and anonymize your information to generate statistical or demographic data for internal purposes or to share with third parties for marketing or research purposes.</li>
                                <li className="flex mt-2"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Third-Party Service Providers: We may disclose your information to trusted third-party service providers who assist us in operating our website, conducting our business, or providing services to you, subject to their agreement to keep your information confidential.</li>

                                
                                
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Terms & Conditions --> */}

            <Footer />
            <Switcher />
        </>
    );

}

