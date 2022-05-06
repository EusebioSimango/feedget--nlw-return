import { useState } from 'react'

import { CloseButton } from '../CloseButton'
import { FeedbackTypeStep } from './steps/FeedbackTypeStep'
import bugImageUrl from './../../assets/bug.png'
import ideaImageUrl from './../../assets/idea.png'
import thoughtImageUrl from './../../assets/thought.png'
import { FeedbackContentStep } from './steps/FeedbackContentStep'

export const feedbackTypes = {
	BUG: {
		title: 'Problema',
		image: {
			source: bugImageUrl,
			alt: 'Imagem de um insecto',
		}
	},
	IDEA: {
		title: 'Ideia',
		image: {
			source: ideaImageUrl,
			alt: 'Imagem de uma lâmpada',
		}
	},
	OTHER: {
		title: 'Outros',
		image: {
			source: thoughtImageUrl,
			alt: 'Imagem de um balão de pensamento'
		}
	}
}

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
	
	function handlerRestartFeedback() {
		setFeedbackType(null)
	}

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
		

			{!feedbackType ? (
				<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />)
				: (
					<FeedbackContentStep 
					feedbackType={feedbackType}
					onFeedbackRestartRequested={handlerRestartFeedback}/>
				)}

			<footer className="text-xs text-neutral-400">
				Feito com (: pela <a className="underline underline-offset-2" href="/">Rocketseat</a>
			</footer>
		</div>
	)
}