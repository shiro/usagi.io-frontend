import * as React from "react";
import styles from "./Bar.module.scss";
import Baz from "Baz/Baz";


export interface IBar {
}


const Bar: React.FC<IBar> = (props) => {
    return (
        <div className={styles.bg}>
            wow
            <Baz />
        </div>
    );
};


export default Bar;
