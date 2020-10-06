module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    } else {
        for (i = 0; i < matrix.length; i++) {
            if (i % 2 > 0) {
                matrix[i].reverse();
            }
        }

        let newArr = [];

        for (i = 0; i < matrix.length; i++) {
            newArr = newArr.concat(matrix[i]);
        }

        return newArr;
    }
};
