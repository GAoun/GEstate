import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {LiaCompressArrowsAltSolid, BiBed, LiaBathSolid, MdKeyboardArrowLeft,MdKeyboardArrowRight} from "../assets/icons/vander"
import { useSelector } from 'react-redux';

export default function Pagination({ itemsPerPage, items, gridClass }) {
    const { currentUser } = useSelector((state) => state.user);
    const [currentPage, setCurrentPage] = useState(1);

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

    const handlePageClick = (event) => {
        const newPage = Number(event.target.value);
        setCurrentPage(newPage);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = items.slice(startIndex, endIndex);

    const numPages = Math.ceil(items.length / itemsPerPage);
    const pageButtons = Array.from({ length: numPages }, (_, i) => i + 1).map(
        pageNum => (
            <button
                className='w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600'
                key={pageNum}
                value={pageNum}
                onClick={handlePageClick}
                disabled={currentPage === pageNum}
            >
                {pageNum}
            </button>
        )
    );

    return (
        
        <>
            <div className={gridClass}>
                {currentItems.map((item, index) => (
                    <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                        <div className="relative">
                        <Link to={`/property-detail/${item._id}`}>
                                <img src={item.imageUrls[0]} alt="" />
                            </Link>

                        {currentUser &&
                         <div className="absolute top-4 end-4">
                            <Link to={`/properties/edit/${item._id}`} className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-green-400 dark:text-green-400 focus:text-green-600 dark:focus:text-green-600 hover:text-green-600 dark:hover:text-green-600"><i className="mdi mdi-file-document-edit mdi-18px"></i></Link>
                            <button onClick={() => handleDelete(item._id)}  className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-red-400 dark:text-red-400 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600" style={{marginLeft: "5px"}}><i className="mdi mdi-delete mdi-18px"></i></button>

                            </div>}
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
                                    <span className="text-slate-400">Type</span>
                                    <ul className="text-lg font-medium text-amber-400 list-none">
                                        <li className="inline  text-black dark:text-white">{item.is_rent? "For Rent" : "For Sale"}</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="text-slate-400">Location</span>
                                    <ul className="text-lg font-medium text-amber-400 list-none">
                                        <li className="inline  text-black dark:text-white">{item.location}</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="text-slate-400">Price</span>
                                    <p className="text-lg font-medium">€{item.price}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <nav>
                        <ul className="inline-flex items-center -space-x-px">
                            <li><Link to="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><MdKeyboardArrowLeft className="text-[20px]"/></Link></li>
                            <li>
                                {pageButtons}
                            </li>
                            <li><Link to="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><MdKeyboardArrowRight className="text-[20px]"/></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );

}

