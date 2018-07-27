var axios = require('axios');

exports.getDowntownDailyForecast = () => {
  axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather',
    params: {
      id: '6167863',
      APPID: '34ccb68299a54a6464f86847832c1e32',
    },
  }).then(response => {
    return response.data;
  }).catch(error => {
    console.log(error);
  });
}