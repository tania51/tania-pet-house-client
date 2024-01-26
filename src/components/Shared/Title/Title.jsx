

const Title = ({ heading, subHeading }) => {
    return (
        <div className="mt-24 mb-2 space-y-1">
            <hr className="border border-b-4 border-b-amber-900 w-20" />
            <h1 className="text-lg font-bold uppercase text-amber-900">{heading}</h1>
            <p className="pt-2 text-3xl lg:text-4xl font-bold uppercase text-teal-900">{subHeading}</p>
            
        </div>
    );
};

export default Title;