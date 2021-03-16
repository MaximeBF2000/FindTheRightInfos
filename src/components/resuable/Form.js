import React from "react"

export default function Form({ title, onSubmit, className, width, children }) {
  return (
    <form 
      onSubmit={onSubmit}
      className={`form ${className}`}
      style={{ width: width && width }}
    >
      {title && <div className="form__title">{title}</div> }
      { children }
    </form>
  )
}

Form.Input = ({ id, type, label, value, setValue, className }) => {
  return (
    <div className={`form__inputField ${className?.container}`}>
      {label && (
        <label htmlFor={id} className={`form__inputField--label ${className?.label}`}>{label}</label>
      )}
      <input
        id={id}
        type={type || "text"}
        value={value}
        onChange={e => setValue(e.target.value)}
        className={`form__inputField--input ${className?.input}`}
      />
    </div>
  )
}

Form.SubmitButton = ({ className, children }) => {
  return (
    <button type="submit" className={`form__submitBtn ${className}`}>{children}</button>
  )
}

Form.ErrorField = ({ children }) => {
  return (
    <>{children && <div className="form__error">{children}</div>}</>
  )
}