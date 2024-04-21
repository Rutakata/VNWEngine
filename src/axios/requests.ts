import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
})

const SUCCESS = 'SUCCESS';

export const projectAPI = {
  createProject: async (projectFolder: string, projectName: string): Promise<any> => {
    try {
      const respose: AxiosResponse = await instance.post(`/projects/create?project=${projectFolder}`, {projectName});
      if (respose.status === 200) {
        return SUCCESS;
      }
    }catch(error) {
      return error;
    }
  },
  getProjectInfo: async (projectFolder: string) => {
    try {
      const response: AxiosResponse = await instance.get(`/project/info?project=${projectFolder}`);
      if (response.status === 200) {
        return response.data.data;
      }
    }catch (error) {
      return error;
    }
  },
  getAllProjects: async (): Promise<any> => {
    try {
      const response: AxiosResponse = await instance.get(`/projects`);
      return response.data;
    }catch(error) {
      return error
    }
  },
  getProjectAssets: async (projectFolder: string): Promise<any> => {
    try {
      const response: AxiosResponse = await instance.get(`/project/assets?project=${projectFolder}`);
      if (response.status === 200) return response.data;
    }catch(error) {
      return error;
    }
  },
  getProjectText: async (projectFolder: string): Promise<any> => {
    try {
      const response: AxiosResponse = await instance.get(`/project/text?project=${projectFolder}`);
      if (response.status === 200) return response.data;
    }catch(error) {
      return error;
    }
  },
  getProjectScenes: async (projectFolder: string): Promise<any> => {
    try {
      const response: AxiosResponse = await instance.get(`/project/scenes?project=${projectFolder}`);
      if (response.status === 200) return response.data;
    }catch(error) {
      return error;
    }
  },
  getProjectAudio: async (projectFolder: string): Promise<any> => {
    try {
      const response: AxiosResponse = await instance.get(`/project/audio?project=${projectFolder}`);
      if (response.status === 200) return response.data;
    }catch(error) {
      return error;
    }
  }
}