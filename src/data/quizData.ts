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
      }
    ]
  }
];