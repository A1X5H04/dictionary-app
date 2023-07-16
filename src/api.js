export async function getUrbanDictionary(word) {
    const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + word;
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    	}
    };
    try {
    	const response = await fetch(url, options);
    	const result = await response.json();
    	return result.list;
    } catch (error) {
    	throw new Error('There was an error' + error);
    }
}


export async function getSimpleDictonary(word) {
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
    const options = { method: 'GET'}
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error('There was an error');
    }
}