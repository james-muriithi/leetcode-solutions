<?php

/*


*/
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function threeSumClosest($nums, $target) {
        sort($nums);

        $closest = null;
        $delta = null;

        for ($i = 0; $i < count($nums); $i++) {
            $j = $i + 1;
            $k = count($nums) - 1;
            
            while ($j < $k) {
                $sum = $nums[$i] + $nums[$j] + $nums[$k];

                if ($sum == $target) {
                    return $sum;
                } elseif ($sum < $target) {
                    if ($closest === null || $target - $sum < $delta) {
                        $closest = $sum;
                        $delta = $target - $sum;
                    }
                    $j++;
                } else {
                    if ($closest === null || $sum - $target < $delta) {
                        $closest = $sum;
                        $delta = $sum - $target;
                    }
                    $k--;
                }                
            }
        }

        return $closest;
    }
}

// Runtime: 38 ms, faster than 53.57%of PHP online submissions for Palindrome Number.