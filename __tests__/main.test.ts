import { createUserPayload, formatDate } from '../src/main'
import { expect, test } from '@jest/globals'


test('Valid user created', async () => {
    const currentDate = new Date();
    const expirationDate = currentDate;
    expirationDate.setMonth(currentDate.getMonth() + 12);
    expect(createUserPayload('Volodymyr', 'Hovorun')).toStrictEqual({
        firstName: 'Volodymyr',
        lastName: 'Hovorun',
        createdAt: formatDate(currentDate),
        validUntil: formatDate(expirationDate)
    });
})
