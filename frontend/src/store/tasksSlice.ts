import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  description: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    setTaskOrder: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTasks, setTaskOrder } = tasksSlice.actions;

export default tasksSlice.reducer;
