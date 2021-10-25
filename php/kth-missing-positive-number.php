<?php

/*
Find the kth positive integer that is missing from this array.

 

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

*/ 

class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @return Integer
     */
    function findKthPositive($arr, $k) {
        $maxNo = $arr[count($arr) - 1];
        $numbers = range(1, $maxNo);
        $arrayDiff = array_values(array_diff($numbers, $arr));
        
        if(count($arrayDiff) >= $k){
            return $arrayDiff[$k -1];
        }
        
        $additionalNumbers = range($maxNo+1, $k + count($arr));
        
        return array_merge($arrayDiff, $additionalNumbers)[$k-1];
        
    }
}

/*
Runtime: 30 ms, faster than 11.22% of PHP online submissions for Kth Missing Positive Number.
*/ 