import * as React from "react";
import styles from "./Baz.module.scss";


export interface IBaz {
}


const Baz: React.FC<IBaz> = (props) => {
    return (
        <div className={styles.bg}>
            I'm baz
        </div>
    );
};


export default Baz;
