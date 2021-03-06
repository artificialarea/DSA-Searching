# Search algorithms

**[Thinkful Data Structures & Algorithms assignment](https://courses.thinkful.com/dsa-v1/checkpoint/9#assignment)**

To run any of these scripts, in terminal command line enter: `node script-name.js`



<br />

## 1. How many searches?

Given a sorted list of  `3, 5, 6, 8, 11, 12, 14, 15, 17, 18` and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find `8`.

>
**`indexes: [start, end] / values: []`**
1. `0, 9   -- 3, 5, 6, 8, 11, 12, 14, 15, 17, 18` and `11 > 8`
2. `0, 3   -- 3, 5, 6, 8` and `5 < 8`
3. `2, 3   -- 6, 8` and `6 < 8`
4. `3, 3   -- 8` and `return 3` 


<br />

Likewise, to find `16`. 

>
1. `0, 9   -- 3, 5, 6, 8, 11, 12, 14, 15, 17, 18` and `11 < 16`
2. `5, 9   -- 12, 14, 15, 17, 18` and `15 < 16`
3. `8, 9   -- 17, 18` and `return -1 (nope)`


<br />

## 2. Adding a UI

Opted to do this in Vanilla JS instead of React.

interface: **https://artificialarea.github.io/DSA-Searching/linear-vs-binary-search/**

files: **[`linear-vs-binary-search`](https://github.com/artificialarea/DSA-Searching/blob/main/linear-vs-binary-search)** 