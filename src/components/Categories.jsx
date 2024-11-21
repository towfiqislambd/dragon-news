import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
    const { data } = useLoaderData()
    return (
        <div className="border border-gray-200 p-5 rounded shadow">
            {
                data.map((singleData, idx) => <Category singleData={singleData} key={idx}></Category>)
            }
        </div>
    );
};

export default Categories;