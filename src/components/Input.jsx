import { useState } from 'react'
import closeIcon from '../assets/icons/close.svg'

export default function Input({ icon, defaultValue = '', onChange, ...props }) {
  const [value, setValue] = useState(defaultValue)
  const [isFocused, setIsFocused] = useState(false)

  const showClear = isFocused && value

  const handleChange = (event) => {
    setValue(event.target.value)
    onChange?.(event)
  }

  return (
    <div className="flex w-full items-center gap-[8px] border-b border-control-secondary bg-background-base px-[8px] py-[12px] transition-colors duration-300 hover:bg-background-secondary focus-within:bg-background-secondary">
      <span className="flex size-[16px] shrink-0 items-center justify-center">
        <img src={icon} alt="" className="size-full" />
      </span>
      <input
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="min-w-0 flex-1 bg-transparent text-sm text-text-primary outline-none placeholder:text-text-disabled"
        {...props}
      />
      {showClear && (
        <button
          type="button"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setValue('')}
          aria-label="Очистить поле"
          className="flex size-[16px] shrink-0 items-center justify-center transition-opacity hover:opacity-60"
        >
          <img src={closeIcon} alt="" className="size-full" />
        </button>
      )}
    </div>
  )
}
