import React from 'react'
interface propsInput {
  name: string,
  label: string,
  pHolder: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({name, label, pHolder, value, onChange} : propsInput) => {
  return (
    <div className="field">
      <label className="label"> {label} </label>
      <div className="control">
        <input 
        name={name}
        className="input" 
        type="text" 
        placeholder={`${pHolder}`}
        value={value}
        onChange={onChange}/>
      </div>
    </div>
  )
}

export default Input