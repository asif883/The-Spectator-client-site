import { FallingLines } from "react-loader-spinner";

const Loading = () => {
    return (
        <div>
            <div className='flex items-center justify-center min-h-screen h-full'>
            <FallingLines
                color="#3A8CFB"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
             />
            </div>
        </div>
    );
};

export default Loading;