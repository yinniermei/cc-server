module.exports.beforeStartup = function(app, cb) {
    // do some operations before application start up
    cb();
};

module.exports.afterStartup = function(app, cb) {
    // do some operations after application start up
    cb();
};

module.exports.beforeShutdown = function(app, cb) {
    // do some operations before application shutdown down
    cb();
};

module.exports.afterStartAll = function(app) {
    // do some operations after all applications start up
    console.log("---- do some operations after all applications start up");
    // setTimeout(function () {
    //     console.log("-----------lifecycle!!!!!!!!!!-------------------")
    //     require("../../modules/taskManager").start();
    // },5000)
};