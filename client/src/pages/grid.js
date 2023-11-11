import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import Pagination from "../component/Pagination";
import { connect } from "react-redux";
import Switcher from "../component/Switcher";



class Grid extends Component {

      
    //This data will be displayed under /properties    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            offset: 0,
            perPage: 10,
            pageCount: 0,
            navClass: "navbar-white",
            filteredSearch: ''
        };
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

    handleSearch = (e) => {
        this.setState({
        filteredSearch: e.target.value
        })
        }

        filteredItems = () => {

            return this.state.data.filter(prop => {
                const searchTerm = this.state.filteredSearch.toLowerCase();
                const nameMatch = prop.name.toLowerCase().includes(searchTerm);
                const descriptionMatch = prop.description1?.toLowerCase().includes(searchTerm);
                const locationMatch = prop.location?.toLowerCase().includes(searchTerm);

                return nameMatch || descriptionMatch || locationMatch;
              });
            
        }
        
    componentDidMount() {
        this.getListings();
        window.scrollTo(0, 0);
    }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState.language !== this.state.language) {
          this.fetchTranslations();
        }
      }
    
    render() {
        const { currentUser } = this.props;

        return (
            <React.Fragment>
                <Navbar navClass={this.state.navClass} />
                
                <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="container">
                        <div className="grid grid-cols-1 text-center mt-10">
                            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold open-sans text-white">Properties</h3>
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
                <div className="container relative -mt-16 z-1 p-mobile">
                    <div className="grid grid-cols-1">
                        <form style={{width: "100%"}} className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-gray-700">
                            <div className="registration-form text-dark text-start">
                                <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 lg:gap-0 gap-6">
                                    <div>
                                        <label className="form-label text-slate-900 dark:text-white font-semibold open-sans">Search</label>
                                        <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                                            <i className="uil uil-search icons"></i>
                                            <input onChange={this.handleSearch}  name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0 open-sans" placeholder="Search" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <section className="relative lg:py-24 py-16 p-mobile">
                    <div className="container">
                      <Pagination itemsPerPage={30} currentUser={currentUser} items={this.filteredItems()} gridClass={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]`} />
                    </div>
                </section>
                {/* <!-- End --> */}
                <Footer />
                <Switcher/>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      currentUser: state.user.currentUser,
    };
  };
  
export default connect(mapStateToProps)(Grid);
