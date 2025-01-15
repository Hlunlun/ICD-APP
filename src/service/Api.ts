const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
const API_URL = `${BASE_URL}:${PORT}`;


class Api{  
  
  public static async fetchData(endpoint: string, method: string = 'GET', body: any = null): Promise<any> {
    const url = `${API_URL}${endpoint}`;
    const options: RequestInit = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }  

    try {
      const response = await fetch(url, options);      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}


export default Api;