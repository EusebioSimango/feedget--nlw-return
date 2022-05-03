import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'

export function Widget() {

	const [isWidgetOpen, setIsWidgetOpen] = useState(false)

	const toggleWidgetVisibilty = () => {
		setIsWidgetOpen(!isWidgetOpen)
	}

	return (
		<div className="absolute bottom-5 right-5">
			{isWidgetOpen && <p>Hello, World!</p>}

			<button onClick={toggleWidgetVisibilty} className="bg-brand-500 flex items-center rounded-full px-3 h-12 text-white group"> 
				<ChatTeardropDots className="w-6 h-6" /> 

				<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
					<span className="pl-2"></span>
					Feedback
				</span>
			</button>
		</div>
		)
}