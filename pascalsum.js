/* 

Pascal's triangle:

                                    1                                               row 1
                                1       1                                           row 2
                            1       2       1                                       (elem 1 changed)
                        1       3       3       1                                   (1 and 2)
                    1       4       6       4       1
                1       5       10      10      5       1

    etc.

    Number of elements edited is rowNumber - 2

* Always start a line with ones on either end.
* # of numbers per line goes up by one for every line.
    - line 1: 1 number
    - line 2: 2
    - line 3: 3
* Numbers on the middle are the challenging part.

Game Plan:
1. Set up first and second rows.
2. Subsequent rows will start and end with a 1.
3. The middle elements will add the two numbers above it to get a value.


row1 = [1];                                                                 one number
row2 = [1, 1];                                                              two numbers

row3 = [1, (row2[1]+row2[2]), 1];                                           three numbers
row4 = [1, (row3[1]+row3[2]), (row3[2]+row3[3]), 1];


*/

var firstRow = [1];
var secondRow = [1, 1];
var lastRow = [];
var currentRow = [];

var rowNumberPrompt = prompt("Enter a row number of pascal's triangle");

var rowNumber = parseInt(rowNumberPrompt);

if (rowNumber = 1) {
    var arr = [rowNumber];
    document.write(arr);
}

else if (rowNumber = 2) {
    var arr = [1, 1];
    document.write(arr);
}

else {
    for (i = 3; i <= rowNumber; i++) {                       // so if I enter rowNumber = 3, I should get [1, 2, 1]
        // lastRow = [1, 1];
        // currentRow = [1, lastRow[1] + lastRow[2], 1];
        // currentRow = lastRow;
        // currentRow.splice(1, 0, lastRow[1] + lastRow[2]);

        // lastRow.length = rowNumber;
        // console.log(lastRow.length);

        for (j = 1; j <= i-2; j++) {
            currentRow.splice(j, 0, lastRow[j-1] + lastRow[j]);
            // lastRow = currentRow;
        }

    lastRow = currentRow;



    }

document.write(currentRow);
}

/*

enter 5. 1 <= i <= 5

i = 3:

    j = 1: (1 <= j <= i-2) === (1 <= j <= 1)
        splice into position with index 1
        currentRow = [1, lr[0]+lr[1], 1] === [1, 2, 1]
    
lr = cr === [1, 2, 1]
    
i = 4:

    j = 1 (1 <= j <= 2)
        splice into position with index 1
        currentRow = [1, lr[0]+lr[1], 1] === [1, 3, 1]
    
    j = 2: 
        splice into position with index 2
        currentRow = [1, 3, lr[1] + lr[2], 1] == [1, 3, 3, 1]

lr = cr

/*