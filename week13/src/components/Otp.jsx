import React, { forwardRef, useRef, useState } from 'react'
import Button from './Button'

const Otp = ({ number }) => {
	const [disabled, setDisabled] = useState(true)
	const inputRefs = useRef([])
  const [valArray, setValArray] = useState(Array(number).fill(''))

  const handleChange = (val, index) => {
    const updatedArray = [...valArray]
    updatedArray[index] = val
    setValArray(updatedArray)

    if(updatedArray.every((v) => v !== '')){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  }

	return (
		<>
			<div className='flex gap-2'>
				{Array(number)
					.fill(0)
					.map((x, index) => (
						<SubOtpBox
							key={index}
							value={valArray[index]}
							setInputBoxVal={setValArray}
							ref={(e) => {
								inputRefs.current[index] = e
							}}
							onDone={() => {
								if (index + 1 >= number) return
								inputRefs.current[index + 1]?.focus()
							}}
							goBack={() => {
								if (index < 0) return
                if(valArray[index] === ''){
                  inputRefs.current[index - 1]?.focus()
                }
                handleChange('', index)
							}}
              onChange={(val) => {
                handleChange(val, index)
              }}
						/>
					))}
			</div>
			<br />
			<Button disabled={disabled}>Sign Up</Button>
		</>
	)
}

const SubOtpBox = forwardRef(({ value, onDone, goBack, onChange }, ref) => {
  return (
    <div>
			<input
				value={value}
				ref={ref}
				onKeyUp={(e) => {
					if (e.key === 'Backspace') {
						goBack()
					}
				}}
				onChange={(e) => {
					const val = e.target.value
					if (/\d/.test(val)) {
						onChange(val)
						onDone()
					}
				}}
				type='text'
        maxLength={1}
				className='w-12 outline-none h-14 px-4 rounded-2xl bg-blue-light'
			/>
		</div>
	)
})

export default Otp
