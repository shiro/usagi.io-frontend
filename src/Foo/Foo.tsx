import * as React from "react";
import styles from "./Foo.module.scss";

import Bib from "Bib/Bib";


export interface IFoo {
}


const Foo: React.FC<IFoo> = (props) => {
    return (
        <div className={styles.bg}>
            hello world
            <Bib />

        </div>
    );
};


export default Foo;
