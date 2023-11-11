import React, { useState } from "react";
import { Link as Link2, useNavigate } from "react-router-dom";

import Switcher from "../../component/Switcher";

import Icon from "../../assets/images/aoun-logo.PNG";
import BackgroudImage from "../../assets/images/bg/01.jpg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
    clearError,
    signInStart,
    signInSuccess,
    signInFailure,
  } from '../../redux/user/userSlice';

export default function Login() {
    const { currentUser } = useSelector((state) => state.user);
    console.log(currentUser);
    const [formData, setFormData] = useState({});
    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(clearError());
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        dispatch(signInStart());
        const res = await fetch('http://localhost:3001/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
        if (data.success === false) {
          dispatch(signInFailure(data.message));
          return;
        }
        dispatch(signInSuccess(data));
        navigate(`/profile/${data._id}`);
      } catch (error) {
        dispatch(signInFailure(error.message));
      }
    };
  
    return (
        
        <>
            <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
                <div
                    style={{ backgroundImage: `url(${BackgroudImage})`}}
                    className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"></div>
                <div className="container z-3">
                    <div className="flex justify-center">
                        <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
                            <Link2 to="/index"><img style={{borderRadius: "3px"}} src={Icon} className="mx-auto h-8" alt="" /></Link2>
                            <form  onSubmit={handleSubmit} className="ltr:text-left rtl:text-right">
                            <h5 className="my-6 text-xl font-semibold">Login</h5>
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="username">Username:</label>
                                        <input onChange={handleChange} id="username" type="text" className="form-input mt-3" placeholder="Username" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="password">Password:</label>
                                        <input onChange={handleChange} id="password" type="password" className="form-input mt-3" placeholder="Password" />
                                    </div>

                                    <div  style={{display: "flex", justifyContent: "center", marginBottom: "10px", color: "red"}}>
                                    {error && <p className='text-red-500 mt-5'>{error}</p>}
                                     </div>

                                    <div className="mb-4">
                                        <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Login</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher />
        </>
    );
    
}
