import { accounts, contract } from '@openzeppelin/test-environment'

const MyContract = contract.fromArtifact('Balance')

const VALUE = 10

describe('Balance', function () {
  const [owner, otherAcc] = accounts
  let myContract

  beforeEach(async () => {
    myContract = await MyContract.new({ from: owner })
  })

  it('get initial ballance', async () => {
    const value = (await myContract.getBalance()).toNumber()
    expect(value).toBe(0)
  })

  it('transfer money', async () => {
    await myContract.sendTransaction({from: otherAcc, value: VALUE})
    const value = (await myContract.getBalance()).toNumber()
    expect(value).toBe(VALUE)
  })

  it('getWithdrawableAmount', async () => {
    await myContract.sendTransaction({from: otherAcc, value: 100})
    const value = (await myContract.getWithdrawableAmount()).toNumber()
    expect(value).toBe(80)
  })

  it('getPercentage', async () => {
    const value = (await myContract.getPercentage(100, 90)).toNumber()
    expect(value).toBe(90)
  })
})
