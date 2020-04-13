const HappyPack = require("happypack");


const happyThreadPool = HappyPack.ThreadPool({ size: 5 });


exports.helpers = {
    happyPack: (id, loaders) => {
        return new HappyPack({
            id,
            threadPool: happyThreadPool,
            loaders,
        });
    }
};
