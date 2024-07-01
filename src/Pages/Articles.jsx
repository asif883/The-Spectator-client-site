

const Articles = () => {
    return (
        <div className="my-16 max-w-7xl mx-auto grid gap-6 grid-cols-4">
            {/* right */}

            <div>
                <div>
                    <p className="text-blue-400 uppercase">Politics</p>
                    <h3 className="text-xl font-bold">Biden's family is telling him to stay in the race even as calls to exit grow</h3>
                </div>
                <div className="mt-5 border-t pt-4">
                    <p className="text-blue-400 uppercase">Politics</p>
                    <h3 className="text-xl font-bold">Mark Cuban's still betting on Biden after that disastrous debate</h3>
                </div>
                <div className="mt-5 border-t pt-4">
                    <p className="text-blue-400 uppercase">Careers</p>
                    <h3 className="text-xl font-bold">Job interviews are about to get a whole lot more stressful</h3>
                </div>
            </div>

            {/* middle  */}

            <div className="col-span-2">
                <img className="w-[700px]" src="https://i.ibb.co/WVmmV2r/6647bdbc9fc063e829b2927a.webp" alt="" />
                <h1 className="text-2xl font-semibold">The shadowy new way employees are cheating their way to the top</h1>
            </div>

            {/* left  */}

            <div>
                <div>
                    <img src="https://i.ibb.co/rbc54wW/658354ec1c5c7b8c9a0aa0c3.webp" alt="" />
                    <h3 className="text-lg font-bold mt-2">Bobby Jain's monster hedge fund is about to go live. Here is everyone Jain Global has hired so far.</h3>
                </div>
                <div className="mt-6">
                    <img src="https://i.ibb.co/HqYQsDQ/667466fb58bc719d2c044496.webp" alt="" />
                    <h3 className="text-lg font-bold mt-2">I wondered why Americans pay so much for dumb stuff. So I asked a $200-an-hour psychic.</h3>
                </div>
            </div>
        </div>
    );
};

export default Articles;