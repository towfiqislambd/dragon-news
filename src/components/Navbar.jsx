import { Link } from "react-router-dom";
import User from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
    const { signOutUser, user, setUser } = useContext(AuthContext)
    const hanleSignOut = () => {
        signOutUser()
            .then(() => {
                setUser(null)
            })
    }
    return (
        <div className="flex justify-between items-center mb-10">
            <ul className="flex gap-5 items-center text-gray-500 flex-grow justify-center font-medium">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/career'>Career</Link></li>
                {
                    user && <li><Link to='/orders'>Orders</Link></li>
                }
            </ul>
            <div className="flex gap-1 items-center">
                {
                    user && <img src={user?.photoURL} alt="Logo" className="w-8 h-8 rounded-full" /> || <img src={User} className="w-8" />
                }
                {
                    user ? <Link onClick={hanleSignOut} className="btn bg-gray-700 rounded-sm min-h-0 h-8 px-5 text-white">Signout</Link> :
                        <Link to='/login' className="btn bg-gray-700 rounded-sm min-h-0 h-8 px-5 text-white">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;