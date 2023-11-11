import React, { Component } from "react";
import Navbar from "../component/Navbar";

import BackgroudImage from "../assets/images/bg/01.jpg";
import Footer from "../component/Footer";

class Terms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navClass: "navbar-white",
            openSectionIndex: 0,
            sections: [
            ]
        };
        this.handleSectionClick = this.handleSectionClick.bind(this);
    }
    handleSectionClick(index) {
        this.setState(state => ({
            openSectionIndex: state.openSectionIndex === index ? -1 : index
        }));
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <React.Fragment>
                <Navbar navClass={this.state.navClass}  />
                {/* <!-- Start Hero --> */}
                <section
                    style={{ backgroundImage: `url(${BackgroudImage})` }}
                    className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover open-sans">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="container">
                        <div className="grid grid-cols-1 text-center mt-10">
                            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold open-sans text-white">Terms of Use</h3>
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

                {/* <!-- Start Terms & Conditions --> */}
                <section className="relative lg:py-24 py-16">
                    <div className="container open-sans ">
                        <div className="md:flex justify-center">
                            <div className="md:w-3/4">
                                <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                    <h5 className="text-xl font-semibold open-sans mb-4">Introduction</h5>
                                    <p className="text-slate-400">
                                    Welcome to Aoun Real Estate Agency Ltd website ("Website"). These Terms of Use govern your access to and use of the Website. By accessing or using the Website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please refrain from using the Website.
                                    </p>


                                    <h5 className="text-xl font-semibold mb-4 mt-8 open-sans">User Agreement</h5>
                                    <p className="text-slate-400">1.1 Eligibility: By using the Website, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into a binding agreement.</p><br/>
                                    <p className="text-slate-400">1.2 Account Registration: Some features of the Website may require you to create an account. When creating an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.</p><br/>
                                    <p className="text-slate-400">1.3 User Content: You may have the opportunity to submit or post content on the Website, including but not limited to property listings, comments, or reviews. By submitting or posting any content, you grant Aoun Real Estate Agency Ltd a non-exclusive, worldwide, royalty-free, perpetual, and irrevocable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in any media.</p><br/>
                                    <p className="text-slate-400">1.4 Prohibited Activities: When using the Website, you agree not to:</p><br/>
                                    <ul className="list-none text-slate-400 mt-3">
                                        <li className="flex mt-2 ml-10"><i className="uil uil-arrow-right text-green-600 align-middle me-2">
                                            </i>Violate any applicable laws or regulations;
                                        </li>

                                        <li className="flex mt-2 ml-10"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Infringe upon the intellectual property or privacy rights of others;</li>
                                        <li className="flex mt-2 ml-10"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Use the Website for any illegal or unauthorized purpose;</li>
                                        <li className="flex mt-2 ml-10"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Interfere with or disrupt the Website or servers or networks connected to the Website;</li>
                                        <li className="flex mt-2 ml-10"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Engage in any fraudulent activity or transmit harmful or malicious code;</li>
                                        <li className="flex mt-2 ml-10"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity.</li>


                                    </ul>


                                    <h5 className="text-xl font-semibold open-sans   mb-4 mt-8">Restrictions</h5>
                                    <p className="text-slate-400">By using the Website, you agree to the following restrictions:</p>
                                    <ul className="list-none text-slate-400 mt-3">
                                        <li className="flex mt-2 ml-4"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Intellectual Property: All content on the Website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Aoun Real Estate Agency Ltd or its licensors and is protected by copyright and other intellectual property laws. You may not use, copy, reproduce, modify, distribute, transmit, or display the content without prior written permission from Aoun Real Estate Agency Ltd.</li>
                                        <li className="flex mt-2 ml-4"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Third-Party Links: The Website may contain links to third-party websites. These links are provided for your convenience, and Aoun Real Estate Agency Ltd does not endorse or have any control over the content, products, or services offered by these third-party websites. You access and use such websites at your own risk.</li>
                                        <li className="flex mt-2 ml-4"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Disclaimer of Liability: Aoun Real Estate Agency Ltd makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or completeness of any information on the Website. You agree that your use of the Website is at your own risk, and Aoun Real Estate Agency Ltd shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of the Website.</li>
                                        <li className="flex mt-2 ml-4"><i className="uil uil-arrow-right text-green-600 align-middle me-2"></i>Modifications: Aoun Real Estate Agency Ltd reserves the right to modify, suspend, or discontinue the Website, or any part thereof, at any time without prior notice. We may also revise these Terms of Use from time to time. Your continued use of the Website after any modifications to the Terms of Use constitutes your acceptance of the revised terms.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
                {/* <Switcher /> */}
            </React.Fragment>
        );
    }
}

export default Terms;
