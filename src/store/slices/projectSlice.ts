import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { Text, Config, Scene, Audio } from '../../types';
import { projectAPI } from '../../axios/requests';

type Loading = 'projectInfo' | 'projectText' | null

export interface projectState {
  projectInfo: Config | null,
  projectFolder: string | null,
  projectText: Text[] | null,
  projectAssets: string[] | null,
  projectScenes: Scene[] | null,
  projectAudio: Audio[] | null,
  loading: Loading
}

const initialState: projectState = {
  projectInfo: null,
  projectFolder: null,
  projectText: null,
  projectAssets: null,
  projectScenes: null,
  projectAudio: null,
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
    const response = await projectAPI.getProjectAssets(projectFolder);
    return response;
  }
)

export const fetchProjectScenes = createAsyncThunk(
  'project/fetchProjectScenes',
  async (projectFolder: string) => {
    const response = await projectAPI.getProjectScenes(projectFolder);
    return response;
  }
)

export const fetchProjectData = createAsyncThunk(
  'project/fetchProjectData', 
  async (projectFolder: string) => {
    const info = await projectAPI.getProjectInfo(projectFolder);
    const scenes = await projectAPI.getProjectScenes(projectFolder);
    const text = await projectAPI.getProjectText(projectFolder);
    const audio = await projectAPI.getProjectAudio(projectFolder);
    const assets = await projectAPI.getProjectAssets(projectFolder);
    return { info, scenes, text, audio, assets };
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
      state.projectScenes = null;
      state.projectAudio = null; 
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
    .addCase(fetchProjectData.fulfilled, (state, action) => {
      state.projectInfo = action.payload.info;
      state.projectScenes = action.payload.scenes;
      state.projectText = action.payload.text;
      state.projectAudio = action.payload.audio;
      state.projectAssets = action.payload.assets;
    })
  }
})

// Action creators are generated for each case reducer function
export const { setProjectFolder, clearProjectData } = projectSlice.actions;

export default projectSlice.reducer;