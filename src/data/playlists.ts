export type Resource = {
  id: string;
  title: string;
  description: string;
  url?: string;
};

export type Playlist = {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  completed: boolean;
};

export const playlists: Playlist[] = [
  {
    id: "dsa-main",
    title: "DSA with Chai aur Code",
    description: "Free DSA course led by Prateek Jain. Pseudocode first, then Python.",
    completed: true,
    resources: [
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
    completed: true,
    resources: [
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
  },
  {
    id: "leetcode-string",
    title: "Chai aur LeetCode (String)",
    description: "String problems from LeetCode, from basics to KMP and backtracking.",
    completed: false,
    resources: [
      {
        id: "leetcode-string-001",
        title: "Check If Two String Arrays Are Equivalent",
        description: "Uses two-pointer iteration on word and character indices for space efficiency.", 
        url: "https://youtu.be/r7Q2WoQb2TA"
      },
      { 
        id: "leetcode-string-002", 
        title: "Check If the Sentence Is a Pangram", 
        description: "Uses a boolean array and frequency count to track character occurrences.", 
        url: "https://youtu.be/IV-IR4r816k"
      },
      { 
        id: "leetcode-string-003", 
        title: "Delete Columns to Make Sorted", 
        description: "Traverse columns to check lexicographical order and count unsorted ones.", 
        url: "https://youtu.be/zcZjACp6IOo" 
      },
      { 
        id: "leetcode-string-004", 
        title: "Find the Index of the First Occurrence in a String", 
        description: "Uses a nested loop brute force approach to find string occurrence.", 
        url: "https://youtu.be/W7Yu5Q0v4tY" 
      },
      { 
        id: "leetcode-string-005", 
        title: "Repeated Substring Pattern", 
        description: "Checks if string length is divisible by potential repeated substring lengths.", 
        url: "https://youtu.be/i4TImdOCeaI" 
      },
      { 
        id: "leetcode-string-006", 
        title: "String Compression", 
        description: "Uses two-pointer approach for in-place character compression on the input array.", 
        url: "https://youtu.be/cT7QT9JdMIk"
      },
      { 
        id: "leetcode-string-007", 
        title: "Integer to Roman", 
        description: "Map integers to Roman numerals using a greedy approach with stored pairs.", 
        url: "https://youtu.be/duJJHuGjiu0"
      },
      { 
        id: "leetcode-string-008", 
        title: "Restore IP Addresses", 
        description: "Uses recursive backtracking to partition a numeric string into valid IP segments.",
        url: "https://youtu.be/txHKbaQ_4nk", 
      },
      { 
        id: "leetcode-string-009", 
        title: "Number of Laser Beams in a Bank", 
        description: "Multiplies consecutive non-zero row counts of security devices to sum total beams.", 
        url: "https://youtu.be/x-3mRomOVB0"
      },
      { 
        id: "leetcode-string-010", 
        title: "Reverse Words in a String", 
        description: "Reversing strings and pointers to rearrange words while removing extra spaces.", 
        url: "https://youtu.be/VKHNtW3NXTQ"
      },
    ],
  },
  {
  id: "dbms-notes",
  title: "Database Systems: Reading Notes",
  description: "34 chapters in 7 parts, from file storage and SQL to indexing, transactions and schema design. Written explanations paired with hand-drawn pages.",
  completed: true,
  resources: [
    {
      id: "dbms-notes-000",
      title: "Introduction",
      description: "What the course covers, why databases are built the way they are, and how to read the notes.",
      url: "https://dsa.chaicode.com/dbms/introduction"
    },

    // Part A: Foundations
    {
      id: "dbms-notes-001",
      title: "From Files to a Database",
      description: "The six problems that make file storage collapse, and what a DBMS does about each.",
      url: "https://dsa.chaicode.com/dbms/from-files-to-a-database"
    },
    {
      id: "dbms-notes-002",
      title: "Inside a DBMS",
      description: "The three-schema architecture, data independence, and the components a query passes through.",
      url: "https://dsa.chaicode.com/dbms/inside-a-dbms"
    },
    {
      id: "dbms-notes-003",
      title: "Data Models & Keys",
      description: "How data can be shaped, why relations won, and the keys that hold a schema together.",
      url: "https://dsa.chaicode.com/dbms/data-models-and-keys"
    },
    {
      id: "dbms-notes-004",
      title: "ER Modelling",
      description: "Turning a vague requirement into entities, attributes and relationships you can defend.",
      url: "https://dsa.chaicode.com/dbms/er-modelling"
    },
    {
      id: "dbms-notes-005",
      title: "From ER Diagram to Tables",
      description: "A fixed seven-step procedure that turns any ER diagram into a working schema.",
      url: "https://dsa.chaicode.com/dbms/er-to-tables"
    },

    // Part B: The relational model and SQL
    {
      id: "dbms-notes-006",
      title: "Relational Algebra",
      description: "The six operators every SQL query is secretly built from.",
      url: "https://dsa.chaicode.com/dbms/relational-algebra"
    },
    {
      id: "dbms-notes-007",
      title: "Creating Tables",
      description: "Data types, constraints, and getting the shape right before any data arrives.",
      url: "https://dsa.chaicode.com/dbms/creating-tables"
    },
    {
      id: "dbms-notes-008",
      title: "Querying & Changing Rows",
      description: "SELECT, WHERE, ORDER BY, and the three statements that change data.",
      url: "https://dsa.chaicode.com/dbms/querying-and-changing-rows"
    },
    {
      id: "dbms-notes-009",
      title: "Joins",
      description: "Every kind of join, what each one does to unmatched rows, and the mistakes that quietly give wrong results.",
      url: "https://dsa.chaicode.com/dbms/joins"
    },
    {
      id: "dbms-notes-010",
      title: "Aggregation & Grouping",
      description: "Turning many rows into one number per group, without getting the count wrong.",
      url: "https://dsa.chaicode.com/dbms/aggregation-and-grouping"
    },
    {
      id: "dbms-notes-011",
      title: "Subqueries",
      description: "Queries inside queries, including the two that express \"all\" and \"none\".",
      url: "https://dsa.chaicode.com/dbms/subqueries"
    },
    {
      id: "dbms-notes-012",
      title: "Views, CTEs & Window Functions",
      description: "Naming things, and the one feature that computes across rows without collapsing them.",
      url: "https://dsa.chaicode.com/dbms/views-ctes-and-window-functions"
    },

    // Part C: Design and normalization
    {
      id: "dbms-notes-013",
      title: "Functional Dependencies",
      description: "The precise statement of \"this determines that\", and how to compute what a set of them implies.",
      url: "https://dsa.chaicode.com/dbms/functional-dependencies"
    },
    {
      id: "dbms-notes-014",
      title: "Normal Forms",
      description: "1NF through BCNF, derived rather than memorized, on one table taken apart step by step.",
      url: "https://dsa.chaicode.com/dbms/normal-forms"
    },
    {
      id: "dbms-notes-015",
      title: "When to Stop Normalizing",
      description: "Denormalization as a deliberate, measured decision, and how to keep the copies honest.",
      url: "https://dsa.chaicode.com/dbms/when-to-stop-normalizing"
    },
    {
      id: "dbms-notes-016",
      title: "Schema Design in Practice",
      description: "The decisions normalization does not cover, and the anti-patterns that survive it.",
      url: "https://dsa.chaicode.com/dbms/schema-design-in-practice"
    },

    // Part D: Storage and indexing
    {
      id: "dbms-notes-017",
      title: "How Rows Are Stored",
      description: "Pages, heap files, and the row layout underneath every table you have written.",
      url: "https://dsa.chaicode.com/dbms/how-rows-are-stored"
    },
    {
      id: "dbms-notes-018",
      title: "The Buffer Pool",
      description: "Why one number, the page in memory, decides almost every performance question.",
      url: "https://dsa.chaicode.com/dbms/the-buffer-pool"
    },
    {
      id: "dbms-notes-019",
      title: "B+ Trees",
      description: "The structure behind almost every index, and what actually happens on insert.",
      url: "https://dsa.chaicode.com/dbms/b-plus-trees"
    },
    {
      id: "dbms-notes-020",
      title: "Other Index Types",
      description: "Hash, bitmap, GIN, GiST and full-text, and the question each one answers better.",
      url: "https://dsa.chaicode.com/dbms/other-index-types"
    },
    {
      id: "dbms-notes-021",
      title: "Using Indexes Well",
      description: "Selectivity, covering indexes, partial indexes, and deciding what should exist.",
      url: "https://dsa.chaicode.com/dbms/using-indexes-well"
    },
    {
      id: "dbms-notes-022",
      title: "Why the Index Is Ignored",
      description: "Six reasons a perfectly good index goes unused, and the fix for each.",
      url: "https://dsa.chaicode.com/dbms/why-the-index-is-ignored"
    },

    // Part E: Query processing and optimization
    {
      id: "dbms-notes-023",
      title: "From SQL to a Plan",
      description: "Parsing, rewriting, plan generation and costing: the four stages before anything runs.",
      url: "https://dsa.chaicode.com/dbms/from-sql-to-a-plan"
    },
    {
      id: "dbms-notes-024",
      title: "Physical Operators",
      description: "Scans, the three join algorithms, sorting and aggregation, and what the plan nodes actually do.",
      url: "https://dsa.chaicode.com/dbms/physical-operators"
    },
    {
      id: "dbms-notes-025",
      title: "Reading a Query Plan",
      description: "EXPLAIN line by line, and the four shapes that mean something is wrong.",
      url: "https://dsa.chaicode.com/dbms/reading-a-query-plan"
    },
    {
      id: "dbms-notes-026",
      title: "Application-Level Performance",
      description: "N+1 queries, pooling, batching and pagination: the costs that never show up in a plan.",
      url: "https://dsa.chaicode.com/dbms/application-level-performance"
    },

    // Part F: Transactions and recovery
    {
      id: "dbms-notes-027",
      title: "Transactions & ACID",
      description: "What each of the four letters actually promises, and who provides it.",
      url: "https://dsa.chaicode.com/dbms/transactions-and-acid"
    },
    {
      id: "dbms-notes-028",
      title: "Schedules & Serializability",
      description: "What makes an interleaving correct, and how to test one with a graph.",
      url: "https://dsa.chaicode.com/dbms/schedules-and-serializability"
    },
    {
      id: "dbms-notes-029",
      title: "Locking & Deadlocks",
      description: "Two-phase locking, what actually blocks what, and how to stop deadlocking.",
      url: "https://dsa.chaicode.com/dbms/locking-and-deadlocks"
    },
    {
      id: "dbms-notes-030",
      title: "Isolation Levels & MVCC",
      description: "The four levels, the anomalies each permits, and how to reproduce them in two terminals.",
      url: "https://dsa.chaicode.com/dbms/isolation-levels-and-mvcc"
    },
    {
      id: "dbms-notes-031",
      title: "Logging & Recovery",
      description: "Write-ahead logging, checkpoints, and what happens in the seconds after a crash.",
      url: "https://dsa.chaicode.com/dbms/logging-and-recovery"
    },

    // Part G: Modern databases and capstone
    {
      id: "dbms-notes-032",
      title: "Replication & Sharding",
      description: "What changes when the data no longer fits on one machine.",
      url: "https://dsa.chaicode.com/dbms/replication-and-sharding"
    },
    {
      id: "dbms-notes-033",
      title: "SQL & NoSQL",
      description: "What each non-relational family actually gave up, and what it bought with it.",
      url: "https://dsa.chaicode.com/dbms/sql-and-nosql"
    },
    {
      id: "dbms-notes-034",
      title: "Capstone: Designing a Real Schema",
      description: "One system, designed end to end, using every part of this course.",
      url: "https://dsa.chaicode.com/dbms/capstone-designing-a-real-schema"
    },
  ],
},
];
