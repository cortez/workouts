import React, { ChangeEvent, useState } from "react"

interface Props {
  placeholder: string
}

const InputBox: React.FC<Props> = ({ placeholder }) => {
  const [input, setInput] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <input
      value={input}
      onChange={handleInputChange}
      className="h-11 p-3 transition-all resize-none bg-[var(--background)] placeholder-[var(--placeholder)] w-full rounded-xl border-2 hover:border-[var(--gray-hover)] border-[var(--gray)] focus:outline-black"
      placeholder={placeholder}
    />
  )
}

export default InputBox
