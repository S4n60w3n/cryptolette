import React from 'react'
import { Contract } from 'web3-eth-contract/types'

import getWeb3 from '../utils/getWeb3'
import SimpleStorageContract from '../contracts/SimpleStorage.json'

const _SimpleStorageContract: any = SimpleStorageContract

export const getSimpleStorageContract = async () => {
  const web3 = await getWeb3()
  const networkId = await web3.eth.net.getId()
  const deployedNetwork = _SimpleStorageContract.networks[networkId]
  return new web3.eth.Contract(
    _SimpleStorageContract.abi,
    deployedNetwork && deployedNetwork.address,
  )
}

export const useSimpleStorageContract = () => {
  const [loading, setLoading] = React.useState(true)
  const [instance, setInstance] = React.useState<Contract>()
  const [value, setValue] = React.useState()

  React.useEffect(() => {
    ;(async () => {
      setInstance(await getSimpleStorageContract())
    })()
  }, [])

  const getValue = React.useCallback(async () => {
    return await instance!.methods.get().call()
  }, [instance])

  const changeValue = React.useCallback(
    async (newValue: number) => {
      const accounts = await (await getWeb3()).eth.getAccounts()
      await instance!.methods.set(newValue).send({ from: accounts[0] })
      setValue(await getValue())
    },
    [instance, setValue, getValue],
  )

  React.useEffect(() => {
    if (!instance) {
      return
    }
    ;(async () => {
      setValue(await getValue())
      setLoading(false)
    })()
  }, [instance, getValue])

  return {
    value,
    changeValue,
    getValue,
    instance,
    loading,
  }
}
