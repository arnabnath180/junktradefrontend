import axios from "axios";

const BASE_URL = "http://localhost:8001/seller/getScrapItemList/";
const DELETE_URL = "http://localhost:8001/seller/deleteScrapList/"

class SellerService {

    
saveSeller(data) {
    return axios.post("http://localhost:8001/seller/register_seller", data);
}

loginSeller(data) {
    return axios.post("http://localhost:8001/seller/login", data);
}

addOrders(data, config) {
    return axios.post("http://localhost:8001/seller/add_orders", data, config);
}

scrapList(config) {
    return axios.get("http://localhost:8001/seller/my_orders",config);
}

scrapListItem(scrapId,config) {
   return axios.get(BASE_URL + scrapId,config);
}

scrapListDelete (scrapId,config) {
    return axios.delete(`http://localhost:8001/seller/deleteScrapList/${scrapId}`,config);
}


}

export default new SellerService();