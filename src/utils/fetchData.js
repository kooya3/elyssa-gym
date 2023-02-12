export const exerciseOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    }
}

export const youtubeOptions = {
    method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1366c740e3msh3cefb15693158ecp19a904jsne1e1d56c2195',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response  = await fetch(url, options);
    const data = await response.json();
    

    return data;
}