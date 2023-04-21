import axios from "axios";

export default axios.create({
    baseURL: 'http://127.0.0.1:8000',

    token: '/checktoken?bearer=' + JSON.parse(localStorage.getItem('loggedAppUser')).accessToken.token,
});

// Llamada a la API utilizando el método POST
axios.post('/apisignin/create', {
    timestart: '19-04-2023 08:00:00',
    timerestart: '19-04-2023 13:00:00',
    timestop: '19-04-2023 14:00:00',
    timefinish: '19-04-2023 17:00:00',
    hourcount: '8',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

