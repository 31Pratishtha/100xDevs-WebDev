import { createContext, useContext, useState } from 'react'

const BulbContext = createContext()

const BulbProvider = ({ children }) => {
	const [bulbOn, setBulbOn] = useState(true)

	return (
		<BulbContext.Provider
			value={{
				bulbOn: bulbOn,
				setBulbOn: setBulbOn,
			}}>
			{children}
		</BulbContext.Provider>
	)
}

function App() {
	return (
		<>
      <BulbProvider>
			  <Light />
      </BulbProvider>
		</>
	)
}

const Light = () => {
	return (
		<div>
			<LightBulb />
			<LightSwitch />
		</div>
	)
}
function LightBulb() {
	const { bulbOn } = useContext(bulbContext)
	return <div>{bulbOn ? 'Bulb On' : 'Bulb Off'}</div>
}

const LightSwitch = () => {
	const { bulbOn, setBulbOn } = useContext(bulbContext)
	const toggle = () => {
		setBulbOn((prev) => !prev)
	}

	return <button onClick={toggle}>Toggle bulb</button>
}

export default App
