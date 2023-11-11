import React, { Component } from "react";
import { Link as Link2 } from "react-router-dom";
import withRouter from "../component/withrouter";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Switcher from "../component/Switcher";
import { connect } from "react-redux";

class PropertyDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isOpenMenu: true,
            photoIndex: 0,
        }
    }

    getListings() {
        fetch('http://localhost:3001/api/listing/get')
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data,
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }

    componentDidMount() {
        this.getListings();
        window.scrollTo(0, 0)
    }

    render() {        
        const { photoIndex, isOpen, data } = this.state;
        const { currentUser } = this.props;

        console.log(data);
        if (data == []) {
            // Data is still loading, you can render a loading indicator here
            return <div>Loading...</div>;
        }
        const property = data.find((prop) => prop._id === this.props.params.id);
        const images = [
            property?.imageUrls[0], 
            property?.imageUrls[1],
            property?.imageUrls[2],
            property?.imageUrls[3],
            property?.imageUrls[4]
        ];
        
        return (
            <React.Fragment>
                <Navbar />
                {/* <!-- Hero Start --> */}
                <section className="relative md:pb-24 pb-16 mt-20 open-sans property-details-width-limit">
                    <div className="container-fluid">
                        <div  className="md:flex mt-4 justify-center">
                            <div style={{maxWidth: "1000px"}} className="lg:w-1/2 md:w-1/2 p-1">
                                <div className="group relative overflow-hidden prop-img-group-solo">
                                    <img src={property?.imageUrls[0]} alt="" />
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <Link2 to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} className="btn btn-icon bg-green-600 hover:bg-yellow-500 text-white rounded-full lightbox "><i className="uil uil-camera"></i></Link2>
                                    </div>
                                </div>
                            </div>

                            <div style={{maxWidth: "1000px"}} className="lg:w-1/2 md:w-1/2 ">
                                <div className="flex">
                                    <div className="w-1/2 p-1">
                                        <div className="group relative overflow-hidden prop-img-group">
                                            <img src={property?.imageUrls[1]} alt="" />
                                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                                <Link2 to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} className="btn btn-icon bg-green-600 hover:bg-yellow-500 text-white rounded-full lightbox"><i className="uil uil-camera"></i></Link2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/2 p-1">
                                        <div className="group relative overflow-hidden prop-img-group">
                                            <img src={property?.imageUrls[2]} alt="" />
                                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                                <Link2 to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} className="btn btn-icon bg-green-600 hover:bg-yellow-500 text-white rounded-full lightbox"><i className="uil uil-camera"></i></Link2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="w-1/2 p-1">
                                        <div className="group relative overflow-hidden prop-img-group">
                                            <img src={property?.imageUrls[3]} alt="" />
                                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                                <Link2 to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} className="btn btn-icon bg-green-600 hover:bg-yellow-500 text-white rounded-full lightbox"><i className="uil uil-camera"></i></Link2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/2 p-1">
                                        <div className="group relative overflow-hidden prop-img-group">
                                            <img src={property?.imageUrls[4]} alt="" />
                                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                                <Link2 to="#" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} className="btn btn-icon bg-green-600 hover:bg-yellow-500 text-white rounded-full lightbox"><i className="uil uil-camera"></i></Link2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container md:mt-24 mt-16 p-mobile">
                        <div className="md:flex">
                            <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
                                <div>
                                <h4 style={{display: "inline-block"}} className="text-2xl font-semibold open-sans">{property?.name}</h4>
                                {currentUser && <Link2 to={`/properties/edit/${property?._id}`} className="text-gray-400" style={{marginLeft: "10px"}} ><i className="mdi mdi-file-document-edit mdi-18px"></i> Edit</Link2>}
                                </div>

                                <ul className="py-6 flex items-center list-none">
                                   <li className="flex items-center lg:me-6 me-4">
                                        <i className="uil uil-map-pin lg:text-3xl text-2xl me-2 text-green-600"></i>
                                        <span className="lg:text-xl">{property?.location}</span>
                                    </li>

                                    <li className="flex items-center lg:me-6 me-4">
                                        <i className="uil uil-compress-arrows lg:text-3xl text-2xl me-2 text-green-600"></i>
                                        <span className="lg:text-xl">{property?.square}m</span>
                                    </li>

                                    <li className="flex items-center lg:me-6 me-4">
                                        <i className="uil uil-bed-double lg:text-3xl text-2xl me-2 text-green-600"></i>
                                        <span className="lg:text-xl">{property?.beds} Beds</span>
                                    </li>

                                    <li className="flex items-center">
                                        <i className="uil uil-bath lg:text-3xl text-2xl me-2 text-green-600"></i>
                                        <span className="lg:text-xl">{property?.baths} Baths</span>
                                    </li>
                                </ul>

                                <p className="text-slate-400">{property?.description1}</p>
                                <p className="text-slate-400 mt-4">{property?.description2}</p>
                                <p className="text-slate-400 mt-4">{property?.description3}</p>

                                <div className="w-full leading-[0] border-0 mt-6">
                                    <iframe title="iframe" src={property?.map} style={{ border: "0" }} className="w-full h-[500px]" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
                                <div className="sticky top-20">
                                    <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                                        <div className="p-6">
                                            <h5 className="text-2xl font-semibold open-sans">{property?.is_rent ? "Monthly Rental" : "Price"}</h5>

                                            <div className="flex justify-between items-center mt-4">
                                                <span className="text-xl font-semibold open-sans">€ {property?.price} {property?.is_rent ? "" : <span style={{fontSize: "11px"}}> +VAT</span>}</span>

                                                <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">{property?.is_rent ? "For Rent" : "For Sale"}</span>
                                            </div>
                                            <div className="mt-4">
                                            <hr/>
                                            </div>
                                             <ul className="list-none mt-5">
                                                {property?.features.map((feature) => (
                                                                <li key={feature} className="flex justify-between items-center mt-2 pl-6 pr-6">
                                                                <span className="font-semibold text-sm">{feature}</span>
                                                                <span className="font-semibold open-sans">
                                                                    <i className="uil uil-check-circle text-green-600"></i>
                                                                </span>
                                                                </li>
                                                                    ))}                                           
                                         </ul>
                                            
                                        </div>
                                    </div>

                                    <div className="mt-12 text-center">
                                        <h3 className="mb-6 text-xl leading-normal font-semibold open-sans text-black dark:text-white">Got any Questions?</h3>

                                        <div className="mt-6">
                                            <Link2 to="/contact" className="btn bg-transparent hover:bg-green-600 border hover:border-green-400 border-green-600 text-green-600 hover:text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i>Contact Us</Link2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}

                <Footer />
                {/* <Switcher /> */}
                <Switcher />

            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      currentUser: state.user.currentUser,
    };
  };

export default connect(mapStateToProps)(withRouter(PropertyDetail));
