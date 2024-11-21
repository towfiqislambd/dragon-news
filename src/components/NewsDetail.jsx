import { Link } from "react-router-dom";
import Header from "./Header";
import RightAside from "./RightAside";

const NewsDetail = ({ singleData }) => {
    const { title, details, image_url } = singleData
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-12 gap-8 my-10">
                <main className="col-span-9">
                    <h2 className="font-bold text-lg mb-4 text-gray-600">Dragon News Home</h2>
                    <div className="p-5 border shadow rounded">
                        <img src={image_url} className="w-full h-96 mb-5" />
                        <h2 className="text-xl font-semibold mb-3">{title}</h2>
                        <p className="text-gray-600">{details}</p>
                        <Link to='/' className="bg-pink-700 font-medium text-white rounded px-7 py-3 inline-block mt-5">All News In This Category</Link>
                    </div>
                </main>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </div>
        </div>
    );
};

export default NewsDetail;