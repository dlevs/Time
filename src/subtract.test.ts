import * as deepFreeze from 'deep-freeze';
import { subtract } from './subtract';

const time = deepFreeze({ milliseconds: 10 });

describe('subtract()', () => {
	test('works as expected for 2 arguments', () => {
		expect(subtract(time, time)).toMatchObject({ milliseconds: 0 });
		expect(subtract(time, { seconds: 1 })).toMatchObject({ seconds: -1, milliseconds: 10 });
	});

	test('works as expected for a variable number of arguments', () => {
		expect(subtract(time, time, time)).toMatchObject({ milliseconds: -10 });
		expect(subtract(time, time, time, time, time)).toMatchObject({ milliseconds: -30 });
	});

	test('accepts number and string arguments', () => {
		expect(subtract(100, 2000)).toMatchObject({ milliseconds: -1900 });
		expect(subtract('PT6S', 'PT1S', 2000)).toMatchObject({
			seconds: 5,
			milliseconds: -2000,
		});
	});
});
