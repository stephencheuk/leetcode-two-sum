/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,

  return [0, 1].

Hint 1

  A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.

Hint 2

  So, if we fix one of the numbers, say
  x
  , we have to scan the entire array to find the next number
  y
  which is
  value - x
  where value is the input parameter. Can we change our array somehow so that this search becomes faster?

Hint 3

  The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?
*/

var twoSum = function(nums, target) {
  var hash = {};
  for(var x=0; x<=nums.length; x++){
    if(hash[target - nums[x]] >= 0){
      return [hash[target - nums[x]], x];
    }
    hash[nums[x]] = x;
  }
};

var Method1 = twoSum;

var twoSum = function(nums, target) {
  const valsMap = new Map();
  
  for (let i = 0; i<nums.length; i++) {
    const complement = target - nums[i];
    if (valsMap.get(complement) != undefined) {
      return ([valsMap.get(complement), i])
    }
    else {
      valsMap.set(nums[i], i)
    }
  }
  
};

var Method2 = twoSum;

var twoSum = function(nums, target) {
  const comp = {};
  for(let i=0; i<nums.length; i++){
    if(comp[nums[i] ]>=0){
      return [ comp[nums[i] ] , i]
    }
    comp[target-nums[i]] = i
  }
};

var Method3 = twoSum;

var check = function (ans, res){
  try{
    return res[0] == ans[0] && res[1] == ans[1] ? 'Right' : 'Wrong';
  }catch(e){
    return "Check Fail";
  }
}

console.log('Method 1');
console.log('test 1', ans = [0, 1], res = Method1([2, 7, 11, 15], 9), check(ans, res));
console.log('test 2', ans = [1, 2], res = Method1([3, 2, 4], 6),      check(ans, res));
console.log('test 3', ans = [0, 3], res = Method1([0, 4, 3, 0], 0),   check(ans, res));
console.log('test 4', ans = [0, 2], res = Method1([-3, 4, 3, 90], 0), check(ans, res));

console.log('Method 2');
console.log('test 1', ans = [0, 1], res = Method2([2, 7, 11, 15], 9), check(ans, res));
console.log('test 2', ans = [1, 2], res = Method2([3, 2, 4], 6),      check(ans, res));
console.log('test 3', ans = [0, 3], res = Method2([0, 4, 3, 0], 0),   check(ans, res));
console.log('test 4', ans = [0, 2], res = Method2([-3, 4, 3, 90], 0), check(ans, res));

console.log('Method 3');
console.log('test 1', ans = [0, 1], res = Method3([2, 7, 11, 15], 9), check(ans, res));
console.log('test 2', ans = [1, 2], res = Method3([3, 2, 4], 6),      check(ans, res));
console.log('test 3', ans = [0, 3], res = Method3([0, 4, 3, 0], 0),   check(ans, res));
console.log('test 4', ans = [0, 2], res = Method3([-3, 4, 3, 90], 0), check(ans, res));
