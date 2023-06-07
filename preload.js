const { contextBridge, ipcRenderer } = require("electron");
const Toastify = require('toastify-js');

contextBridge.exposeInMainWorld("axios", {
    openAI: (code_line) => ipcRenderer.invoke('axios.openAI',code_line)
});

contextBridge.exposeInMainWorld("Toastify", {
    showToast: (options) => Toastify(options).showToast()
});