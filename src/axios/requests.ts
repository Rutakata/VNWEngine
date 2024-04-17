import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
})

export const asssetsAPI = {
  getImages: async (): Promise<any> => {
    try {
      const response: AxiosResponse = await instance.get('/images');
      // const blobURL = URL.createObjectURL(response.data);
      return response.data;
    }catch(error) {
      return error;
    }
  }
}