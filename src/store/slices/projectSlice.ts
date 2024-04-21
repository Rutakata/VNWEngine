import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { Text, Config } from '../../types';
import { projectAPI } from '../../axios/requests';

type Loading = 'projectInfo' | 'projectText' | null

export interface projectState {
  projectInfo: Config | null,
  projectFolder: string | null,
  projectText: Text[] | null,
  projectAssets: string[] | null,
  loading: Loading
}

const initialState: projectState = {
  projectInfo: null,
  projectFolder: null,
  projectText: null,
  projectAssets: null,
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

export const fetchProjectAssets = createAsyncThunk(
  'project/fetchProjectAssets',
  async (projectFolder: string) => {
    const response = await projectAPI.getAssets(projectFolder);
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
    clearProjectFolder: (state) => {
      state.projectFolder = null;
    },
    clearProjectData: (state) => {
      state.projectFolder = null;
      state.projectInfo = null;
      state.projectText = null;
      state.projectAssets = null;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProjectInfo.fulfilled, (state, action) => {
      state.projectInfo = action.payload;
    })
    .addCase(fetchProjectText.fulfilled, (state, action) => {
      state.projectText = action.payload;
    })
    .addCase(fetchProjectAssets.fulfilled, (state, action) => {      
      state.projectAssets = action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
export const { setProjectFolder, clearProjectData } = projectSlice.actions;

export default projectSlice.reducer;