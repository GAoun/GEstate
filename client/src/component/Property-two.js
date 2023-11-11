import React, { useEffect, useState } from "react";
import TinySlider from "tiny-slider-react";
import { Link } from "react-router-dom";
import {LiaCompressArrowsAltSolid, BiBed, LiaBathSolid} from "../assets/icons/vander"
import 'tiny-slider/dist/tiny-slider.css';
import { useSelector } from "react-redux";

const settings = {
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        992: {
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
}

export default function PropertyTwo() {
    const [offerListings, setOfferListings] = useState([]);
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        const fetchOfferListings = async () => {
          try {
            const res = await fetch('http://localhost:3001/api/listing/get');
            const data = await res.json();
            setOfferListings(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchOfferListings();
  }, []);

  const handleDelete = async (propertyId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete property?");
    if (isConfirmed) {

        console.log("Delete " + propertyId);
        try {
            const res = await fetch(`http://localhost:3001/api/listing/delete/${propertyId}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = await res.json();
                console.log(data);
                window.location.href = `/properties`;
              } catch (error) {
              console.log(error);
          }
        }else{
            return;
        }
  
}

    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Properties</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div className="grid grid-cols-1 mt-8 relative">
                    <div className="tiny-home-slide-three">
                        <TinySlider settings={settings} >
                            {offerListings.map((item, index) => (
                                <div className="tiny-slide" key={index}>
                                    <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 m-3">
                                        <div className="relative">
                                            <Link to={`/property-detail/${item._id}`}>
                                            <img src={item.imageUrls[0]} alt="" />
                                            </Link>
                                            {currentUser &&
                                                <div className="absolute top-4 end-4">
                                                    <Link to={`/properties/edit/${item._id}`} className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-green-400 dark:text-green-400 focus:text-green-600 dark:focus:text-green-600 hover:text-green-600 dark:hover:text-green-600"><i className="mdi mdi-file-document-edit mdi-18px"></i></Link>
                                                    <button onClick={() => handleDelete(item._id)}  className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-red-400 dark:text-red-400 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600" style={{marginLeft: "5px"}}><i className="mdi mdi-delete mdi-18px"></i></button>    
                                                    </div> }
                                        </div>

                                        <div className="p-6">
                                            <div className="pb-6">
                                                <Link to={`/property-detail/${item._id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</Link>

                                            </div>

                                            <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                                <li className="flex items-center me-4">
                                                    <LiaCompressArrowsAltSolid className="text-2xl me-2 text-green-600"/>
                                                    <span>{item.square}m</span>
                                                </li>

                                                <li className="flex items-center me-4">
                                                    <BiBed className="text-2xl me-2 text-green-600"/>
                                                    <span>{item.beds} Beds</span>
                                                </li>

                                                <li className="flex items-center">
                                                    <LiaBathSolid className="text-2xl me-2 text-green-600"/>
                                                    <span>{item.baths} Baths</span>
                                                </li>
                                            </ul>

                                            <ul className="pt-6 flex justify-between items-center list-none">
                                                <li>
                                                    <span className="text-slate-400">Price</span>
                                                    <p className="text-lg font-medium">€{item.price}</p>
                                                </li>

                                                <li>
                                                    <span className="text-slate-400">Location</span>
                                                    <ul className="text-lg font-medium text-amber-400 list-none">
                                                        <li className="inline ms-1 text-black dark:text-white">{item.location}</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* end property content */}
                                </div>
                            ))}
                        </TinySlider>
                    </div>
                </div>
            </div>


        </>
    );
}
