import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { Text, Config } from '../../types';
import { projectAPI } from '../../axios/requests';

type Loading = 'projectInfo' | 'projectText' | null

export interface projectState {
  projectInfo: Config | null,
  projectFolder: string | null,
  projectText: Text[] | null,
  loading: Loading
}

const initialState: projectState = {
  projectInfo: null,
  projectFolder: null,
  projectText: null,
  loading: null
}

export const fetchProjectInfo = createAsyncThunk(
  'project/fetchProjectInfo',
  async (projectFolder: string) => {
    const response: Config = await projectAPI.getProjectInfo(projectFolder)
    return response;
  },
)

export const fetchProjectText = createAsyncThunk(
  'project/fetchProjectText',
  async (projectFolder: string) => {
    const response = await projectAPI.getProjectText(projectFolder);
    return response;
  }
)

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectFolder: (state, action: PayloadAction<string>) => {
      state.projectFolder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProjectInfo.fulfilled, (state, action) => {
      state.projectInfo = action.payload;
    })
    .addCase(fetchProjectText.fulfilled, (state, action) => {
      state.projectText = action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
export const { setProjectFolder } = projectSlice.actions;

export default projectSlice.reducer;