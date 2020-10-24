Given a sorted list `3, 5, 6, 8, 11, 12, 14, 15, 17, 18` and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

3, 5, 6, 8, 11, 12, 14, 15, 17, 18

// binarySearch(array, value, start, send)

value = 8

1. 0, 9  index 4 --  3, 5, 6, 8, *11*, 12, 14, 15, 17, 18
2. 0, 3  index 1 --  3, *5*, 6, 8
3. 2, 3  index 2 --  *6*, 8
4. 3, 3  index 3 --  *8* return 3

value = 16
1. 0, 9  index 4 --  3, 5, 6, 8, *11*, 12, 14, 15, 17, 18
2. 5, 9  index 7 --  12, 14, *15*, 17, 18
3. 8, 9  index 8 --  *17*, 18 ergo, return -1


TODO: look into array.split version of BS

item < value


item > value