let obj = {},
	Address = {},
	CustomField = {},
	Communication = {},
	Tags = [];

const f = () => {
	myform.addEventListener('submit', (event) => {
		event.preventDefault();

		[...myform.elements].forEach((input) => {
			if (input.getAttribute('subname') === 'Address') {
				Address[`${input.name}`] = input.value;
			} else if (input.getAttribute('subname') === 'Communication') {
				Communication[`${input.name}`] = input.value;
			} else if (input.getAttribute('subname') === 'tags') {
				Tags.push(`${input.name}`);
			} else if (input.name === 'IsActive') {
				obj[`${input.name}`] = true;
			} else {
				obj[`${input.name}`] = input.value;
			}
		});
	});
	obj[`Address`] = Address;
	obj[`Communication`] = Communication;
	obj[`Tags`] = Tags;
	obj[`CustomField`] = {};

	send(obj);
};

const login = 'info@colordigital.com',
	// password =
	// 	'aW5mb0Bjb2xvcmRpZ2l0YWwuY29tOjk0NjZiMmQxLThjYTItNDhhOS1iNTAxLTc0MDVkNjhkYTcwYg==';
	password = '9466b2d1-8ca2-48a9-b501-7405d68da70b';

const send = (data) => {
	// fetch('https://api.julitec.com/api/contact', {
	// 	method: 'post',
	// 	mode: 'no-cors',
	// 	headers: {
	// 		Authorization: 'Basic ' + btoa(`${login}:${password}`),
	// 		'Content-Type': 'application/x-www-form-urlencoded',
	// 		'Access-Control-Allow-Origin': '*',
	// 	},
	// 	body: 'A=1&B=2',
	// })
	// 	.then((response) => response.json())
	// 	.then((json) => console.log(json));

	async function postData(url, data) {
		const response = await fetch(url, {
			mode: 'no-cors',
			method: 'POST',
			credentials: 'include',
			headers: {
				Authorization: 'Basic ' + btoa(`${login}:${password}`),
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},

			// cache: 'no-cache',
			// credentials: 'same-origin',
			// redirect: 'follow',
			// referrerPolicy: 'no-referrer',
			body: JSON.stringify(data),
		});
		return await response.json();
	}

	postData('https://api.julitec.com/api/contact', data).then((data) => {
		console.log(data);
	});
};
