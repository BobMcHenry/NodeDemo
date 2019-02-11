const http = require('http');

const options = {
  hostname: 'restcountries.eu',
  port: 80,
  path: '/rest/v2/name/united%20states',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
}

const req = http.request(options, (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    console.log(data);
  })
  response.on('end', () => {console.log("All Done!!")
  })

})

req.on('error', (error) => {
  console.error(error)
})

req.end()
