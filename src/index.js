// My lib
const p1 = new Promise();

require.ensure(['./helper'], (require) => {
	const helper = require('./helper');
	helper.log('pouet');
})
