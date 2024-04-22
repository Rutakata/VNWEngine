import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Audio, Scene, Text } from "../../types";

export interface SceneState {
  scene: Scene | null,
  text: Text | null,
  audio: Audio | null
}

const initialState: SceneState = {
  scene: null,
  text: null,
  audio: null
}

type NewScene = {
  id: number,
  sceneTitle: string
}

export const sceneSlice = createSlice({
  name: 'scene',
  initialState,
  reducers: {
    createScene: (state, action: PayloadAction<NewScene>) => {
      const newScene: Scene = {
        id: action.payload.id,
        sceneTitle: action.payload.sceneTitle,
        background: '',
        assets: {}
      }

      state.scene = newScene;
    }
  } 
})

export const { createScene } = sceneSlice.actions;

export default sceneSlice.reducer;