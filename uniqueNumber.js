
const  arr = [1,1,2,2,3,4,5,5,5,6,6,7,8,8];


// core logic
let uniqueNumber = []
for(let i = 1;i<=arr.length;i++){

    if(arr[i] != arr[i-1]){
        uniqueNumber.push(arr[i-1])
    }
}


// for (const iterator of uniqueNumber) {
//     console.log(iterator)
// }



// 2nd method
let newUnique = []
function uniqueCount(arr){

    for (const iterator of arr) {
        if(!newUnique.includes(iterator)){
            newUnique.push(iterator)
        }
    }

}
uniqueCount([1,1,2,2,3,4,5,5,5,6,6,7,8,8])


// for (const iterator of newUnique) {
//     console.log(iterator)
// }


// 3rd method

function IandJ(arr){

    if(arr.length > 0){
        let i = 0;
        

        for(let j = 1;j<arr.length;j++){
            if(arr[i] != arr[j]){
                i++;
                arr[i] = arr[j]
            }
        }

     console.log(`unique numbers ${i+1}`)
    }else{
        throw new Error('array is empty')
    }

}

IandJ([1,1,2,2,3,4,5,5,5,6,6,7,8,8])