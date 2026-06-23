const BASE_URL = "https://api.jikan.moe/v4";

export const getTopManga = async () => {
    const res = await fetch(`${BASE_URL}/top/manga`);
    const data = await res.json();
    return data.data;
};

export const getTopCharacters = async () => {
    const res = await fetch(`${BASE_URL}/top/characters`);
    const data = await res.json();
    return data.data;
};
