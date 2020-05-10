'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'sample.xlsx',
    sheets: ['Sheet1'],
    columnToKey: {
        '*': '{{columnHeader}}'
    },
    header:{
	    // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
	    rows: 1 // 2, 3, 4, etc.
	}
});

console.log(JSON.stringify(result));

const fs = require('fs');
fs.writeFileSync('src/app/sample.json', JSON.stringify(result));    