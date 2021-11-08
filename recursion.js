/** product: calculate the product of an array of numbers. */

function product(nums) {

  return (nums.length === 0) ? 1 : nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
let longest = 0;
for(let word in words){
  let wordLength = words[word].length
  if(wordLength > longest) longest = wordLength
}
return longest
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
let newStr = str.split('')
let everyOther = []
for(let i = 0; i<newStr.length;i++){
  if(i%2===0){
    everyOther.push(newStr[i])
  }
}

return everyOther.join('')
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  for(let i=0;i < arr.length; i++){
    if(arr[i]==val){
      return i
    }
    
  }
  return -1
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let values = []
  for(let key in obj){
    if(typeof obj[key]==='string'){
      
      values.push(obj[key])
    }
    if(typeof obj[key] === 'object'){
      values.push(...gatherStrings(obj[key]))
    }
  }



console.log(values)
return values
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left =0, right = arr.length) {

  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
