function countNumberInArray(arr, num) {
    let count = 0;
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    if ( count > 0 ){
        result = count;
    }
    return result;
}
let array = [1,2,3,4,5,6,7,3];
let number = parseInt(prompt('Mời nhập giá trị cần đếm : '));
let result = countNumberInArray(array,number);
document.write(array);
document.write('<br/>');
document.write(result);