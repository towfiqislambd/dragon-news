import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className="font-bold text-lg mb-4 text-gray-600">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-3 text-gray-500 font-medium">
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`}className="border transition-all hover:bg-gray-300 hover:text-gray-700 rounded p-3" key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftAside;