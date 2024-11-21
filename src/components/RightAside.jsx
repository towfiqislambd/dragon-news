import { FaGoogle, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import bg from "../assets/bg.png"
import swimming from "../assets/swimming.png"
import classes from "../assets/class.png"
import playGround from "../assets/playground.png"
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const RightAside = () => {
    const { signInWithGoogle,setLoggedInUser } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                setLoggedInUser(result.user)
            })
    }

    return (
        <div>
            <h2 className="font-bold text-lg mb-4 text-gray-600">Login With</h2>
            <div className="space-y-2 mb-5">
                <button onClick={handleGoogleSignIn} className="justify-center flex gap-2 items-center border border-sky-500 rounded py-2 text-sm font-medium w-full "><FaGoogle className="text-sky-500" /> Login With Google</button>
                <button className="justify-center border items-center flex gap-2 border-gray-700 rounded py-2 text-sm font-medium w-full"><FaGithub className="text-gray-700" /> Login With Github</button>
            </div>
            <h2 className="font-bold text-lg mb-4 text-gray-600">Find Us On</h2>
            <div className="space-y-2 border rounded p-3 mb-3">
                <button className="px-3 border items-center flex gap-2 rounded py-2 text-sm font-medium w-full"><BsFacebook className="text-sky-500" /> Facebook</button>
                <button className="px-3 border items-center flex gap-2 rounded py-2 text-sm font-medium w-full"><FaTwitter className="text-gray-700" /> Twitter</button>
                <button className="px-3 border items-center flex gap-2 rounded py-2 text-sm font-medium w-full"><FaInstagram className="text-gray-700" /> Instagram</button>
            </div>
            <div className="bg-slate-100 rounded p-3 mb-3 space-y-5">
                <h2 className="font-bold text-lg mb-2 text-gray-600">Q-Zone</h2>
                <img src={swimming} alt="" />
                <img src={classes} alt="" />
                <img src={playGround} alt="" />
            </div>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightAside;