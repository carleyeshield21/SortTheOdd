// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
    let arr = new Array(...array)
    let oddarr = []
    for(i=0; i<=arr.length-1; i++){
        // console.log(arr[i])
        if(arr[i] % 2 != 0){
            oddarr.push(arr[i])
            arr.splice(i,1,'')
        }
    }
    oddarr.sort(function(a, b){return a-b});
    // console.log(oddarr)
    // console.log(arr)

    let finalarr = []
    for(i=0; i<=oddarr.length-1; i++){
        for(j=0; j<=arr.length-1; j++){
            // console.log(arr[j])
            if(arr[j] == ''){
                arr.splice(j,1,oddarr[i])
                break
            }
        }
        // console.log('========')
    }
    console.log(`Original array: [${array}]`)
    console.log('Only odd numbers sorted in ascending order:')
    console.log(arr)
}
sortArray([7, 1])
console.log('========')
sortArray([5, 8, 6, 3, 4])
console.log('========')
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
console.log('========')
sortArray([5, 3, 2, 8, 1, 4])
console.log('========')
sortArray([5, 3, 1, 8, 0])