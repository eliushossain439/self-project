import React from 'react';
import useAuth from '../../Hooks/useAuth';



const SignIn = () => {
    const { googleHandler, facebookHandler, GithubHandler } = useAuth()

    return (
        <div className='container mt-5'>
            <div className='col-6 mx-auto'>
                <form>
                    <div className="mb-3">
                        <input type="email"
                            placeholder='Enter email....'
                            className="form-control"
                            required
                        />

                    </div>
                    <div className="mb-3">
                        <input type="password"
                            placeholder='Enter password...'
                            className="form-control"
                            required

                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Log-in</button>

                </form>
            </div>

            {/* google handler */}
            <button className="btn btn-warning m-2"
                onClick={googleHandler}
            >sign in google </button>
            <br />
            {/* facebook handler */}
            <button className="btn btn-warning m-2"
                onClick={facebookHandler}
            >signin facebook</button>
            <br />
            {/* GithubHandler handler */}
            <button className="btn btn-warning m-2"
                onClick={GithubHandler}
            >sign in git-hub </button>
        </div>
    );
};

export default SignIn;