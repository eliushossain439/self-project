import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    return (
        <div className="container">
            <h1 className="text-warning p-3">Please Register</h1>
            <div className='col-6 mx-auto'>
                <form>
                    <div className="mb-3">
                        <input type="text"
                            placeholder='Name...'
                            className="form-control"
                            required
                        />

                    </div>
                    <div className="mb-3">
                        <input type="email"
                            placeholder='Email...'
                            className="form-control"
                            required
                        />

                    </div>
                    <div className="mb-3">
                        <input type="text"
                            placeholder='Moble Number....'
                            className="form-control"
                            required
                        />

                    </div>
                    <div className="mb-3">
                        <input type="password"
                            placeholder='Password....'
                            className="form-control"
                            required

                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                    <br />
                    <Link to="/signIn" className='p-3'>Already Register?</Link>
                </form>
            </div>



        </div>
    );
};

export default SignUp;