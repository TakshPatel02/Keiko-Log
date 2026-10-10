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
];
