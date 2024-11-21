import { Link, useLocation, useNavigate } from "react-router-dom";
import User from "../assets/user.png"
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const { signInUser, signOutUser,setUser,user } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setErrorMessage('')
        setSuccessMessage('')

        //Firebase Code Here
        signInUser(email, password)
            .then(() => {
                setSuccessMessage('Login Successful!!!')
                e.target.reset()
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })

    }
    const hanleSignOut = () => {
        signOutUser()
        .then(() => {
            setUser(null)
        })
    }

    return (
        <div className="mt-5">
            <div className="flex justify-between items-center mb-5">
                <ul className="flex gap-5 items-center text-gray-500 flex-grow justify-center font-medium">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/career'>Career</Link></li>
                    {
                        user && <li><Link to='/orders'>Orders</Link></li>
                    }
                </ul>
                <div className="flex gap-1 items-center">
                    <img src={User} className="w-8" />
                    {
                        user ? <Link onClick={hanleSignOut} className="btn bg-gray-700 rounded-sm min-h-0 h-8 px-5 text-white">Signout</Link> : <Link to='/login' className="btn bg-gray-700 rounded-sm min-h-0 h-8 px-5 text-white">Login</Link>
                    }

                </div>
            </div>
            {/* Form Part */}

            <div className="card bg-base-100 mx-auto w-full max-w-lg shrink-0 shadow-lg border rounded-lg">
                <form onSubmit={handleLogin} className="card-body">
                    <h3 className="text-2xl mb-5 font-semibold text-gray-600 text-center">Login Your Account</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-600 text-lg">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email Address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-600 text-lg">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gray-700 hover:bg-gray-700 text-white">Login</button>
                    </div>
                    <label className="label text-center">
                        <p>Dont have any account? <Link to="/register" className="link link-hover text-error font-semibold">Register</Link></p>
                    </label>
                </form>
            </div>
            {
                successMessage && <h3 className="text-center py-5 text-success">{successMessage}</h3>
            }
            {
                errorMessage && <h3 className="text-center py-5 text-error">{errorMessage}</h3>
            }

        </div>
    );
};

export default Login;