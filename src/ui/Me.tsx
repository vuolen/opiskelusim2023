import happy from "../../assets/happy.svg";
import discontent from "../../assets/discontent.png";
import agony from "../../assets/agony.png";

type OwnProps = {
    wellbeing: number;
};

const Me = ({ wellbeing }: OwnProps) => {
    return (
        <div className="bg-black bg-opacity-40 p-2 sm:rounded-md flex items-center">
            {wellbeing >= 80 && (
                <img
                    src={happy}
                    alt=""
                    className="h-80 sm:h-48 w-full object-scale-down"
                />
            )}
            {wellbeing >= 20 && wellbeing < 80 && (
                <img
                    src={discontent}
                    alt=""
                    className="h-80 sm:h-48 w-full object-scale-down"
                />
            )}
            {wellbeing < 20 && (
                <img
                    src={agony}
                    alt=""
                    className="h-80 sm:h-48 w-full object-scale-down"
                />
            )}
        </div>
    );
};

export default Me;
