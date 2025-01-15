import { contextBridge, ipcRenderer } from 'electron';

// Define types for allowed channels
type ValidSendChannels = 'toMain';
type ValidReceiveChannels = 'fromMain';

// Expose a safe API to the renderer process
contextBridge.exposeInMainWorld('api', {
    /**
     * Sends data from the renderer process to the main process.
     * @param channel - The channel name (must be a valid send channel).
     * @param data - The data to send.
     */
    send: (channel: ValidSendChannels, data: any): void => {
        const validChannels: ValidSendChannels[] = ['toMain'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        } else {
            console.warn(`Invalid send channel: ${channel}`);
        }
    },

    /**
     * Receives data from the main process to the renderer process.
     * @param channel - The channel name (must be a valid receive channel).
     * @param callback - The callback function to handle received data.
     */
    receive: (channel: ValidReceiveChannels, callback: (...args: any[]) => void): void => {
        const validChannels: ValidReceiveChannels[] = ['fromMain'];
        if (validChannels.includes(channel)) {
            // Remove all listeners for the channel before adding a new one
            ipcRenderer.removeAllListeners(channel);
            ipcRenderer.on(channel, (event, ...args) => callback(...args));
        } else {
            console.warn(`Invalid receive channel: ${channel}`);
        }
    },
});
