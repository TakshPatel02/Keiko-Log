export type Video = {
  id: string;
  title: string;
  description: string;
  url?: string;
};

export type Playlist = {
  id: string;
  title: string;
  description: string;
  videos: Video[];
};

export const playlists: Playlist[] = [
  {
    id: "dsa-main",
    title: "DSA with Chai aur Code",
    description: "Free DSA course led by Prateek Jain. Pseudocode first, then Python.",
    videos: [
      {
        id: "dsa-main-001",
        title: "Introduction to DSA Time Complexity", description: "Covers data structures and calculating time complexity using Big O notation.",
        url: "https://youtu.be/QUX18Ba9cd8"
      },
      {
        id: "dsa-main-002",
        title: "Array Implementation in Python",
        description: "Covers array module, NumPy arrays, slicing, indexing, and multi-dimensional array operations.",
        url: "https://youtu.be/eOSk6WDYqr0"
      },
      {
        id: "dsa-main-003",
        title: "Implementing Singly Linked Lists",
        description: "Learn to build, traverse, insert, and delete nodes in Python lists.",
        url: "https://youtu.be/CIwv6647W_E"
      },
      {
        id: "dsa-main-004",
        title: "Doubly and Circular Linked Lists",
        description: "Covers implementation, insertion, and deletion for doubly and circular linked lists.",
        url: "https://youtu.be/RREeZD2L5vA",
      },
      {
        id: "dsa-main-005",
        title: "Stack Implementation in Python",
        description: "Learn to implement stack operations like push, pop, and peak using lists.",
        url: "https://youtu.be/uqA0VLqs4lg"
      },
      {
        id: "dsa-main-006",
        title: "Queue and Deque in Python",
        description: "Implementing FIFO queues and double-ended queues using Python lists.",
        url: "https://youtu.be/MZI7L991634",
      },
      {
        id: "dsa-main-007",
        title: "Implementing Circular Queues in Python",
        description: "Understand circular queue structure, circular array logic, and modular arithmetic implementation.",
        url: "https://youtu.be/kSm1yEE6-oY"
      },
      {
        id: "dsa-main-008",
        title: "Introduction to Recursion in Python",
        description: "Teaches recursive function logic, base cases, and factorial/Fibonacci sequence implementations.",
        url: "https://youtu.be/hRqsb5rfCUM"
      },
      {
        id: "dsa-main-009",
        title: "Introduction to Tree Data Structures",
        description: "Covers hierarchical tree structures, types, and array versus linked list representation.",
        url: "https://youtu.be/3pCANa_a8KY"
      },
      {
        id: "dsa-main-010",
        title: "Tree Traversal Methods",
        description: "Implements recursive preorder, inorder, and postorder traversal algorithms in Python.",
        url: "https://youtu.be/tXn3FZSo8Rc"
      },
      {
        id: "dsa-main-011",
        title: "Introduction to Binary Search Trees",
        description: "Covers binary search tree properties, node insertion, and element searching algorithms.",
        url: "https://youtu.be/jGks31F1yck"
      },
      {
        id: "dsa-main-012",
        title: "Deletion in Binary Search Trees",
        description: "Covers deletion logic for leaf, single-child, and two-child BST nodes.",
        url: "https://youtu.be/r-FdMObF8Tg"
      },
      {
        id: "dsa-main-013",
        title: "Graph Matrix Representation in Python",
        description: "Introduces graph concepts, types, and their matrix-based implementation in Python code.",
        url: "https://youtu.be/SgPjI6I1TF4"
      },
      {
        id: "dsa-main-014",
        title: "Graph Adjacency List Representation",
        description: "Implementing graph adjacency lists using Python dictionaries and handling undirected edges.",
        url: "https://youtu.be/E6TBJpUjt3c"
      },
      {
        id: "dsa-main-015",
        title: "Graph Depth First Search Traversal",
        description: "Explains DFS algorithm logic, stack implementation, and Python code visualization.",
        url: "https://youtu.be/BgIVVxERhig"
      },
      {
        id: "dsa-main-016",
        title: "Breadth First Search Graph Traversal",
        description: "Explains BFS algorithm using queues for level-wise graph traversal and implementation.",
        url: "https://youtu.be/Htm7d2hl9kc"
      },
      {
        id: "dsa-main-017",
        title: "Bubble Sort Algorithm",
        description: "Learn Bubble Sort implementation, iterations, swapping logic, and time complexity.",
        url: "https://youtu.be/kLmYU32r7uY"
      },
      {
        id: "dsa-main-018",
        title: "Understanding Selection Sort Algorithm",
        description: "Covers selection sort logic, implementation, and time complexity analysis using Python.",
        url: "https://youtu.be/JQFywyExs-U"
      },
      {
        id: "dsa-main-019",
        title: "Understanding Insertion Sort Algorithm",
        description: "Learn the insertion sort algorithm implementation, logic, and time complexity analysis.",
        url: "https://youtu.be/p1JpWFmp18A"
      },
      {
        id: "dsa-main-020",
        title: "Merge Sort Algorithm Implementation",
        description: "Explains divide and conquer approach for implementing merge sort in Python.",
        url: "https://youtu.be/yqz4K0sY0LM"
      },
      {
        id: "dsa-main-021",
        title: "Understanding Quick Sort Algorithm",
        description: "Covers divide and conquer approach, partitioning logic, and time complexity analysis.",
        url: "https://youtu.be/SXKU-hI19fU"
      },
      {
        id: "dsa-main-022",
        title: "Divide and Conquer Algorithm",
        description: "Learn divide and conquer approach for finding array min-max elements.",
        url: "https://youtu.be/8uyt9DMLyLM"
      },
      {
        id: "dsa-main-023",
        title: "Greedy Algorithms Basics and Applications",
        description: "Explores greedy approach concepts, sorting strategies, and coin change problem solutions.",
        url: "https://youtu.be/uUgLw5LVTAg"
      },
      {
        id: "dsa-main-024",
        title: "Fractional Knapsack Greedy Algorithm",
        description: "Solving the fractional knapsack problem using greedy sorting and python implementation.",
        url: "https://youtu.be/RXskasE9Db4"
      },
      {
        id: "dsa-main-025",
        title: "Dynamic Programming 0/1 Knapsack Problem",
        description: "Learn dynamic programming by solving the 0/1 knapsack optimization problem efficiently.",
        url: "https://youtu.be/gZZ5riP2jbA"
      },
    ],
  },
  {
    id: "leetcode-array",
    title: "Chai aur LeetCode (Array)",
    description: "Pattern-based LeetCode practice on arrays: two pointers, sliding window.",
    videos: [
      {
        id: "leetcode-array-001",
        title: "Remove Duplicates from Sorted Array",
        description: "Use the two pointers approach to remove duplicates in-place.",
        url: "https://youtu.be/GKcoKCxBh5U"
      },
      {
        id: "leetcode-array-002",
        title: "Search Insert Position",
        description: "Binary search algorithm to find or insert a target in arrays.",
        url: "https://youtu.be/G5cHT9qoO60"
      },
      {
        id: "leetcode-array-003",
        title: "Merge Sorted Array",
        description: "Merge two sorted arrays in-place using the reverse two pointers technique.",
        url: "https://youtu.be/gBu2ZdN0cUA"
      },
      {
        id: "leetcode-array-004",
        title: "Plus One",
        description: "Reverse iteration with carry-over logic for handling array digit increments.",
        url: "https://youtu.be/93Ph9cVdYtw"
      },
      {
        id: "leetcode-array-005",
        title: "Best Time to Buy and Sell Stock",
        description: "Use a single pass iteration to track minimum price and profit.",
        url: "https://youtu.be/KLyCmXhJnsI"
      },
      {
        id: "leetcode-array-006",
        title: "Move Zeros",
        description: "Solve using the two-pointer technique to move zeros in-place.",
        url: "https://youtu.be/irRDW2MOR2M"
      },
      {
        id: "leetcode-array-007",
        title: "Island Perimeter",
        description: "Traverse a 2D matrix using nested loops to calculate grid boundaries.",
        url: "https://youtu.be/puBAde5Kivo"
      },
      {
        id: "leetcode-array-008",
        title: "Maximum Subarray",
        description: "Solving maximum subarray sum using Kadane's Algorithm for optimal performance.",
        url: "https://youtu.be/L3bxyM9erXE"
      },
      {
        id: "leetcode-array-009",
        title: "Sort Colors",
        description: "Sorts 0s, 1s, and 2s using the three pointers Dutch National Flag algorithm.",
        url: "https://youtu.be/4x84gWdW9-M"
      },
      {
        id: "leetcode-array-010",
        title: "Spiral Matrix",
        description: "Traverse a matrix spirally using four boundary pointers and simulation.",
        url: "https://youtu.be/VwF3SU4r0YI"
      },
      {
        id: "leetcode-array-011",
        title: "Rotate Array",
        description: "Rotate array using the triple reversal technique for optimal performance.",
        url: "https://youtu.be/vhYV9rSpqdg"
      },
      {
        id: "leetcode-array-012",
        title: "Two Sum",
        description: "Solves using hash map technique to achieve linear time complexity.",
        url: "https://youtu.be/zd285Gs_10w"
      },
      {
        id: "leetcode-array-013",
        title: "Three Sum",
        description: "Solve using sorting and the three pointers technique to find triplets.",
        url: "https://youtu.be/NcZDuAOBb2M"
      },
      {
        id: "leetcode-array-014",
        title: "Find Missing and Repeated Number",
        description: "Find missing and repeated numbers using XOR bit manipulation technique.",
        url: "https://youtu.be/q-SsQ0yz2jo"
      },
      {
        id: "leetcode-array-015",
        title: "Kth Largest Element in an Array",
        description: "Find the kth largest element using a min-heap priority queue approach.",
        url: "https://youtu.be/prIECG21x50"
      }
    ],
  }
];
