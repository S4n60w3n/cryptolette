import { NextPage } from 'next'
import React from 'react'

import { Button } from '../components/Button'
import { useSimpleStorageContract } from '../data/useSimpleStorageContract'

type Props = {}

const Home: NextPage<Props> = ({}) => {
  const { loading, value, changeValue } = useSimpleStorageContract()

  if (loading) {
    return <>Loading...</>
  }

  return (
    <>
      <div>Stored value {value}</div>
      <Button
        onClick={() => {
          changeValue(Number(value || 0) + 1)
        }}
      >
        Change
      </Button>
    </>
  )
}
Home.displayName = 'Home'
export default Home
