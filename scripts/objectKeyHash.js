/**
 * Created by hillga on 10/23/2014.
 */

//The object returned by the invocation of this function contains a collection of object pairs.
//It provides a method (setPair) for storage of two objects associated with each other.
//Either object can be used as the "index" (with the getAssociatedObject method) to return the other object.
//The clear all method removes all object pairs from the internal collection

var objectKeyHash = function () {

    var _hashSeed = 0,
        _objectPairCollection = {},
        _objectPair = function (x, y) {
            return {
                objectX: x,
                objectY: y
            };
        },
        _setHashSeed = function (x, y) {
            x.hashPair_id = _hashSeed;
            y.hashPair_id = _hashSeed;
            return _hashSeed++;
        },
        setPair = function (x, y) {
            var index = _setHashSeed(x, y);
            _objectPairCollection[index] = new _objectPair(x, y);
        },
        getAssociatedObject = function (keyObject) {
            var obj = _objectPairCollection[keyObject.hashPair_id];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] !== keyObject) console.dir(obj[key].name);
                }
            }
        },
        clearAll = function () {
            _hashSeed = 0;
            _objectPairCollection = {};
        };
    return {
        setPair: setPair,
        getAssociatedObject: getAssociatedObject,
        clearAll: clearAll
    };
};
