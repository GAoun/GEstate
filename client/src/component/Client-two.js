import React from "react";
import TinySlider from "tiny-slider-react";

import 'tiny-slider/dist/tiny-slider.css';

import avatar1 from "../assets/images/client/01.jpg";
import avatar2 from "../assets/images/client/02.jpg";
import avatar3 from "../assets/images/client/03.jpg";
import avatar4 from "../assets/images/client/04.jpg";

const settings = {
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
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
};

export default function ClientTwo() {
    const review = [
        {
            id: '1',
            profile: avatar1,
            name: 'Calvin Carlo',
            designation: "Manager",
            description: " Aoun Real Estate agency made the processes so easy. I was able to find my dream house and saved some money. All because of Aoun Real Estate! "
        },
        {
            id: '2',
            profile: avatar2,
            name: 'Christa Smith',
            designation: "Manager",
            description: " I highly recommend Aoun Real Estate agency as the new way to sell your home by owner. My home sold in 48 hours for the asking price. "
        }, {
            id: '3',
            profile: avatar3,
            name: 'Christa Smith',
            designation: "Manager",
            description: " My favorite part about selling my home with Aoun Real Estate was that we got to meet and get to know the people personally. We also had a meeting with the neighbours! "
        }, {
            id: '4',
            profile: avatar4,
            name: 'Christa Smith',
            designation: "Manager",
            description: " My favorite part about selling my home with Aoun Real Estate was that we got to meet and get to know the people personally. It was an amazing experience. "
        }
    ]

    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Client Say ?</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div className="flex justify-center relative mt-8">
                    <div className="relative w-full">
                        <div className="tiny-three-item">
                            <TinySlider settings={settings} >
                                {review.map((el, index) => (
                                    <div className="tiny-slide" key={index}>
                                        <div className="text-center mx-3">
                                            <p className="text-lg text-slate-400 italic"> " {el.description} " </p>

                                            <div className="text-center mt-5">
                                                <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                </ul>

                                                <img src={el.profile} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="" />
                                                <h6 className="mt-2 fw-semibold">{el.name}</h6>
                                                <span className="text-slate-400 text-sm">{el.designation}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}


