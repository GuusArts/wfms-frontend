

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
    await axios.post(`${API_BASE_URL}/create/wineroom`, wineroom)}
    catch(error){
      console.error(error)
    }
    
    }

  async CreateWinetank(winetank){
  try{
    await axios.post(`${API_BASE_URL}/create/wineTank`, winetank)}
    catch(error){
      console.error(error)
      }
      
      }
   
  
  
  async RetrieveRoomData(){

    const response = await axios.get(`${API_BASE_URL}/List/Wineroom`);
    console.log(response)
      return response
  }

  async RetrieveAvaibleSpark(){

    const response = await axios.get(`${API_BASE_URL}/List/Sparks`);
    console.log(response)
    return response
  }

  async RetrieveWineTanksByWineRoomId(WineroomID) {
    try {
      const response = await axios.get(`${API_BASE_URL}/wineroom/${WineroomID}/winetanks`);
      return response.data;
    } catch (error) {
      console.error("Error fetching wine tanks by wine room ID:", error);
      throw error;
    }
  }


}
export default new VinAIDataService();
