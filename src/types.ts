export type Config = {
  projectName: string
}

export type Text = {
  id: number, 
  text: string[]
}

export type Scene = {
  id: number,
  sceneTitle: string,
  background: string,
  assets: {
    [key: string] : string[]
  }
}

export type Audio = {
  id: number,
  bg_music: string,
  sounds: {
    [key: string]: string
  }
}