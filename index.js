const axios = require('axios');

const getTrackingData = async (codePackage) => {
  try {
    const url = `https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${codePackage}`;
    const { data: { eventos, codigo }} = await axios.get(url)
  
    return { eventos, codigo };
  } catch ({ response: { status, data } }) {
    console.log(`Código: ${status}. ${data}`)
  }
}