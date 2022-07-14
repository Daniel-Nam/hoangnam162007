import {
	FaYoutube,
	FaPhoneAlt,
	FaFacebookMessenger,
	FaFacebook,
} from 'react-icons/fa'
import Image from 'next/image'

function Home() {
	const data = [
		{
			icon: <FaPhoneAlt size='1.4em' />,
			url: '#',
			text: '0335574737',
		},
		{
			icon: <FaYoutube size='1.4em' className='text-red-500' />,
			url: 'https://www.youtube.com/channel/UCo-k4a5V71HAB2WaiA0LkBg',
			text: 'Nam Daniel',
		},
		{
			icon: (
				<FaFacebookMessenger size='1.4em' className='text-indigo-500' />
			),
			url: 'https://m.me/hoangnam162007',
			text: 'hoangnam162007',
		},
		{
			icon: <FaFacebook size='1.4em' className='text-blue-500' />,
			url: 'https://www.facebook.com/hoangnam162007',
			text: 'hoangnam162007',
		},
	]

	return (
		<div className='flex flex-col gap-5'>
			{data.map((item, index) => (
				<a
					key={index}
					href={item.url}
					className='flex items-center justify-between p-2 border rounded-sm hover:scale-105 transition'>
					{item.icon}
					<span className='font-semibold'>{item.text}</span>
				</a>
			))}

			<a
				href='https://zalo.me/84767488632'
				className='flex items-center justify-between p-2 border rounded-sm hover:scale-105 transition'>
				<Image src='/images/zalo.png' width={30} height={30} alt='' />
				<span className='font-semibold'>Hoàng Nam - Máy tính</span>
			</a>

			<a
				href='https://zalo.me/0335574737'
				className='flex items-center justify-between p-2 border rounded-sm hover:scale-105 transition'>
				<Image src='/images/zalo.png' width={30} height={30} alt='' />
				<span className='font-semibold'>Hoàng Nam</span>
			</a>
		</div>
	)
}

export default Home
