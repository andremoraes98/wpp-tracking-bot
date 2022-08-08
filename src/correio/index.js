const axios = require('axios');
require('dotenv').config();

const correioUser = process.env.CORREIO_USER;
const correioToken = process.env.CORREIO_TOKEN;

const getTrackingData = async (codePackage) => {
  try {
    const url = `https://api.linketrack.com/track/json?user=${correioUser}&token=${correioToken}&codigo=${codePackage}`;
    const { data: { codigo, eventos } } = await axios.get(url)
  
    return { codigo, eventos };
  } catch ({ response: { status, data } }) {
    console.log(`Código: ${status}. ${data}`)
  }
}