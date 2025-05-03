import './App.css'
import Input from './components/Input'
import Otp from './components/Otp'
import Sidebar1 from './components/answers/Sidebar1'
import Sidebar2 from './components/answers/Sidebar2'

function App() {
	return (
		<>
    <div className='bg-blue-dark h-screen flex flex-col justify-center items-center text-white gap-1'>
			{/* <h3><span className='text-green-light'>Webinar</span>.gg</h3>
			<h2 className='text-xl font-medium'>Verify Your Age</h2>
			<div className='flex flex-col items-center gap-4'>
				<h4 className='font-light'>Please confirm your birth year. This data will not be stored.</h4>
				<Input type="text" placeholder='Your Birth Year'/>
				<Otp number={6}/>
			</div> */}

			<Sidebar1/>
			{/* <Sidebar2 /> */}
			<div>
				<button onClick={() => {
					
					document.querySelector("html").classList.toggle('dark')
				}}>Toggle theme</button>
			</div>
    </div>
		</>
	)
}

export default App
