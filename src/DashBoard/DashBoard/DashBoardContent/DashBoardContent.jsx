import PureComponent from "./Charts/PureComponent"
import TwoLevelPieChart from "./Charts/TwoLevelPieChart"


const DashBoardContent = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-1/3">
                {/* <h2 className="text-5xl text-amber-900 text-bold -mt-12">Welcome to DashBoard!!</h2> */}
                <PureComponent></PureComponent>
            </div>
            
            {/* pie chart */}
            <div className="w-full h-full">
                <TwoLevelPieChart></TwoLevelPieChart>
            </div>
        </div>
    );
};

export default DashBoardContent;