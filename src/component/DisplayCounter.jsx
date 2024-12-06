import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayCounter() {
  const {counterval} = useSelector((store1) => store1.counter)
  return (
    <div>
      <p className="lead mb-4">Counter current value :{counterval}</p>
    </div>
  )
}
