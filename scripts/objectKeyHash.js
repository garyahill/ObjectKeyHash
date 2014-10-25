/**
 * Created by hillga on 10/23/2014.
 */

//The object returned by the invocation of this function contains a collection of object pairs.
//It provides a method (setPair) for storage of two objects associated with each other.
//Either object can be used as the "index" (with the getAssociatedObject method) to return the other object.
//The clear all method removes all object pairs from the internal collection

var ObjectKeyHash = function () {

    var _hashSeed = 0,
        _objectPairCollection = {};

    //return an object that contains the pair of objects
    var _objectPair = function (x, y) {
        return {
            objectX: x,
            objectY: y
        };
    };

    //give each object an id property w/matching id
    var _setHashSeed = function (x, y) {
        x.hashPair_id = _hashSeed;
        y.hashPair_id = _hashSeed;
        //postfix operator increments after return value is determined
        return _hashSeed++;
    };

    var setPair = function (x, y) {
        var index = _setHashSeed(x, y);
        //store pair object by index unique to this pair
        _objectPairCollection[index] = new _objectPair(x, y);
    };

    //use hashPair_id to find the correct object pair in the _objectPairCollection
    //test which object in that pair was passed in and return the other
    var getAssociatedObject = function (keyObject) {
        var obj = _objectPairCollection[keyObject.hashPair_id];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] !== keyObject) return obj[key];
            }
        }
    };

    var clearAll = function () {
        _hashSeed = 0;
        _objectPairCollection = {};
    };

    return {
        setPair: setPair,
        getAssociatedObject: getAssociatedObject,
        clearAll: clearAll
    };
};
