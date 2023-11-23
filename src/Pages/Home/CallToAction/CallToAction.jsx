import CustomBtn2 from "../../../components/Shared/Button/CustomBtn2";

const CallToAction = () => {
    return (
        <div>
            <div className="lg:flex bg-teal-900">
                <div className="flex-1">
                    <div className="flex h-full items-center px-10">
                        <div className="space-y-7">
                            <h4 className="text-white font-bold text-4xl">Ready to <span className="bg-amber-800 px-3 py-1 rounded">Adopt!</span></h4>
                            <p className="text-blue-gray-300 text-justify">There is no denying that pets are wonderful companions. They provide us with unconditional love and affection, and ask for very little in return. Dogs, in particular, have been known as "man's best friend" for centuries, and for good reason. They are loyal, protective, and always eager to please..</p>
                            <CustomBtn2 btnContent="Adopt Now.."></CustomBtn2>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[70vh] bg-no-repeat bg-cover flex-1">
                </div>
            </div>
        </div>
    );
};

export default CallToAction;