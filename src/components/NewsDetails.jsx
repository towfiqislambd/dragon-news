import { useLoaderData } from "react-router-dom";
import NewsDetail from "./NewsDetail";

const NewsDetails = () => {
    const { data } = useLoaderData();
    return (
        <div>
            {
                data.map((singleData, idx) => <NewsDetail key={idx} singleData={singleData}></NewsDetail>)
            }
        </div>
    );
};

export default NewsDetails;