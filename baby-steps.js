
// const sum = (a,b) => a+b;

// console.log(sum(Number(process.argv[2]),Number(process.argv[3])))

let sum=0

for (i=2;i<process.argv.length;i++)
{sum=sum+Number(process.argv[i])}

console.log(sum)
