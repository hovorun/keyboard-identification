import {createUserPayload, formatDate} from '../src/main'
import {expect, test} from '@jest/globals'

test('Valid user created', async () => {
  const currentDate = new Date()
  const expirationDate = currentDate
  expirationDate.setMonth(currentDate.getMonth() + 12)
  expect(createUserPayload('Volodymyr', 'Hovorun')).toStrictEqual({
    firstName: 'Volodymyr',
    lastName: 'Hovorun',
    createdAt: formatDate(currentDate),
    validUntil: formatDate(expirationDate)
  })
})

test('Data is not received from FE', async () => {
  const currentDate = new Date()
  const expirationDate = currentDate
  expirationDate.setMonth(currentDate.getMonth() + 12)
  expect(createUserPayload('', '')).toThrowError('No params were passed');
})


test('Format method check', async () => {
  const currentDate = new Date()
  expect(formatDate(currentDate)).toBe(currentDate.toISOString().slice(0, 10))
})

test('Format method check if null', async () => {
  expect(formatDate(null)).toBe('')
})

test('Format method check if undefined', async () => {
  expect(formatDate(undefined)).toBe('')
})



