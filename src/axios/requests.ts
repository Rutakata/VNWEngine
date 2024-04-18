import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
})

export const asssetsAPI = {
  getImages: async (projectName: string): Promise<any> => {
    try {
      const response: AxiosResponse = await instance.get(`/images?project=${projectName}`);
      return response.data;
    }catch(error) {
      return error;
    }
  }
}