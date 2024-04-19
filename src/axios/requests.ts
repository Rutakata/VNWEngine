import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
})

const SUCCESS = 'SUCCESS';

export const projectAPI = {
  createProject: async (projectName: string): Promise<any> => {
    try {
      const respose: AxiosResponse = await instance.get(`/projects/create?project=${projectName}`)
      if (respose.status === 200) {
        return SUCCESS;
      }
    }catch(error) {
      return error;
    }
  },
  getImages: async (projectName: string): Promise<any> => {
    try {
      const response: AxiosResponse = await instance.get(`/assets?project=${projectName}`);
      return response.data;
    }catch(error) {
      return error;
    }
  }
}