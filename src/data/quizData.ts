import { QuizDomain } from "@/types/quiz";

export const quizDomains: QuizDomain[] = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description: "Test your knowledge of arrays, trees, graphs, and algorithms",
    icon: "💻",
    color: "from-blue-600 to-purple-600",
    questions: [
      {
        id: "dsa1",
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correctAnswer: 1,
        explanation: "Binary search divides the search space in half at each step, resulting in O(log n) time complexity.",
        domain: "dsa"
      },
      {
        id: "dsa2",
        question: "Which data structure uses LIFO principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: 1,
        explanation: "Stack follows Last In First Out (LIFO) principle where the last element added is the first one to be removed.",
        domain: "dsa"
      },
      {
        id: "dsa3",
        question: "What is the worst-case time complexity of QuickSort?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        correctAnswer: 1,
        explanation: "QuickSort has O(n²) worst-case time complexity when the pivot is always the smallest or largest element.",
        domain: "dsa"
      },
      {
        id: "dsa4",
        question: "Which traversal visits nodes level by level?",
        options: ["Inorder", "Preorder", "Postorder", "Level-order"],
        correctAnswer: 3,
        explanation: "Level-order traversal (BFS) visits all nodes at the current depth before moving to nodes at the next depth level.",
        domain: "dsa"
      },
      {
        id: "dsa5",
        question: "What is the space complexity of merge sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2,
        explanation: "Merge sort requires O(n) additional space for the temporary arrays used in the merging process.",
        domain: "dsa"
      },
      {
        id: "dsa6",
        question: "Which data structure is best for implementing a priority queue?",
        options: ["Array", "Linked List", "Heap", "Stack"],
        correctAnswer: 2,
        explanation: "Heap provides efficient insertion and deletion of the highest/lowest priority element in O(log n) time.",
        domain: "dsa"
      },
      {
        id: "dsa7",
        question: "What is the time complexity of finding an element in a hash table on average?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 0,
        explanation: "Hash tables provide O(1) average-case time complexity for search, insert, and delete operations.",
        domain: "dsa"
      },
      {
        id: "dsa8",
        question: "Which algorithm is used to find the shortest path in a weighted graph?",
        options: ["BFS", "DFS", "Dijkstra's", "Quick Sort"],
        correctAnswer: 2,
        explanation: "Dijkstra's algorithm finds the shortest path from a source vertex to all other vertices in a weighted graph.",
        domain: "dsa"
      },
      {
        id: "dsa9",
        question: "What is the worst-case time complexity of insertion in a binary search tree?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2,
        explanation: "In the worst case (skewed tree), insertion in a BST can take O(n) time when the tree becomes linear.",
        domain: "dsa"
      },
      {
        id: "dsa10",
        question: "Which sorting algorithm is stable and has O(n log n) time complexity?",
        options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
        correctAnswer: 2,
        explanation: "Merge sort is stable (maintains relative order of equal elements) and has O(n log n) time complexity.",
        domain: "dsa"
      },
      {
        id: "dsa11",
        question: "What is dynamic programming primarily used for?",
        options: ["Sorting", "Searching", "Optimization problems", "Graph traversal"],
        correctAnswer: 2,
        explanation: "Dynamic programming is used to solve optimization problems by breaking them into overlapping subproblems.",
        domain: "dsa"
      },
      {
        id: "dsa12",
        question: "Which data structure allows insertion and deletion at both ends?",
        options: ["Stack", "Queue", "Deque", "Array"],
        correctAnswer: 2,
        explanation: "Deque (Double-ended queue) allows insertion and deletion operations at both the front and rear ends.",
        domain: "dsa"
      }
    ]
  },
  {
    id: "networks",
    title: "Computer Networks",
    description: "Explore protocols, OSI model, and network fundamentals",
    icon: "🌐",
    color: "from-green-600 to-teal-600",
    questions: [
      {
        id: "net1",
        question: "Which layer of OSI model handles routing?",
        options: ["Data Link", "Network", "Transport", "Session"],
        correctAnswer: 1,
        explanation: "The Network layer (Layer 3) is responsible for routing packets between different networks.",
        domain: "networks"
      },
      {
        id: "net2",
        question: "What is the default port for HTTP?",
        options: ["21", "23", "80", "443"],
        correctAnswer: 2,
        explanation: "HTTP uses port 80 by default, while HTTPS uses port 443.",
        domain: "networks"
      },
      {
        id: "net3",
        question: "Which protocol is used for reliable data transmission?",
        options: ["UDP", "TCP", "ICMP", "ARP"],
        correctAnswer: 1,
        explanation: "TCP (Transmission Control Protocol) provides reliable, ordered delivery of data.",
        domain: "networks"
      },
      {
        id: "net4",
        question: "What does DNS stand for?",
        options: ["Dynamic Name System", "Domain Name System", "Data Network Service", "Digital Name Server"],
        correctAnswer: 1,
        explanation: "DNS (Domain Name System) translates domain names to IP addresses.",
        domain: "networks"
      },
      {
        id: "net5",
        question: "Which protocol is used for sending emails?",
        options: ["HTTP", "FTP", "SMTP", "SNMP"],
        correctAnswer: 2,
        explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending email messages.",
        domain: "networks"
      },
      {
        id: "net6",
        question: "What is the maximum transmission unit (MTU) for Ethernet?",
        options: ["1024 bytes", "1500 bytes", "2048 bytes", "4096 bytes"],
        correctAnswer: 1,
        explanation: "The standard MTU for Ethernet is 1500 bytes.",
        domain: "networks"
      },
      {
        id: "net7",
        question: "Which device operates at the Data Link layer?",
        options: ["Router", "Switch", "Hub", "Gateway"],
        correctAnswer: 1,
        explanation: "Switches operate at the Data Link layer (Layer 2) and make forwarding decisions based on MAC addresses.",
        domain: "networks"
      },
      {
        id: "net8",
        question: "What is the purpose of ARP protocol?",
        options: ["Route packets", "Resolve IP to MAC", "Encrypt data", "Compress data"],
        correctAnswer: 1,
        explanation: "ARP (Address Resolution Protocol) resolves IP addresses to MAC addresses in a local network.",
        domain: "networks"
      },
      {
        id: "net9",
        question: "Which topology has the highest fault tolerance?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        correctAnswer: 3,
        explanation: "Mesh topology provides the highest fault tolerance as there are multiple paths between nodes.",
        domain: "networks"
      },
      {
        id: "net10",
        question: "What is the default subnet mask for Class C networks?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
        correctAnswer: 2,
        explanation: "Class C networks use a default subnet mask of 255.255.255.0 (/24).",
        domain: "networks"
      },
      {
        id: "net11",
        question: "Which protocol is connectionless?",
        options: ["TCP", "UDP", "FTP", "HTTP"],
        correctAnswer: 1,
        explanation: "UDP (User Datagram Protocol) is connectionless and does not guarantee delivery.",
        domain: "networks"
      },
      {
        id: "net12",
        question: "What does DHCP provide?",
        options: ["Security", "Automatic IP configuration", "File sharing", "Email services"],
        correctAnswer: 1,
        explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices on a network.",
        domain: "networks"
      }
    ]
  },
  {
    id: "webdev",
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript, and modern frameworks",
    icon: "🚀",
    color: "from-orange-600 to-red-600",
    questions: [
      {
        id: "web1",
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
        explanation: "The push() method adds one or more elements to the end of an array.",
        domain: "webdev"
      },
      {
        id: "web2",
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1,
        explanation: "CSS stands for Cascading Style Sheets, used for styling web pages.",
        domain: "webdev"
      },
      {
        id: "web3",
        question: "Which HTML tag is used for the largest heading?",
        options: ["<h6>", "<h1>", "<heading>", "<header>"],
        correctAnswer: 1,
        explanation: "The <h1> tag represents the largest heading in HTML.",
        domain: "webdev"
      },
      {
        id: "web4",
        question: "What is the correct way to create a function in JavaScript?",
        options: ["function = myFunction() {}", "function myFunction() {}", "create myFunction() {}", "def myFunction() {}"],
        correctAnswer: 1,
        explanation: "The correct syntax for creating a function in JavaScript is 'function functionName() {}'.",
        domain: "webdev"
      },
      {
        id: "web5",
        question: "Which CSS property is used to change the text color?",
        options: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: 1,
        explanation: "The 'color' property is used to set the text color in CSS.",
        domain: "webdev"
      },
      {
        id: "web6",
        question: "What does the 'let' keyword do in JavaScript?",
        options: ["Creates a constant", "Declares a variable", "Defines a function", "Imports a module"],
        correctAnswer: 1,
        explanation: "The 'let' keyword is used to declare block-scoped variables in JavaScript.",
        domain: "webdev"
      },
      {
        id: "web7",
        question: "Which HTML attribute specifies the URL of a hyperlink?",
        options: ["src", "href", "link", "url"],
        correctAnswer: 1,
        explanation: "The 'href' attribute specifies the URL that the hyperlink points to.",
        domain: "webdev"
      },
      {
        id: "web8",
        question: "What is the purpose of the CSS box model?",
        options: ["Creating animations", "Defining layout and spacing", "Setting colors", "Managing fonts"],
        correctAnswer: 1,
        explanation: "The CSS box model defines how the different parts of an element (margin, border, padding, content) are laid out.",
        domain: "webdev"
      },
      {
        id: "web9",
        question: "Which method is used to remove the last element from an array?",
        options: ["delete()", "remove()", "pop()", "shift()"],
        correctAnswer: 2,
        explanation: "The pop() method removes and returns the last element from an array.",
        domain: "webdev"
      },
      {
        id: "web10",
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Management", "Dynamic Object Method", "Document Oriented Markup"],
        correctAnswer: 0,
        explanation: "DOM stands for Document Object Model, which represents the structure of HTML documents.",
        domain: "webdev"
      },
      {
        id: "web11",
        question: "Which CSS property is used to make text bold?",
        options: ["text-weight", "font-weight", "text-style", "font-style"],
        correctAnswer: 1,
        explanation: "The 'font-weight' property is used to set the thickness/boldness of text.",
        domain: "webdev"
      },
      {
        id: "web12",
        question: "What is the correct way to comment in HTML?",
        options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "# This is a comment"],
        correctAnswer: 2,
        explanation: "HTML comments are written using <!-- comment text --> syntax.",
        domain: "webdev"
      }
    ]
  },
  {
    id: "os",
    title: "Operating Systems",
    description: "Learn about processes, memory management, and system calls",
    icon: "⚙️",
    color: "from-indigo-600 to-blue-600",
    questions: [
      {
        id: "os1",
        question: "What is a deadlock in operating systems?",
        options: ["Memory overflow", "Process waiting indefinitely", "CPU overheating", "Disk failure"],
        correctAnswer: 1,
        explanation: "A deadlock occurs when processes wait indefinitely for resources held by each other.",
        domain: "os"
      },
      {
        id: "os2",
        question: "Which scheduling algorithm gives priority to shortest jobs?",
        options: ["FCFS", "SJF", "Round Robin", "Priority"],
        correctAnswer: 1,
        explanation: "SJF (Shortest Job First) scheduling algorithm prioritizes processes with the shortest execution time.",
        domain: "os"
      },
      {
        id: "os3",
        question: "What is virtual memory?",
        options: ["RAM only", "Disk space used as memory", "Cache memory", "Register memory"],
        correctAnswer: 1,
        explanation: "Virtual memory uses disk space to extend the apparent size of main memory.",
        domain: "os"
      },
      {
        id: "os4",
        question: "What is the purpose of a process control block (PCB)?",
        options: ["Store program code", "Store process information", "Manage hardware", "Control network"],
        correctAnswer: 1,
        explanation: "PCB stores all information about a process including its state, registers, and scheduling information.",
        domain: "os"
      },
      {
        id: "os5",
        question: "Which memory allocation strategy reduces external fragmentation?",
        options: ["First Fit", "Best Fit", "Worst Fit", "Compaction"],
        correctAnswer: 3,
        explanation: "Compaction reduces external fragmentation by moving allocated blocks to create larger free blocks.",
        domain: "os"
      },
      {
        id: "os6",
        question: "What is a semaphore used for?",
        options: ["Memory allocation", "Process synchronization", "File management", "CPU scheduling"],
        correctAnswer: 1,
        explanation: "Semaphores are used for process synchronization and controlling access to shared resources.",
        domain: "os"
      },
      {
        id: "os7",
        question: "Which page replacement algorithm is optimal but impractical?",
        options: ["FIFO", "LRU", "Optimal", "Clock"],
        correctAnswer: 2,
        explanation: "The Optimal algorithm replaces the page that will be used farthest in the future, but requires future knowledge.",
        domain: "os"
      },
      {
        id: "os8",
        question: "What is the difference between preemptive and non-preemptive scheduling?",
        options: ["Priority levels", "CPU can be taken away vs cannot", "Memory usage", "I/O operations"],
        correctAnswer: 1,
        explanation: "In preemptive scheduling, the CPU can be taken away from a running process, while in non-preemptive it cannot.",
        domain: "os"
      },
      {
        id: "os9",
        question: "What is thrashing in virtual memory?",
        options: ["Disk crashes", "Excessive page faults", "Memory leaks", "CPU overheating"],
        correctAnswer: 1,
        explanation: "Thrashing occurs when the system spends more time swapping pages than executing processes.",
        domain: "os"
      },
      {
        id: "os10",
        question: "Which IPC mechanism is fastest?",
        options: ["Pipes", "Message queues", "Shared memory", "Sockets"],
        correctAnswer: 2,
        explanation: "Shared memory is the fastest IPC mechanism as it allows direct memory access between processes.",
        domain: "os"
      },
      {
        id: "os11",
        question: "What is a zombie process?",
        options: ["Infected process", "Process that has terminated but entry remains", "Sleeping process", "Background process"],
        correctAnswer: 1,
        explanation: "A zombie process has completed execution but still has an entry in the process table.",
        domain: "os"
      },
      {
        id: "os12",
        question: "Which file system uses journaling for crash recovery?",
        options: ["FAT32", "NTFS", "ext2", "Both NTFS and ext3/4"],
        correctAnswer: 3,
        explanation: "Both NTFS and ext3/4 file systems use journaling to maintain consistency after crashes.",
        domain: "os"
      }
    ]
  },
  {
    id: "dbms",
    title: "Database Management",
    description: "Understand SQL, normalization, and database design",
    icon: "🗄️",
    color: "from-purple-600 to-pink-600",
    questions: [
      {
        id: "db1",
        question: "What does ACID stand for in database systems?",
        options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Index, Data", "Auto, Create, Insert, Delete", "All, Correct, Important, Details"],
        correctAnswer: 0,
        explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability - key properties of database transactions.",
        domain: "dbms"
      },
      {
        id: "db2",
        question: "Which SQL command is used to retrieve data?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        correctAnswer: 2,
        explanation: "The SELECT command is used to retrieve data from database tables.",
        domain: "dbms"
      },
      {
        id: "db3",
        question: "What is the primary key in a database?",
        options: ["Most important column", "Unique identifier for records", "First column", "Largest column"],
        correctAnswer: 1,
        explanation: "A primary key uniquely identifies each record in a database table.",
        domain: "dbms"
      },
      {
        id: "db4",
        question: "What is normalization in databases?",
        options: ["Data backup", "Removing redundancy", "Adding indexes", "Data encryption"],
        correctAnswer: 1,
        explanation: "Normalization is the process of organizing data to reduce redundancy and improve data integrity.",
        domain: "dbms"
      },
      {
        id: "db5",
        question: "Which normal form eliminates transitive dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctAnswer: 2,
        explanation: "Third Normal Form (3NF) eliminates transitive dependencies where non-key attributes depend on other non-key attributes.",
        domain: "dbms"
      },
      {
        id: "db6",
        question: "What is a foreign key?",
        options: ["Primary key from another table", "Encrypted key", "Unique key", "Composite key"],
        correctAnswer: 0,
        explanation: "A foreign key is a field that refers to the primary key of another table, establishing relationships between tables.",
        domain: "dbms"
      },
      {
        id: "db7",
        question: "Which SQL clause is used to filter groups?",
        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
        correctAnswer: 1,
        explanation: "The HAVING clause is used to filter groups created by GROUP BY, while WHERE filters individual rows.",
        domain: "dbms"
      },
      {
        id: "db8",
        question: "What is a database index?",
        options: ["Data backup", "Performance optimization structure", "Security feature", "Data validation"],
        correctAnswer: 1,
        explanation: "An index is a data structure that improves the speed of data retrieval operations on a database table.",
        domain: "dbms"
      },
      {
        id: "db9",
        question: "Which type of join returns only matching rows from both tables?",
        options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
        correctAnswer: 2,
        explanation: "INNER JOIN returns only the rows that have matching values in both tables.",
        domain: "dbms"
      },
      {
        id: "db10",
        question: "What is a database transaction?",
        options: ["Single query", "Group of operations", "Database backup", "User session"],
        correctAnswer: 1,
        explanation: "A transaction is a logical group of database operations that are executed as a single unit.",
        domain: "dbms"
      },
      {
        id: "db11",
        question: "Which SQL function returns the number of rows?",
        options: ["SUM()", "COUNT()", "AVG()", "MAX()"],
        correctAnswer: 1,
        explanation: "The COUNT() function returns the number of rows that match a specified condition.",
        domain: "dbms"
      },
      {
        id: "db12",
        question: "What is database denormalization?",
        options: ["Removing data", "Adding redundancy for performance", "Data encryption", "Index creation"],
        correctAnswer: 1,
        explanation: "Denormalization intentionally adds redundancy to a database design to improve read performance.",
        domain: "dbms"
      }
    ]
  }
];