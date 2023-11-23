import { Button } from "@material-tailwind/react";


const Banner = () => {
    return (
        <div>
            <div className="bg-[url('https://images.unsplash.com/photo-1546377791-2e01b4449bf0?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[70vh] bg-no-repeat bg-cover">
                <div className="flex items-center h-full ml-6 text-white w-1/2">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold">Our <span className="bg-teal-900 px-3 py-1 rounded">Best Friends</span></h2>
                        <p>Pet, any animal kept by human beings as a source <br /> of companionship and pleasure.</p>
                        {/* <button className="bg-amber-900 px-3 py-1 rounded">Learn More..</button> */}
                        <Button size="sm" variant="text" className="flex items-center gap-2 bg-amber-800 px-3 py-2 rounded text-white">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


{/* <div className="flex bg-teal-900">
    <div className="flex-1">
        <p className="text-red-800 font-bold text-5xl">this is banner</p>
    </div>
    <div className="bg-[url('https://images.unsplash.com/photo-1546377791-2e01b4449bf0?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[70vh] bg-no-repeat bg-cover flex-1">
    </div>
</div> */}