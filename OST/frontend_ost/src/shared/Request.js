import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/seokhwanmyeong/json_server", // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
});

// instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default instance;
