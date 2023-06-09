import {createSlice} from '@reduxjs/toolkit';

// Define the initial state of the authentication module

const initialState = {
  mode: 'light',
  user: null,
  token: null,
  posts: [],
  projects: [],
  columns: [],
  tasks: []
};

//  Authentication module


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /*DARKMODE
    När knappen klickas på, om det är ljust blir det mörkt annars blir det ljust.*/ 
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    /* */
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    /* */
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    /* */
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error('user friends non-existent :(');
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts.slice(0)
        .reverse()
        .map((element) => {
          return element;
        });
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setProjects: (state, action) => {
      state.projects = action.payload.projects.slice(0)
        .reverse()
        .map((element) => {
          return element;
        });
    },
    setProject: (state,action) => {
      const updatedProjects = state.projects.map((project) => {
        if (project._id === action.payload.project._id) return action.payload.project;
        return project;
      });
      state.project = updatedProjects
    },
    setColumns: (state, action) => {
      state.columns = action.payload.columns.slice(0)
        .reverse()
        .map((element) => {
          return element;
        });
    },
    setColumn: (state,action) => {
      const updatedColumns = state.columns.map((column) => {
        if (column._id === action.payload.column._id) return action.payload.column;
        return column;
      });
      state.column = updatedColumns
    },    
    setTasks: (state, action) => {
      state.tasks = action.payload.tasks.slice(0)
        .reverse()
        .map((element) => {
          return element;
        });
    },
    setTask: (state,action) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task._id === action.payload.task._id) return action.payload.task;
        return task;
      });
      state.task = updatedTasks
    },
  },
});

export const {setTask, setTasks, setColumn, setColumns, setMode, setLogin, setLogout, setFriends, setPosts, setPost, setProject, setProjects} =
  authSlice.actions;
export default authSlice.reducer;