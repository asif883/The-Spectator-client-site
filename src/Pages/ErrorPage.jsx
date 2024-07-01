import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="text-center mt-10" id="error-page">
        <img className="max-w-4xl mx-auto" src="https://i.ibb.co/CvqmwTp/404-error-with-tired-person-concept-illustration-114360-7899.jpg" alt="" />
        
        <p>
            <i className="text-xl font-bold">{error.statusText || error.message}</i>
        </p>
        <Link to='/'><button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white">Go back</button></Link>
</div>
    );
};

export default ErrorPage;