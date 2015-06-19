define(['src/binary-chop'], function(binaryChop) {

    describe("Binary Chop", function() {

        it("should return index, when number is in array", function() {

            var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            var lookupValue = values[8];

            var result = binaryChop.Lookup(values, lookupValue);

            expect(result).toBe(8);
        });

        it("should return -1, when the number is not in the array", function() {

            var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            var lookupValue = 456;

            var result = binaryChop.Lookup(values, lookupValue);

            expect(result).toBe(-1);
        });

        describe("Uses a binary search method", function() {

            beforeEach(function() {
                spyOn(binaryChop, 'Filter').and.callThrough();
            });

            it("should utilise the filter function, when performing a lookup", function() {

                var values = [1, 3, 5, 7, 9, 11];
                var lookupValue = 7;

                var result = binaryChop.Lookup(values, lookupValue);

                expect(binaryChop.Filter).toHaveBeenCalled();
            });

            it("should utilise the filter function 0 times, when performing a lookup with an array of 1 digits", function () {

                var values = [1];
                var lookupValue = 1;

                var result = binaryChop.Lookup(values, lookupValue);

                expect(binaryChop.Filter.calls.count()).toBe(0);
            });

            it("should utilise the filter function 1 times, when performing a lookup with an array of 2 digits", function () {

                var values = [1, 3];
                var lookupValue = 1;

                var result = binaryChop.Lookup(values, lookupValue);

                expect(binaryChop.Filter.calls.count()).toBe(1);
            });

            it("should utilise the filter function 7 times, when performing a lookup with an array of 100 digits", function () {

                var values = [];
                for (var i = 0; i < 100; i++) {
                    values.push((i * 2) + 1);
                }
                var lookupValue = values[83];

                var result = binaryChop.Lookup(values, lookupValue);

                expect(binaryChop.Filter.calls.count()).toBe(7);
            });

            it("should utilise the filter function 10 times, when performing a lookup with an array of 1,000 digits", function () {

                var values = [];
                for (var i = 0; i < 1000; i++) {
                    values.push((i * 2) + 1);
                }
                var lookupValue = values[422];

                var result = binaryChop.Lookup(values, lookupValue);

                expect(binaryChop.Filter.calls.count()).toBe(10);
            });

            it("should utilise the filter function 13 times, when performing a lookup with an array of 10,000 digits", function () {

                var values = [];
                for (var i = 0; i < 10000; i++) {
                    values.push((i * 2) + 1);
                }
                var lookupValue = values[6357];

                var result = binaryChop.Lookup(values, lookupValue);

                expect(binaryChop.Filter.calls.count()).toBe(13);
            });

            it("should utilise the filter function 17 times, when performing a lookup with an array of 100,000 digits", function () {

                var values = [];
                for (var i = 0; i < 100000; i++) {
                    values.push((i * 2) + 1);
                }
                var lookupValue = values[27484];

                var result = binaryChop.Lookup(values, lookupValue);

                expect(binaryChop.Filter.calls.count()).toBe(17);
            });

            it("should utilise the filter function 20 times, when performing a lookup with an array of 1,000,000 digits", function () {

                var values = [];
                for (var i = 0; i < 1000000; i++) {
                    values.push((i * 2) + 1);
                }
                var lookupValue = values[8264];

                var result = binaryChop.Lookup(values, lookupValue);

                expect(binaryChop.Filter.calls.count()).toBe(20);
            });
        });
    });
});