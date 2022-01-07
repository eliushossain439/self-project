import React from 'react';
import '../../App.css';
import logo from '../../logo.svg'
import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className="col-6 p-5">
                    <h1 className='text-info'>React</h1>
                    <h4 className='p-4'>Learn With Elius Hossain
                        Learn Something Good & Do Something Better</h4>
                    <Link className='loginBtn' to='/signin'>Login</Link>
                </div>
                <div className="col-6 p-5">
                    <div className='App ms-5'>
                        <img className='App-logo' src={logo} alt="" />
                    </div>
                </div>

                {/* home page slider */}

                <div className='col-8 mx-auto'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://i.ibb.co/4W29HdH/FB-IMG-1638812322588-01-removebg-preview-1.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/LSGfSrw/FB-IMG-1637834746906-removebg-preview.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/zJynggk/FB-IMG-1637834746906-removebg-preview-1.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/h1xwtFr/FB-IMG-1637834746906-removebg-preview-2.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {/* course */}

                <div className="row mt-5 gap-3">
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