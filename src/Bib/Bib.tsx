import * as React from "react";
import cn from "classnames";

import css from "./Bib.module.scss";


export interface IBib {
}


const Bib: React.FC<IBib> = (props) => {
    return (
        <div className={cn(css.bg)}>
            wow bib
        </div>
    );
};


export default Bib;
