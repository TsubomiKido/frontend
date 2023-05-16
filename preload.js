const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("axios", {
    openAI: (code_line) => ipcRenderer.invoke('axios.openAI',code_line)
});
