import React, { Component } from "react";
import withRouter from "../component/withrouter";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import 'react-18-image-lightbox/style.css';
import Switcher from "../component/Switcher";
import BackgroudImage from "../assets/images/bg/01.jpg";
import { connect } from "react-redux";

class PropertyAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                'name': '',
                'location': '',
                'baths': '',
                'beds': '',
                'description1': '',
                'description2': '',
                'description3': '',
                'map': '',
                'is_rent': "false",
                'price': '',
                'square': '',
                'userRef': '',
                'imageUrls': ["","","","",""],
                'features': ["","","","","","",""]
            }],
            isOpenMenu: true,
            photoIndex: 0,
        }
    }


     handleSubmit = async (e) => {
        const {currentUser } = this.props;

        e.preventDefault();
        
        const updatedData = [...this.state.data];
        const formData = updatedData[0];
        
        try {
          const res = await fetch(`http://localhost:3001/api/listing/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formData,
              userRef: currentUser._id,
            }),
          });
          const data = await res.json();
              console.log(data);
              window.location.href = `/property-detail/${data._id}`;
            } catch (error) {
            console.log(error);
        }
      };


      handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
      
        // Clone the data array
        const updatedData = [...this.state.data];
      
        // Find the index of the listing you want to edit based on some identifier (e.g., ID)
        const listingIndex = updatedData.findIndex((listing) => listing._id === this.props.params.id);
      
        if (listingIndex !== -1) {
          // Clone the specific listing object you want to modify
          const modifiedListing = { ...updatedData[listingIndex] };
          if (type === 'radio') {
            // Check if the radio button is checked
            if (checked) {
              this.setState({ [name]: value }); // Update the is_rent property in state
            }
          }
          // Handle changes to the "features" array
          if (name === 'features') {
            const features = [...modifiedListing.features];
            const featureIndex = parseInt(e.target.getAttribute('data-index'), 10);
            features[featureIndex] = value;
            modifiedListing.features = features;
          } else if (name === 'imageUrls') {
            // Clone the current imageUrls array
            const imageUrls = [...modifiedListing.imageUrls];
            const imageUrlIndex = parseInt(e.target.getAttribute('data-index'), 10);
            imageUrls[imageUrlIndex] = value;
            modifiedListing.imageUrls = imageUrls;
          } else {
            // Handle changes to other input fields
            modifiedListing[name] = value;
          }
      
          // Update the data array with the modified listing
          updatedData[listingIndex] = modifiedListing;
      
          // Update the state with the modified data
          this.setState({ data: updatedData });
        }
        
        console.log("new state: ", this.state.data);
      };


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
        window.scrollTo(0, 0)
    }

    render() {        
        const { data } = this.state;
        console.log(data);
        if (data == []) {
            // Data is still loading, you can render a loading indicator here
            return <div>Loading...</div>;
        }
        const property = data.find((prop) => prop._id === this.props.params.id);
        return (
            <React.Fragment>
                <Navbar navClass="navbar-white"  />
                <section
                style={{ backgroundImage: `url(${BackgroudImage})` }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Edit Property</h3>
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

                {/* <!-- Hero Start --> */}
                <div className="container" style={{marginTop: "2%"}}>

    <form onSubmit={this.handleSubmit}>
        <span className="font-bold">General Info</span><br/><br/><hr/><br/>
        <p>
            <label htmlFor="required-input">Name</label>
            <input name="name" onChange={this.handleInputChange} type="text" id="required-input" required />
            <span className="help-text"></span>
        </p>
        <p>
            <label htmlFor="required-input">Location</label>
            <input name="location" onChange={this.handleInputChange} type="text" id="required-input" required />
            <span className="help-text"></span>
        </p>
        <p>
            <label htmlFor="required-input">Price (EUR)</label>
            <input name="price" onChange={this.handleInputChange} type="number" id="required-input" required/>
            <span className="help-text"></span>
        </p>
        <p>
            <label htmlFor="required-input">Size (m)</label>
            <input name="square" onChange={this.handleInputChange} type="number" id="required-input" required/>
            <span className="help-text"></span>
        </p>
        <p>
            <label htmlFor="required-input">Beds</label>
            <input name="beds" onChange={this.handleInputChange} type="number" id="required-input" required />
            <span className="help-text"></span>
        </p>
        <p>
            <label htmlFor="required-input">Baths</label>
            <input name="baths" onChange={this.handleInputChange} type="number" id="required-input" required />
            <span className="help-text"></span>
        </p>
        <p>
            <label htmlFor="required-input">Map</label>
            <input name="map" onChange={this.handleInputChange} type="url" id="required-input" required />
            <span className="help-text"></span>
        </p>

        <br/><br/><span className="font-bold">Property Description</span><br/><br/><hr/><br/>
        <p>
            <textarea onChange={this.handleInputChange} name="description1"  required style={{backgroundColor: "rgba(137, 210, 129, 0.1)"}}  className="form-input mt-2 textarea colorize" placeholder="Section 1"></textarea>
            <textarea onChange={this.handleInputChange} name="description2"  required style={{backgroundColor: "rgba(137, 210, 129, 0.1)"}}  className="form-input mt-2 textarea colorize" placeholder="Section 2"></textarea>
            <textarea onChange={this.handleInputChange} name="description3"  required style={{backgroundColor: "rgba(137, 210, 129, 0.1)"}}  className="form-input mt-2 textarea colorize" placeholder="Section 3"></textarea>
        </p>



        <br/><br/><span className="font-bold">Features</span><br/><br/><hr/><br/>

        {property?.features.map((feature, index) => (
            <div key={index}>
                <input data-index={index} onChange={this.handleInputChange} name="features"  type="text" id="required-input" required />
                <span className="help-text"></span>
            </div>
        ))}

<br/><br/><span className="font-bold">Images</span><br/><br/><hr/><br/>


{property?.imageUrls.map((image, index) => (
    <div key={index}>
        <input data-index={index} name="imageUrls" onChange={this.handleInputChange} type="url" id="required-input" required/>
        <span className="help-text"></span>
    </div>
))}

        <br/><br/><br/>
        <button type="submit" style={{width: "100%"}} className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">Add Property</button>
    </form>
</div>
                <Footer />
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

export default withRouter(connect(mapStateToProps)(PropertyAdd));
