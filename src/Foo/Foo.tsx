import * as React from "react";
import "./Foo.scss";

import Bar from "Bar/Bar";


export interface IFoo {
}


const Foo: React.FC<IFoo> = (props) => {
    return (
        <div className="Foo">
            hello world
            <Bar />
        </div>
    );
};


export default Foo;
