import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface WorkspaceData {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  thumbnail: string | null
  day_pass_price:string | null
}

interface WorkspaceState {
  data: WorkspaceData[] ;
  loading: boolean;
  error: string | null;
}

export const STATIC_ASSETS_BASEURL =  "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/"; 

const initialState: WorkspaceState = {
  data: [],
  loading: true,
  error: null,
};


export const fetchWorkspaceData = createAsyncThunk(
  'workspace/fetchData',
  async () => {
    const response = await fetch('https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json');
    if (!response.ok) {
      throw new Error('Failed to fetch workspace data');
    }
    let spaces = await response.json();
    spaces = spaces.map((ele: WorkspaceData & { images: string[] })=>({
      ...ele,
      thumbnail : ele.images[0]
    }))

    return spaces
  }
);

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkspaceData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkspaceData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWorkspaceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default workspaceSlice.reducer; 