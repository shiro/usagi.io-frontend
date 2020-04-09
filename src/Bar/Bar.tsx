import * as React from "react";
import "./Bar.scss";


export interface IBar {
}


const Bar: React.FC<IBar> = (props) => {
    return (
        <div className="Bar">
            wow
        </div>
    );
};


export default Bar;
