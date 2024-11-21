import { Outlet } from "react-router-dom";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

const Body = () => {
    return (
        <div className="grid grid-cols-12 gap-8 mb-12">
            <aside className="col-span-3">
                <LeftAside></LeftAside>
            </aside>
            <main className="col-span-6">
                <h2 className="font-bold text-lg mb-4 text-gray-600">Dragon News Home</h2>
                <Outlet></Outlet>
            </main>
            <aside className="col-span-3">
                <RightAside></RightAside>
            </aside>
        </div>
    )
}

export default Body;

