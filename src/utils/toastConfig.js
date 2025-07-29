// src/utils/toastConfig.js
import { toast } from "react-toastify";

const defaultOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  pauseOnHover: true,
  draggable: true,
  theme: "colored", // 'light' | 'dark' | 'colored'
};

export const toastSuccess = (message) => toast.success(message, defaultOptions);
export const toastError = (message) => toast.error(message, defaultOptions);
export const toastInfo = (message) => toast.info(message, defaultOptions);
export const toastLoading = (message) => toast.loading(message, defaultOptions);
export const toastUpdate = (id, newOptions) => toast.update(id, newOptions);
