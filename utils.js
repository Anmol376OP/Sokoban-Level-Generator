//create a 2D Array
function Array2d(xSize, ySize, content) {
    var NodeGrid = new Array(xSize);
    var i, j;
    for (i = 0; i < xSize; i++) {
        NodeGrid[i] = new Array(ySize);
        for (j = 0; j < ySize; j++) {
            NodeGrid[i][j] = content;
        }
    }
    return NodeGrid;
}

//return a random integer between min (included) and max (excluded)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//find all permutations between the elements of 2 lists of equal size
function findPermutations(aList, bList) {
    var permutations = [];
    perm(aList, bList, [], permutations);
    return permutations;
}

function perm(aList, bList, permutation, permutations) {
    for (var j = 0; j < bList.length; j++) {
        var newPer = permutation.slice();
        newPer.push([aList[0], bList[j]]);
        if (aList.length > 1) {
            var newList = bList.slice();
            newList.splice(j, 1);
            perm(aList.slice(1, aList.length), newList, newPer, permutations)
        } else {
            permutations.push(newPer);
        }
    }
}

//add to sorted array via binary search
function addToSortedArray(array, element, compareFunction) {
    var index = binarySearch(array, element, compareFunction);
    if (index < 0) { index = -index - 1; }
    array.splice(index, 0, element);
}

//binary search in sorted array 
function binarySearch(array, element, compareFunction) {
    var m = 0;
    var n = array.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = compareFunction(element, array[k]);
        if (cmp > 0) {
            m = k + 1;
        } else if (cmp < 0) {
            n = k - 1;
        } else {
            return k;
        }
    }
    return -m - 1;
}

function fComparer(element1, element2) {
    return element1.f - element2.f;
}

//check if a point is in the array boundaries
function checkBoundaries(x, y) {
    if (x >= 0 && x < currentLvl.nodes.length && y >= 0 && y < currentLvl.nodes[0].length) {
        return true;
    }
    return false;
}