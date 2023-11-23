

const Title = ({ heading, subHeading }) => {
    return (
        <div className="mt-24 mb-2 space-y-1">
            <hr className="border border-b-4 border-b-amber-900 w-20" />
            <h1 className="pt-1 text-3xl font-bold uppercase text-teal-900">{heading}</h1>
            <p className="font-semibold capitalize text-blue-gray-700">{subHeading}</p>
            
        </div>
    );
};

export default Title;