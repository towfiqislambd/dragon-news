import { Link, Navigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Navbar from "./Navbar";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const termsRef = useRef(null)
    const { createUser, updateUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        setErrorMessage('')
        setSuccessMessage('')
        if (password.length < 6) {
            setErrorMessage('Password should be at least 6 characters')
            return
        }
        if (!terms) {
            setErrorMessage('Accept Terms And Conditions')
            return
        }

        //Firebase Code Here
        createUser(email, password)
            .then(() => {
                setSuccessMessage('Registration Successful!!!')
                e.target.reset()
                updateUser(name, photo)
                .then(() => {
                    <Navigate to='/'></Navigate>
                })
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    return (
        <div className="mt-5">
            <Navbar></Navbar>
            {/* Form Part */}

            <div className="card bg-base-100 mx-auto w-full max-w-lg shrink-0 shadow-lg border rounded-lg">
                <form onSubmit={handleRegister} className="card-body">
                    <h3 className="text-2xl mb-1 font-semibold text-gray-600 text-center">Register Your Account</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-600 text-lg">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-600 text-lg">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter Your Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-600 text-lg">Emai</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter Your Email Address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-600 text-lg">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-3">
                            <input name="terms" type="checkbox" className="checkbox" ref={termsRef} />
                            <span className="label-text">Accept Terms and Conditions</span>
                        </label>
                    </div>
                    <div className="form-control ">
                        <button className="btn bg-gray-700 hover:bg-gray-700 text-white">Register</button>
                    </div>
                    <label className="label text-center">
                        <p>Already have an account? <Link to="/login" className="link link-hover text-error font-semibold">Login</Link></p>
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

export default Register;