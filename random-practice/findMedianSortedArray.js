/**
 * 
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */

//TODO: faster way found here https://medium.com/@hazemu/finding-the-median-of-2-sorted-arrays-in-logarithmic-time-1d3f2ecbeb46

var findMedianSortedArrays = function (nums1, nums2) {
    let merged = mergeArrays(nums1, nums2);
    console.log(merged)
    let size = merged.length;
    if (size % 2 == 0) {
        right = size / 2;
        left = right - 1;
        return (merged[left] + merged[right]) / 2;
    } else {
        return merged[Math.floor(size / 2)];
    }


};

var mergeArrays = function (arr1, arr2) {
    let count1 = 0;
    let count2 = 0;
    let merged = [];
    while (count1 < arr1.length && count2 < arr2.length) {
        if (arr1[count1] < arr2[count2]) {
            merged.push(arr1[count1])
            count1++;
        } else {
            merged.push(arr2[count2])
            count2++;
        }
    }

    while (count1 < arr1.length) {
        merged.push(arr1[count1])
        count1++;
    }

    while (count2 < arr2.length) {
        merged.push(arr2[count2])
        count2++;
    }

    return merged;
}