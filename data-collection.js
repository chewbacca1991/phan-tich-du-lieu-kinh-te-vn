// Module to collect economic data

const axios = require('axios');

async function fetchEconomicData(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    return { error: 'Failed to fetch economic data' };
  }
}

module.exports = { fetchEconomicData };