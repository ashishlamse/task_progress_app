import axios from "axios";


//prod
export const GOOGLE_CLOUD_BASE_URL = "https://us-central1-task-progress-app-308717.cloudfunctions.net/task_progress_app/api/v1/";

const AxiosInstance = axios.create({
    baseURL: GOOGLE_CLOUD_BASE_URL,
    timeout: 12 * 1000, // 12 second server timeout
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})

export default AxiosInstance