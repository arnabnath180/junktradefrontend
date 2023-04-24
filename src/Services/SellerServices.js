import axios from "axios";

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


}

export default new SellerService();