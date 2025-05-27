export const employees = [
  {
    id: 1,
    firstname: 'Aarav',
    email: 'a@b.com',
    password: '123',
    taskCounts: {
      active: 1,
      newTask: 3,
      completed: 4,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Design Homepage',
        taskDescription: 'Create a modern responsive homepage UI.',
        taskDate: '2025-06-01',
        category: 'design'
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Fix Navbar Bug',
        taskDescription: 'Resolve the alignment issue in the navbar on mobile.',
        taskDate: '2025-05-28',
        category: 'development'
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: 'Write Documentation',
        taskDescription: 'Prepare usage guide for the new feature.',
        taskDate: '2025-05-25',
        category: 'documentation'
      }
    ]
  },
  {
    id: 2,
    firstname: 'Ishaan',
    email: 'employee2@example.com',
    password: '123',
    taskCounts: {
      active: 4,
      newTask: 2,
      completed: 1,
      failed: 3
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Develop API',
        taskDescription: 'Build authentication endpoints using Express.',
        taskDate: '2025-06-02',
        category: 'backend'
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Optimize Database',
        taskDescription: 'Add indexes and optimize queries.',
        taskDate: '2025-05-20',
        category: 'database'
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: 'Create Test Cases',
        taskDescription: 'Write unit tests for user service.',
        taskDate: '2025-05-22',
        category: 'testing'
      }
    ]
  },
  {
    id: 3,
    firstname: 'Vihaan',
    email: 'employee3@example.com',
    password: '123',
    taskCounts: {
      active: 3,
      newTask: 1,
      completed: 4,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Refactor Auth Module',
        taskDescription: 'Simplify login/logout flow and error handling.',
        taskDate: '2025-06-05',
        category: 'development'
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Update Icons',
        taskDescription: 'Replace old icons with new SVGs.',
        taskDate: '2025-05-27',
        category: 'design'
      }
    ]
  },
  {
    id: 4,
    firstname: 'Kabir',
    email: 'employee4@example.com',
    password: '123',
    taskCounts: {
      active: 1,
      newTask: 4,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Redesign Footer',
        taskDescription: 'Make footer mobile-friendly and accessible.',
        taskDate: '2025-06-03',
        category: 'design'
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: 'Improve Performance',
        taskDescription: 'Use Lighthouse to optimize app performance.',
        taskDate: '2025-05-24',
        category: 'performance'
      }
    ]
  },
  {
    id: 5,
    firstname: 'Arjun',
    email: 'employee5@example.com',
    password: '123',
    taskCounts: {
      active: 4,
      newTask: 1,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Create Landing Page',
        taskDescription: 'Design and implement the marketing landing page.',
        taskDate: '2025-06-04',
        category: 'frontend'
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Setup Firebase',
        taskDescription: 'Configure Firebase hosting and database.',
        taskDate: '2025-05-21',
        category: 'backend'
      }
    ]
  }
];

export const admin = {
  id: 'admin1',
  email: 'admin@example.com',
  password: '123'
};

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
