import Body from "./Body";
import Header from "./Header";
import LatestNews from "./LatestNews";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <Body></Body>
        </>
    );
};

export default Home;