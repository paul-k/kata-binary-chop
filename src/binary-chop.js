define(function(require, exports, module) {

    'use strict';

    var binaryChop = {
        Lookup: function (values, lookupValue) {

            var lookupValues = values.slice(0),
                indexTracker = 0;
            
            while (lookupValues.length > 1) {

                var before = lookupValues.slice(0);

                lookupValues = binaryChop.Filter(lookupValues, lookupValue);

                indexTracker += (before[0] !== lookupValues[0]
                    ? before.length - lookupValues.length
                    : 0);
            }

            return lookupValues[0] == lookupValue
                ? indexTracker
                : -1;
        },
        Filter: function (array, lookupValue) {
            var length = array.length;
            var halves = [array.slice(0, length / 2), array.slice(length / 2)];

            var lastValueOfFirstHalf = halves[0][halves[0].length -1];

            return lastValueOfFirstHalf >= lookupValue
                ? halves[0]
                : halves[1];
        }
    };

    module.exports = binaryChop;
});