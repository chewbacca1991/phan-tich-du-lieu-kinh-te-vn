// Mô-đun thu thập dữ liệu

const axios = require('axios');

async function fetchEconomicData(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi thu thập dữ liệu:', error);
    return null;
  }
}

module.exports = { fetchEconomicData };