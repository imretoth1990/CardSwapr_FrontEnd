import axios from "axios";

export async function fetchCards(): Promise<any> {
  const baseUrl: string = "http://localhost:8080/api/cards";
  const url: string = `${baseUrl}?page=0&size=9`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Something went wrong :(");
  }
}
