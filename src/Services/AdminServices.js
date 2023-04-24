import axios from "axios";

const BASE_URL = "http://localhost:8001/admin/getScrapItemList/";
const DELETE_URL = "http://localhost:8001/admin/deleteScrapList/"

class AdminService {

loginAdmin(data) {
    return axios.post("http://localhost:8001/admin/login", data);
}

scrapList(config) {
    return axios.get("http://localhost:8001/admin/getScrapList",config);
}

scrapListItem(scrapId,config) {
   return axios.get(BASE_URL + scrapId,config);
}

scrapListDelete (scrapId,config) {
    return axios.delete(`http://localhost:8001/admin/deleteScrapList/${scrapId}`,config);
}

}

export default new AdminService();