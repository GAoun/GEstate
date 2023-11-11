import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import LogoLight from "../assets/images/aoun-logo.PNG";
import LogoDark from "../assets/images/aoun-logo.PNG";
import { User } from 'react-feather';
import { useSelector } from "react-redux";

export default function Navbar(props) {
    const { navClass, topnavClass } = props;
    const { currentUser } = useSelector((state) => state.user);
    const [isOpen, setMenu] = useState(true);
    window.addEventListener("scroll", windowScroll);

    const toggleMenu = () => {
        setMenu(!isOpen)
        if (document.getElementById("navigation")) {
            var elements = document.getElementById("navigation").getElementsByTagName("a");
            for (var i = 0, len = elements.length; i < len; i++) {
                elements[i].onclick = function (elem) {
                    if (elem.target.getAttribute("href") !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                }
            }
        }

    }
    function windowScroll() {
        const navbar = document.getElementById("topnav");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            if (navbar !== null) {
                navbar?.classList.add("nav-sticky");
            }
        } else {
            if (navbar !== null) {
                navbar?.classList.remove("nav-sticky");
            }
        }

        const mybutton = document.getElementById("back-to-top");
        if (mybutton != null) {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.classList.add("flex");
                mybutton.classList.remove("hidden");
            } else {
                mybutton.classList.add("hidden");
                mybutton.classList.remove("flex");
            }
        }
    }

    const getClosest = (elem, selector) => {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) { }
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;

    }

    useEffect(() => {

        var menuItems = document.getElementsByClassName("sub-menu-item");
        if (menuItems) {

            var matchingMenuItem = null;
            for (var idx = 0; idx < menuItems.length; idx++) {
                if (menuItems[idx].href === window.location.href) {
                    matchingMenuItem = menuItems[idx];
                }
            }

            if (matchingMenuItem) {
                matchingMenuItem.classList.add('active');


                var immediateParent = getClosest(matchingMenuItem, 'li');

                if (immediateParent) {
                    immediateParent.classList.add('active');
                }

                var parent = getClosest(immediateParent, '.child-menu-item');
                if (parent) {
                    parent.classList.add('active');
                }

                parent = getClosest(parent || immediateParent, '.parent-menu-item');

                if (parent) {
                    parent.classList.add('active');

                    var parentMenuitem = parent.querySelector('.menu-item');
                    if (parentMenuitem) {
                        parentMenuitem.classList.add('active');
                    }

                    var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                }
            }
        }

        var elements = document.getElementById("navigation").getElementsByTagName("a");
        for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].onclick = function (elem) {
                if (elem.target.getAttribute("href") === "#") {
                    var submenu = elem.target.nextElementSibling.nextElementSibling;
                    submenu.classList.toggle('open');
                }
            }
        }
    }, []);

    // render() {
    // const toggleClass = this.state.isOpenMenu ? 'hidden' : 'block';


    return (
        <React.Fragment>
            <nav id="topnav" className={`defaultscroll is-sticky ${topnavClass ? topnavClass : ''}`} >
                {console.log(topnavClass)}
                <div className={`${topnavClass !== '' && topnavClass !== undefined ? 'container-fluid md:px-8 px-3' : 'container'}`}>
                    {/* <!-- Logo container--> */}
                    {navClass === '' || navClass === undefined ?
                        <Link className="logo" to="/">
                            <img style={{borderRadius: "3px"}} src={LogoDark} className="h-7 inline-block dark:hidden" alt="" />
                            <img style={{borderRadius: "3px"}} src={LogoLight} className="h-7 hidden dark:inline-block" alt="" />
                        </Link> :
                        <Link className="logo" to="/">
                            <span className="inline-block dark:hidden">
                                <img style={{borderRadius: "3px"}} src={LogoDark} className="l-dark h-7"  alt="" />
                                <img style={{borderRadius: "3px"}} src={LogoLight} className="l-light h-7"  alt="" />
                            </span>
                            <img style={{borderRadius: "3px"}} src={LogoLight} height="24" className="hidden dark:inline-block h-7" alt="" />
                        </Link>
                    }
                    {/* <!-- End Logo container--> */}

                    {/* <!-- Start Mobile Toggle --> */}
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link to="#" className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- End Mobile Toggle --> */}

                    {/* <!-- Login button Start --> */}
                    <ul className="buy-button list-none mb-0">
                        <li className="inline mb-0">
                           {currentUser? <Link to={`/profile/${currentUser?._id}`} className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">
                                <img className="rounded-full" style={{width: "100%", maxHeight: "40px"}} src={currentUser?.avatar}></img></Link> :  <Link to="/sign-in" className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">
                                <User className="h-4 w-4 stroke-[2]"></User></Link>}
                        </li>
                        {/* <li className="sm:inline ps-1 mb-0 hidden">
                            <Link to="/auth-signup" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Signup</Link>
                        </li> */}
                    </ul>
                    {/* <!--Login button End--> */}

                    <div id="navigation" className={`${isOpen === true ? 'hidden' : 'block'}`}>
                        {/* <!-- Navigation Menu--> */}
                        <ul className={`navigation-menu  ${navClass === '' || navClass === undefined ? '' : 'nav-light'}   ${topnavClass !== '' && topnavClass !== undefined ? 'justify-center' : 'justify-end'}`}>
                     
                            <li><NavLink to="/" activeclassname="active" className="sub-menu-item">Home</NavLink></li>
                            <li><NavLink to="/properties" activeclassname="active" className="sub-menu-item">Properties</NavLink></li>
                            <li><Link to="/sell" className="sub-menu-item">Sell</Link></li>
                            <li><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>
                            <li><Link to="/services" className="sub-menu-item">Services</Link></li>
                            {/* <li><Link to="/terms" className="sub-menu-item">Terms of Services</Link></li>
                            <li><Link to="/privacy" className="sub-menu-item">Privacy Policy</Link></li> */}
                            {/* <li><Link to="/maintenance" className="sub-menu-item">Maintenance</Link></li> */}
                            {/* <li><Link to="/404" className="sub-menu-item">404! Error</Link></li> */}
                            <li><Link to="/contact" className="sub-menu-item">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End Navbar  */}
        </React.Fragment>
    );

}
