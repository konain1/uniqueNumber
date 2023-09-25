
const  arr = [1,1,2,2,3,4,5,5,5,6,6,7,8,8];


let uniqueNumber = []
for(let i = 1;i<=arr.length;i++){

    if(arr[i] != arr[i-1]){
        uniqueNumber.push(arr[i-1])
    }
}


for (const iterator of uniqueNumber) {
    console.log(iterator)
}