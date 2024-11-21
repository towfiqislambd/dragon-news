import { BsSave } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = ({ singleData }) => {
    const { author: { name, published_date, img }, title, details, image_url, total_view, rating: { number }, _id } = singleData;
    return (
        <div className="mb-5">
            <div className="flex justify-between items-center bg-slate-100 mb-2 p-3">
                <div className="flex gap-2 items-center">
                    <img src={img} className="w-10 h-10 rounded-full" />
                    <div className="">
                        <p className="text-lg font-semibold">{name}</p>
                        <p className="text-sm font-medium text-gray-500">{published_date}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <BsSave className="text-gray-600" />
                    <IoShareSocial className="text-gray-600" />
                </div>
            </div>
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <img src={image_url} className="w-full h-80 mb-5" />
            <p className="text-gray-600">{details}</p>
            <Link to={`/news/${_id}`} className="text-yellow-500">Read More</Link>
            <div className="flex justify-between items-center mt-2">
                <div className="flex gap-2 items-center">
                    <div className="flex text-yellow-500 gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <p>{number}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <IoMdEye />
                    <span className="text-gray-400">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default Category;