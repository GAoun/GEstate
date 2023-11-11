import React from 'react'
import { Link as Link2 } from "react-router-dom";
import {BsTelephone} from "../assets/icons/vander"

export default function GetInTuch(){
    return(
        <div className="container lg:mt-24 mt-16">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                <div className="mt-6">
                    <Link2 to="/contact" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"><BsTelephone className="align-middle me-2"/> Contact us</Link2>
                </div>
            </div>
        </div>
    )
}
