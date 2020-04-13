import objectAssignDeep from "object-assign-deep";


const prod = {};

const dev = {};

const envConfig = process.env.NODE_ENV === "production" ? prod : dev;


export default objectAssignDeep(
    {},
    envConfig
);

