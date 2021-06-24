import { accounts, contract } from '@openzeppelin/test-environment';
import { BN } from '@openzeppelin/test-helpers'

const MyContract = contract.fromArtifact('Cryptolette');

describe('Cryptolette', function () {
  const [ owner ] = accounts;
  let myContract;

  beforeEach(async() => {
    myContract = await MyContract.new({ from: owner });
  });

  it('Get initial value', async () => {
    const value = await myContract.get()
    const expected = new BN(0)
    expect(value.toString()).toBe(expected.toString());
  })
});