const fetch = require('node-fetch');

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';


var pcData; 
fetch(pcUrl)
.then(response => { return response.json() })
.then(response => { pcData = response; console.log('Данные успешно загружены')})
.catch(err => { console.log("Не удалось получить данные: \n", err); });

module.exports = function(url) {
	var result = pcData;
	if(url === '/volumes') {
		var hddSize = {};
		result.hdd.forEach(function(item) {
			hddSize[item.volume] = item.size + "";
		})
		result = hddSize;
	} else {
		var property = url.split('/');
		property.forEach(function(item, i) {
			if(i > 0 && item !== '') {
				result = result[item+''];
			}
		});
	}

	return JSON.stringify(result);
}

