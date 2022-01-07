import React from 'react';

const Course = () => {
    return (
        <div className='container mt-3'>
            <div className='row gap-2'>
                <div className="col  border">
                    <div><img className='img-fluid rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-9CAstjJC__nxH-NdVVft3u1drbX_3GxjmGJRkcHgikswrXwVp1ugt-_cGuWGjxH-ww&usqp=CAU" alt="" /></div>
                    <h6 className='mt-3'>javascript</h6>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit culpa fugiat nesciunt numquam minima sint harum exercitationem odio veniam.</div>
                </div>
                <div className="col border">
                    <div><img className='img-fluid  rounded-circle' src="https://namespaceit.com/uploads/post/image/1616319270.png" alt="" /></div>
                    <h6 className='mt-3'>Rract Js</h6>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit culpa fugiat nesciunt numquam minima sint harum exercitationem odio veniam.</div>
                </div>
                <div className="col border">
                    <div><img className='img-fluid rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvlxZIVKXmrMbP9oQdqiRSHMRZY1ARnTkAinZs0gZSN5CRbAj1bT38t6v6V556n0Ngj8&usqp=CAU" alt="" /></div>
                    <h6 className='mt-3'>Node js</h6>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit culpa fugiat nesciunt numquam minima sint harum exercitationem odio veniam.</div>
                </div>
            </div>
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
            {/* get other tutorial series */}
            <div className="row mt-5 gap-2 justify-content-center">
                <div><h3>Find More</h3></div>
                <p>Get Other Tutorial Series By Elius Hossain</p>
                <div className="col-2 shadow-sm p-4 ">
                    <div className='w-25 mx-auto'><img className='img-fluid' src="https://react.rabbil.com/images/asp.png" alt="" /></div>
                    <h3 className='pt-3'>ASP.NET</h3>
                </div>
                <div className="col-2 shadow-sm p-4">
                    <div className='w-25 mx-auto'><img className='img-fluid' src="https://react.rabbil.com/images/laravellogo.png" alt="" /></div>
                    <h3 className='pt-3'>LUMEN</h3>
                </div>
                <div className="col-2 shadow-sm p-4 ">
                    <div className='w-25 mx-auto'><img className='img-fluid' src="https://react.rabbil.com/images/androidlogo.png" alt="" /></div>
                    <h3 className='pt-3'>ANDROID</h3>
                </div>
                <div className="col-2 shadow-sm p-4">
                    <div className='w-25 mx-auto'><img className='img-fluid' src="https://react.rabbil.com/images/dartlogo.png" alt="" /></div>
                    <h3 className='pt-3'>DART</h3>
                </div>
                <div className="col-2 shadow-sm p-4">
                    <div className='w-25 mx-auto'><img className='img-fluid' src="https://react.rabbil.com/images/javalogo.png" alt="" /></div>
                    <h3 className='pt-3'>JAVA</h3>
                </div>
                <div className="col-2 shadow-sm p-4">
                    <div className='w-25 mx-auto'><img className='img-fluid' src="https://react.rabbil.com/images/reactlogo.png" alt="" /></div>
                    <h3 className='pt-3'>REACT JS</h3>
                </div>
                <div className="col-2 shadow-sm p-4">
                    <div className='w-25 mx-auto'><img className='img-fluid' src="https://react.rabbil.com/images/reactlogo.png" alt="" /></div>
                    <h3 className='pt-3'>REACT NATIVE</h3>
                </div>
            </div>


        </div>

    );
};

export default Course;