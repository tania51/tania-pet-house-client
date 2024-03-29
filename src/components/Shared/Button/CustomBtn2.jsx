import { Button } from "@material-tailwind/react";
import "./CustomBtn.css"


const CustomBtn2 = ({ btnContent }) => {
    return (
        <Button size="sm" variant="text" className="flex items-center gap-2 bg-amber-800 px-3 py-2 rounded text-white hover:bg-teal-900 hover:text-white btn-hover2">
            {btnContent}
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
    );
};

export default CustomBtn2;