import { Grid } from "react-loader-spinner";

const Loading = () => {
    return (
        <div>
            <div className='flex items-center justify-center min-h-screen h-full'>
            <Grid
                visible={true}
                height="80"
                width="80"
                color="#3A8CFB"
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