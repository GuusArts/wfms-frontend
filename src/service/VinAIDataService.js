

import axios from "axios";

const API_BASE_URL = "http://localhost:8081";
const API_ENDPOINT = `${API_BASE_URL}/monitor/temp`;

class VinAIDataService {
  async retrieveTemperatureData() {
    try {
      const response = await axios.get(API_ENDPOINT);
      return response.data;
    } catch (error) {
      console.error("Error fetching temperature data:", error);
      throw error;
    }
  }

  async retrieveSideKettleTempData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/monitor/kettle`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Kettle data:", error);
      throw error;
    }
  }


  async RetrieveTankData(){
    try {
      const response = await axios.get(`${API_BASE_URL}/monitor/winetanks`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Kettle data:", error);
      throw error;
    }
  }

  async CreateWineRoom(wineroom){
    try{
    await axios.post(`${API_BASE_URL}/monitor/createwineroom`, wineroom)}
    catch(error){
      console.error(error)
    }
    
    }
   
  
  
  async RetrieveRoomData(){

      const response = await axios.get(`${API_BASE_URL}/monitor/winerooms`);
      console.log(response)
      return response
}
}
export default new VinAIDataService();
