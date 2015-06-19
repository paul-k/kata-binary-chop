define(['src/binary-chop'], function(binaryChop) {

    describe("Binary Chop", function() {

        it("should return index, when number is in array", function() {

            var array = [1, 3, 5, 7, 9];
            var lookupValue = 7;

            var result = binaryChop.Lookup(lookupValue);

            expect(result).toBe(3);
        });

    });
});