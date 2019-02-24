/*
Description:
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var array = [];
    var breaks = false;
    for(var i=0; i< nums.length;i++){
        for(var j=0; j< nums.length;j++){
            if(i!=j && nums[i]+nums[j] === target){
                array.push(i); 
                array.push(j);
                breaks = true;
                break;
            }
        }
        if(breaks){
            break;
        }
    }
    return array;
};
