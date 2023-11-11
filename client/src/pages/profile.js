import React, { Component } from "react";
import withRouter from "../component/withrouter";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { connect } from 'react-redux';
import '../../../client/src/index.css'

import 'react-18-image-lightbox/style.css';
import {
    deleteUserFailure,
    deleteUserSuccess,
    signOutUserStart,
  } from '../redux/user/userSlice';
import { Link } from 'react-router-dom';
import Switcher from "../component/Switcher";

class Profile extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isOpenMenu: true,
            photoIndex: 0,
        }
    }

    getListings() {
        fetch(`http://localhost:3001/api/user/${this.props.params.id}`)
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

    handleLogout = async () => {
        const { dispatch } = this.props; // Access dispatch from props
        try {
          dispatch(signOutUserStart());
          const res = await fetch('http://localhost:3001/api/auth/signout');
          const data = await res.json();
          if (data.success === false) {
            dispatch(deleteUserFailure(data.message));
            return;
          }
          dispatch(deleteUserSuccess(data));
          
        } catch (error) {
          dispatch(deleteUserFailure(error.message));
        }
      };
  
    render() {        
        const { data } = this.state;
        if (data == []) {
            // Data is still loading, you can render a loading indicator here
            return <div>Loading...</div>;
        }
        const user = data;

        return (
            <React.Fragment>
                <Navbar />
                {/* <!-- Hero Start --> */}
                <br/><br/>

  <div className="font-sans h-screen w-full flex flex-row justify-center items-center">
  <div className="group rounded-xl bg-white dark:bg-slate-900    dark:shadow-gray-700 overflow-hidden ">
     <img className="w-32 h-32 mx-auto rounded-full -mt-20 mt-10 border-8 border-white" src={user?.avatar} alt=""/>
     <div className="text-center mt-2 text-3xl mt-10 font-medium">Hi, {user?.username}</div>
     <div className="text-center mt-2 font-light text-sm">{user?.email}</div><br/><hr/><br/>
     <div className="px-6 text-center mt-2 font-light text-sm">
       <p>
         {user?.about}
       </p>
     </div>
     <hr className="mt-8"/>
     <div className="flex p-4">
       <div className="w-1/2 text-center">
         <Link to="/add-property"><span className="font-bold text-green-600 cursor-pointer">Add Listing</span></Link>
       </div>
       <div className="w-0 border border-gray-300">
         
       </div>
       <div className="w-1/2 text-center">
         <span className="font-bold text-red-600 cursor-pointer" onClick={this.handleLogout}>Sign Out</span>
       </div>
     </div>
  </div>
</div>
                <Footer />
                {/* <Switcher /> */}
                <Switcher />

            </React.Fragment>
        );
    }
  }

export default withRouter(connect()(Profile));
