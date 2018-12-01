var exec = require('cordova/exec');

exports.RequestOptimizations = function(success, error) {
    exec(success, error, "permissionsAcquire", "RequestOptimizations", []);
};

exports.IsIgnoringBatteryOptimizations = function(success, error) {
    exec(success, error, "permissionsAcquire", "IsIgnoringBatteryOptimizations", []);
};

exports.IsIgnoringDataSaver = function(success, error) {
    exec(success, error, "permissionsAcquire", "IsIgnoringDataSaver", []);
};

exports.RequestOptimizationsMenu = function(success, error) {
    exec(success, error, "permissionsAcquire", "RequestOptimizationsMenu", []);
};

exports.RequestDataSaverMenu = function(success, error) {
    exec(success, error, "permissionsAcquire", "RequestDataSaverMenu", []);
};
