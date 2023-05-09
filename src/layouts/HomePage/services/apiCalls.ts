export async function fetchCards(): Promise<any> {
  const baseUrl: string = "http://localhost:8080/api/cards";
  const url: string = `${baseUrl}?page=0&size=9`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something went wrong :(");
  }

  return await response.json();
}
