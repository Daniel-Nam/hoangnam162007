import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

function Home() {
	const [time, setTime] = useState()
	const [text, setText] = useState('')
	const [src, setSrc] = useState('/images/morning.webp')
	const [isDark, setIsDark] = useState(false)

	const updateTime = () => {
		const date = new Date()
		const hours = date.getHours()
		const time = date.toLocaleTimeString()
		const dateString = date.toLocaleDateString()
		const timeString = `${dateString} ${time}`
		const isMorning = hours >= 6 && hours < 12
		const isAfternoon = hours >= 12 && hours < 18
		const isEvening = hours >= 18 && hours < 24

		if (isMorning) {
			setText('Buổi sáng tốt lành')
			setSrc('/images/morning.webp')
		} else if (isAfternoon) {
			setText('Buổi chiều tốt lành')
			setSrc('/images/afternoon.webp')
			setIsDark(true)
		} else if (isEvening) {
			setText('Buổi tối tốt lành')
			setSrc('/images/night.jpg')
			setIsDark(true)
		} else {
			setText('Khò khò khò zzzzzz...')
			setSrc('/images/sleep.jpg')
			setIsDark(true)
		}

		setTimeout(() => {
			setTime(timeString)
			updateTime()
		}, 1000)
	}

	useEffect(() => {
		updateTime()
	}, [])

	return (
		<div>
			<div
				className='h-80 bg-cover bg-bottom bg-no-repeat rounded-md'
				style={{
					backgroundImage: `url(${src})`,
				}}></div>
			<div className='text-center mt-3'>
				<div className='text-xl font-semibold'>Bây giờ là: {time}</div>
				<div className='flex items-center justify-center gap-1 text-lg font-semibold'>
					<span>{text}</span>
					{isDark ? <FaMoon /> : <FaSun />}
				</div>
			</div>
		</div>
	)
}

export default Home
