import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../App.css';
import logo from '../../logo.svg'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className=" col-md-6 col-12 p-5">
                    <h1 className='text-info'>React</h1>
                    <h4 className='p-4'>Learn With Elius Hossain
                        Learn Something Good & Do Something Better</h4>
                    <Link className='loginBtn' to='/signin'>Login</Link>
                </div>
                <div className="col-md-6 col-12 p-5">
                    <div className='App ms-5'>
                        <img className='App-logo' src={logo} alt="" />
                    </div>
                </div>


                {/* home page slider */}
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/JyYK3HX/slider-3.png"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/1TWKsF9/slider-1.png"
                                alt="Second slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/mN127rY/slidler-4.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>


                {/* course */}

                <div className="row mt-5 gap-3 mx-auto">
                    <h1 className='text-warning mb-5'>My Courses</h1>
                    <div className="col shadow-sm">
                        <div className='w-25 mx-auto'><img src="https://react.rabbil.com/images/basic.svg" className='img-fluid rounded-circle' alt="" /></div>
                        <div className='p-4'>
                            <h4>REACT BASIC</h4>
                            <p>Free Videos Cover All Of Basics About React</p>
                        </div>
                    </div>
                    <div className="col shadow-sm">
                        <div className='w-25 mx-auto'><img src="https://react.rabbil.com/images/webpage.svg" className='img-fluid rounded-circle' alt="" /></div>
                        <div className='p-3'><h4>A-Z REACT FRONT</h4>
                            <p>Paid Videos Cover React Front End Development</p></div>
                    </div>
                    <div className="col shadow-sm">
                        <div className='w-25 mx-auto'><img src="https://react.rabbil.com/images/cube.svg" className='img-fluid rounded-circle' alt="" /></div>
                        <div className='p-4'>
                            <h4>REST API</h4>
                            <p>Laravel Lumen Rest API Used For This Project</p>
                        </div>
                    </div>
                    <div className="col shadow-sm">
                        <div className='w-25 mx-auto'><img src="https://react.rabbil.com/images/nucleus.svg" className='img-fluid rounded-circle' alt="" /></div>
                        <div className='p-4'>
                            <h4>AXIOS HTTP</h4>
                            <p>Axios Http Client Use To Get Post Data To API End Point</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;