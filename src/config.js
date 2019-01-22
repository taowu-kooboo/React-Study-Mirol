import Axios from "axios";
import { Toast } from "antd-mobile";

// 拦截请求
Axios.interceptors.request.use(config => {
  Toast.loading("Loading", 0);
  return config;
});

// 拦截响应
Axios.interceptors.response.use(config => {
  setTimeout(() => {
    Toast.hide();
  }, 1500);
  return config;
});
