import axios from "axios";

export const SimilarWords = async (words) => {
    const payload = {
        words: words
    };
    const headers = {
        "accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
    };
    try {
        const res = await axios.post(`/api/ytb-similarwords-01`, payload, {headers: headers});
        if (res.data !== null && typeof res.data === 'object') {
            return res.data;
        }
        return {};
    } catch (err) {
        console.error("Error fetching similar words:", err);
        return {};
    }
};