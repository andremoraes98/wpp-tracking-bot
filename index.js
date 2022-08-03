const axios = require('axios').default;

const codePackage = 'NL171221802BR';
const url = `https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${codePackage}`;

axios.get(url)
  .then(({ data: { eventos, codigo }}) => {
    console.log(eventos, codigo);
  })
  .catch((error) => {
    console.log(error.message);
  })