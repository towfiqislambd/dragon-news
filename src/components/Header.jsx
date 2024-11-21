import Logo from "../assets/logo.png"
import moment from 'moment';
const formattedDate = moment('2025-11-27').format('dddd, MMMM DD, YYYY');

const Header = () => {
    return (
        <div className="space-y-2 text-center mt-7">
            <img src={Logo} className="mx-auto max-w-80" />
            <p className="text-gray-600">Journalism Without Fear or Favour</p>
            <p className="text-gray-500">{formattedDate}</p>
        </div>
    );
};

export default Header;