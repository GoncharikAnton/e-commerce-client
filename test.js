const arr = [0,1,2,3,4,5,6,9,2,5,8,33,12,64,7,2,3,82,11,24,63];
//
//
// const rec = (arr) => {
//     if(arr.length === 1){
//         return arr[0];
//     }
//     if(arr[0] >= arr[1]){
//         const newArr = [arr[0], ...arr.slice(2, arr.length)]
//         return rec(newArr)
//     }else{
//         const newArr = arr.slice(1, arr.length)
//         return rec(newArr)
//     }
// }
//
// console.log(rec(arr))
//
// const obj = {
//     foo: function(){
//         console.log(this === obj);
//
//         const bar = () => {
//             console.log(this === obj);
//         }
//         // bar.apply(obj);
//         bar();
//     }
// }
// obj.foo();

class Foo{
    constructor(x) {
        this.name = 'foo';
        this.message = 'bar'
        this.x = x
    }
}
const bar = new Foo();
// var i = 1;
// console.log(typeof bar.name)
// try{
//     throw new Error
// }catch (e){
//     console.log(e)
// }finally {
//     console.log(1)
// }
const array = [2,66,77,88,99];

function binaryS(arr, x, left = 0, right = arr.length - 1){

    if(right >= left){
        const mid = left + Math.floor((right - left) / 2);

        if(arr[mid] === x){
            return mid
        }

        if(arr[mid] > x){
            return binaryS(arr, x, left, mid  - 1)
        }
        if(arr[mid] < x){
            return binaryS(arr, x,  mid + 1, right )
        }
    }
    return -1
}

// console.log(binaryS(array, 88))


const arr1 = [1,2,3,4]
const arr2 = [1,2,3,4, 5, 6, 7]
const len1 = arr1.length
const len2 = arr2.length
const high = len1 > len2 ? len1 : len2
const res = [];
for (let i = 0; i < high; i++) {
    if(arr1[i] && arr2[i]){
        res.push(arr1[i] + arr2[i])
    }else {
        res.push(arr1[i] ? arr1[i] : arr2[i])
    }
}
var p = null;
console.log(res)
console.log(( new Foo))
console.log(typeof null) //The value null represents the absence of any object value
console.log(typeof undefined) //The undefined property indicates that a variable has not been declared at all.
console.log(typeof p)



