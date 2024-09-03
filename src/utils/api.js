const BASE_URL = 'https://api.balldontlie.io/v1';
const API_KEY = process.env.NEXT_PUBLIC_BALL_DONT_LIE_API_KEY;

const myHeaders = new Headers();
myHeaders.append("authorization", API_KEY);

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

export const fetchPlayers = async () => {
    const allPlayers = [];
    let page = 1;
    const perPage = 100; // Number of players per page
    try {
        const response = await fetch(`${BASE_URL}/players?page=${page}&per_page=${perPage}`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Fetch players error:', error);
        throw error;
    }
};

export const fetchPlayerById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/players/${id}`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch player data error:', error);
        throw error;
    }
};

export const fetchTeams = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/teams`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    const data = await response.json();
    } catch (error) {
        console.error('Fetch team data error:', error);
        throw error;
    }
};