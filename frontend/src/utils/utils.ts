// @ts-ignore
const serverUrl = 'http://localhost:3001/';
export const sendRequest = async(url: string, method: string, headers: any, body?: any) => {
    await fetch(`${serverUrl}${url}`, {
        method,
        headers,
        body
    })
};
