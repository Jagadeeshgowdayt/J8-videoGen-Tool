const https = require('https');
const data = JSON.stringify({
  model: "flux",
  prompt: "A cute cat",
  n: 1,
  size: "1024x1024"
});
const options = {
  hostname: 'gen.pollinations.ai',
  port: 443,
  path: '/v1/images/generations',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer pk_2MdDl2jPQWm6RxIj',
    'Content-Length': data.length
  }
};
const req = https.request(options, res => {
  let d = '';
  res.on('data', chunk => d += chunk);
  res.on('end', () => console.log('STATUS:', res.statusCode, 'BODY:', d));
});
req.on('error', error => console.error(error));
req.write(data);
req.end();

