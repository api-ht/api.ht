// import { describe, test, it, expect } from 'vitest'
import { expect, test } from 'vitest'
import { API, api } from './index.js'

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

test('Schema Thing', async () => {
  // const results = await API('ht').api.Thing({test: true})
  const results = await API().schema.Thing()
  expect(results.toBe({}))
})

test('IP Address', async () => {
  const results = await api.ip('1.1.1.1')
  expect(results.toBe({}))
})