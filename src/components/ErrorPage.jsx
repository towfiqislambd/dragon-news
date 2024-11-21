import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col gap-3 justify-center text-center h-screen items-center">
            <h3 className="text-4xl font-bold text-red-600">Opps!!!!</h3>
            <p className="text-3xl font-semibold text-gray-800">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl font-medium text-gray-700"> Page
                {
                    error.statusText || error.message
                }
            </p>
            <p className="text-xl text-gray-600 font-medium">{error.status}</p>
        </div>
    );
};

export default ErrorPage;