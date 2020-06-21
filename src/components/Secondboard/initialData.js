export const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Learn React JS' },
    'task-2': { id: 'task-2', content: 'Learn Vue JS' },
    'task-3': { id: 'task-3', content: 'Learn Angular JS' },
    'task-4': { id: 'task-4', content: 'Learn Svelte JS' },
  },
  cards: {
    'card-1': {
      id: 'card-1',
      title: 'To Apply',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      color: '#FFBA08',
    },
    'card-2': {
      id: 'card-2',
      title: 'Applied',
      taskIds: [],
      color: '#17C9FF',
    },
    'card-3': {
      id: 'card-3',
      title: 'Interview',
      taskIds: [],
      color: '#14E668',
    },
    'card-4': {
      id: 'card-4',
      title: 'Offered',
      taskIds: [],
      color: '#b388ff',
    },
  },
  cardOrder: ['card-1', 'card-2', 'card-3', 'card-4']
}