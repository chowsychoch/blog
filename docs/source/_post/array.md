---
title: Array note and solve merged sorted array
date: 2021-03-3
categories:
 - Note
tags:
 - Data Structure
 - Array
 - 
---

This article will discuss data structure of Array.

Arrays 
Trees
Tries
Stacks
Queues
Linked Lists
Graphs
Hash Tables 

Arrays is a list which helps to organize items sequentially.

Big-O Notation - Time Complexity 

Static
- lookup O(1)
- push   O(1) 
- insert O(n) 
- delete O(n)

Dynamic 
- Lookup O(1)
- Append *O(1) **can be O(n) on expanding memory
- Insert O(n)
- Delete O(n)

Array stored in contagious memory (in order). 

Insert O(n)
```js
const strings = ['a','b','c','d']
                  0   1   2   3
strings.unshift('x')
const strings = ['x','a','b','c','d']
                  0   1   2   3   4
                  //---> move index 
strings.splice(2,0,'alien')
```

# Two Types of Arrays: Static & Dynamics

Static - fixed in size. Allocated memory in advance. 

Dynamic - Copy an Array and relocate to new location (Usually doubling in size)


Javascript - reference type (non-primitive type) 

```js
var number = 1 
var number = 2

var object1 = { value:10} // store the address of memory 
// object 2 point to object1 
var object2 = object1 

var object3 = {value:10} // store the address of memory 

[] === [] 
// false
//Why it is false? Because they are comparing itself the memory. Not the type 
// context vs scope 

```

Questions: Merge a Sorted Arrays
- Javascript version
```js
function mergeSortedArrays(array1, array2){
//Since they are in order we need to keep track of the two index of arrays

let array1Ind = 0
let array2Ind = 0
let newArr = []
//if array is [], simply return one 
if (array1.length === 0 ){
  return array2  
}else if (array2.length === 0 ){
  return array1
}

let totalLen = array1.length + array2.length
//count != totalLen
//make sure the current index is not exceed the length of an array
while (array1Ind <=array1.length && array2Ind <= array2.length){
    // if index of first array is greater than array 2 
    if (array2[array2Ind] | array1[array1Ind] > array2[array2Ind]){
        //push the array 2 item into new array
        newArr.push(array2[array2Ind])
        //record the new index 
        array2Ind++;
        
    }else{
        //push the array first item into new
      newArr.push(array1[array1Ind])
      array1Ind++;
    }
  }
  return newArr
}

mergeSortedArrays([0,3,4,31],[4,6,30])
// [0,3,4,4,6,30,31]
```
Java version 
```java
public class mergeArray {
    public static void main(String[] args) {
        int m=3;
        int n=3;
        int [] nums1 = {1,2,3,0,0,0};
        int [] nums2 = {2,5,6};
        /*merge(nums1,m,nums2,n);
        int [] nums1 = {0};
        int [] nums2 = {1};*/
        System.out.println("jello");
        merge(nums1,3,nums2,3);
    }
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        int num2ind = n -1;
        int num1ind = m -1;
        for (int i = nums1.length-1; i > 0; i--){
            if (n == 0){
                System.out.println("helllo");
                System.out.println(Arrays.toString(nums1));
                break;
            }else if ( m== 0 ){
                System.out.println("helllllllo");
                System.out.println(Arrays.toString(nums2));
                break;
            }else {
                ///not use nums2 [ ] compare nums 1 [ nums1.length ] nut nums [ m ]
                if (nums2[num2ind] > nums1[num1ind]){
                    nums1[i] = nums2[num2ind];
                    num2ind--;
                }else {
                    nums1[i] = nums1[num1ind];
                    num1ind--;
                }
            }
            System.out.println(Arrays.toString(nums1));
        }

    }
}


```