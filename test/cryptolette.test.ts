import { accounts, contract } from '@openzeppelin/test-environment'
import { BN } from '@openzeppelin/test-helpers'

const MyContract = contract.fromArtifact('Cryptolette')

enum FieldColor {
  ZERO = 0,
  BLACK = 1,
  RED = 2,
}

enum FieldNumberType {
  ZERO = 0,
  EVEN = 1,
  ODD = 2,
}

enum FieldNumberValue {
  ZERO = 0,
  UP_TO_18 = 1,
  MORE_THAT_18 = 2,
}

jest.setTimeout(30000)

describe('Cryptolette', function () {
  const [owner] = accounts
  let myContract

  beforeEach(async () => {
    myContract = await MyContract.new({ from: owner })
  })

  describe('Rolled value', () => {
    it('Get', async () => {
      const value = await myContract.getRolledValue()
      expect(value).toBeTruthy()
    })

    it('Value ranges', async () => {
      for (let i of new Array(100).fill(null)) {
        const value = (await myContract.getRolledValue()).toNumber()
        expect(value).toBeLessThanOrEqual(36)
        expect(value).toBeGreaterThanOrEqual(0)
      }
    })
  })

  describe('Rolled color', () => {
    const redNumbers = [
      1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
    ]
    it('0', async () => {
      const value = (await myContract.getFieldColor(0)).toNumber()
      expect(value).toBe(FieldColor.ZERO)
    })

    it('color', async () => {
      for (let i = 1; i <= 36; i++) {
        const value = (await myContract.getFieldColor(i)).toNumber()
        if (redNumbers.includes(i)) {
          expect(value).toBe(FieldColor.RED)
        } else {
          expect(value).toBe(FieldColor.BLACK)
        }
      }
    })
  })

  describe('Rolled number type', () => {
    it('0', async () => {
      const value = (await myContract.getFieldNumberType(0)).toNumber()
      expect(value).toBe(FieldNumberType.ZERO)
    })

    it('number type', async () => {
      for (let i = 1; i <= 36; i++) {
        const value = (await myContract.getFieldNumberType(i)).toNumber()
        if (i % 2 === 0) {
          expect(value).toBe(FieldNumberType.EVEN)
        } else {
          expect(value).toBe(FieldNumberType.ODD)
        }
      }
    })
  })

  describe('Rolled number value', () => {
    it('0', async () => {
      const value = (await myContract.getFieldNumberValue(0)).toNumber()
      expect(value).toBe(FieldNumberValue.ZERO)
    })

    it('number type', async () => {
      for (let i = 1; i <= 36; i++) {
        const value = (await myContract.getFieldNumberValue(i)).toNumber()
        if (i <= 18) {
          expect(value).toBe(FieldNumberValue.UP_TO_18)
        } else {
          expect(value).toBe(FieldNumberValue.MORE_THAT_18)
        }
      }
    })
  })
})
