<?php
/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 */

class Solution
{

    /**
     * @param Integer $x
     * @return Integer
     */
    public function reverse($x)
    {
        $rev = ($x < 0 ? '-' : '') . strrev(abs($x));
        return ((intval($rev) > -2147483647) && (intval($rev) < 2147483647)) ? intval($rev) : 0;
    }
}

// Runtime: 4 ms, faster than 94.16% of PHP online submissions for Reverse Integer.
