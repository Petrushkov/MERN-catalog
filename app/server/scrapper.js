const Xray = require('x-ray');
const request = require('request');

const xray = new Xray(param);
const xray = {}; 
Xray.call(xray);

module.exports =  new Promise((resolve, reject) => {
xray('http://sss.shoes', '.product', [{
	title: 'h3',
	image: 'img@src',
	url: 'a@href'
}])
((err, result) => err ? reject(err) : resolve(result));
});
