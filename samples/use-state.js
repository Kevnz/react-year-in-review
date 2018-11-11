import React, { useState } from 'react'

const TextBox = () => {
  const [value, setValue] = useState(null)
  const handleChange = e => setValue(e.target.value)
  return (
    <input
      onChange={handleChange}
      value={value}
      type="text"
    />
  )
}