import { useField } from 'formik'
import React from 'react'

function Input({ name, label, id, className, ...rest }) {
  const field = useField(name)
  const [data, meta] = field
  const { value, onChange, onBlur } = data
  const { error, touched } = meta

  let borderClass = 'border-amber-500 '

  if (error && touched) {
    borderClass = 'border-red-500 '
  }

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor={id}>{label}</label>

        <input
          className={
            'self-center h-8 border-2 rounded-md before: marker:' +
            borderClass +
            className
          }
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          {...rest}
        ></input>
      </div>
      {touched && error && <div className="text-red-500">{error}</div>}
    </div>
  )
}
export default Input
