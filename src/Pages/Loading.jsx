import { Grid } from "react-loader-spinner";

const Loading = () => {
    return (
        <div>
            <div className='flex items-center justify-center min-h-screen h-full'>
            <Grid
                visible={true}
                height="80"
                width="80"
                color="#E82D85"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
            />
            </div>
        </div>
    );
};

export default Loading;