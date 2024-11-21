import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-gray-200 p-2 rounded-sm my-5">
            <button className="btn btn-error rounded-sm min-h-0 h-10 px-5 text-white">Latest</button>
            <Marquee pauseOnHover={true} className="font-medium">
                <Link to='/news'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!</Link>
                <Link to='/news'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!</Link>
                <Link to='/news'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;