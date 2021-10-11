<?php

/*


*/
class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        return $x == strrev($x);
    }
}

// Runtime: 20 ms, faster than 96.63% of PHP online submissions for Palindrome Number.