a=[1,2,3,4]
//Using map
const result=a.map(x=> x*2)
console.log(result)  //Output: [2, 4, 6, 8]

//Using filter
const fliterresult=a.filter(x=>x%2==0)
console.log(fliterresult)  //Output: [2, 4]

//Using reduce
const reduceresult= a.reduce((accumlator,currentvalue)=>accumlator+currentvalue,0)
console.log(reduceresult) // output: 10

//Using flatmap
const arr=[1, 2, 3];
const results = arr.flatMap(num => [num, num * 2]);
console.log(results);     // Output: [1, 2, 2, 4, 3, 6]
