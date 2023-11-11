import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import ContactImage from "../assets/images/svg/contact.svg";
import Switcher from "../component/Switcher";
import { Hexagon } from "react-feather";
import {BsTelephone,MdMailOutline,FiMapPin} from "../assets/icons/vander"
export default function Contact() {
    return (
        <>
            <Navbar />
            {/* <!-- Google Map --> */}
            <div className="container-fluid relative mt-20">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe title="contact-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: '0' }} className="w-full h-[500px]" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            {/* <!-- Google Map --> */}

            {/* <!-- Start Section--> */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <img src={ContactImage} alt="" />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:me-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch!</h3>

                                    <form method="post" name="myForm" id="myForm" >
                                        <p className="mb-0" id="error-msg"></p>
                                        <div id="simple-msg"></div>
                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="name" className="font-medium">Full Name:</label>
                                                <input name="name" id="name" type="text" className="form-input mt-2" placeholder="Full Name" />
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="email" className="font-medium">Email:</label>
                                                <input name="email" id="email" type="email" className="form-input mt-2" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <label htmlFor="subject" className="font-medium">Subject:</label>
                                                <input name="subject" id="subject" className="form-input mt-2" placeholder="Subject" />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="comments" className="font-medium">Message:</label>
                                                <textarea name="comments" id="comments" className="form-input mt-2 textarea" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit" name="send" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <BsTelephone className="text-3xl"/>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Call Us</h5>
                                <p className="text-slate-400 mt-3">Feel free to contact us by phone. Our friendly team is ready to assist you.</p>

                                <div className="mt-5">
                                    <a href="tel:+152534-468-854" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">+123 456-789-123</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <MdMailOutline className="text-3xl"/>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Send an Email</h5>
                                <p className="text-slate-400 mt-3">Reach out to us via email for inquiries, or any other communication.</p>

                                <div className="mt-5">
                                    <a href="mailto:contact@example.com" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">contact@example.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <FiMapPin className="text-3xl"/>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Visit Us</h5>
                                <p className="text-slate-400 mt-3">123456 Street. Building Nr 10 Ground Floor, Larnaca Cyprus.</p>

                                <div className="mt-5">
                                    <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                        data-type="iframe" className="video-play-icon read-more lightbox btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">View on Google map</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Section--> */}

            <Footer />
            <Switcher />
        </>
    );

}

