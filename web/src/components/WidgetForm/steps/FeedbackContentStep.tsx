import { ArrowLeft } from "phosphor-react"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}


export function FeedbackContentStep({ 
  feedbackType,
  onFeedbackRestartRequested
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  return (
    <>
      <header>
        <button 
          type="button"
          onClick={onFeedbackRestartRequested} 
          className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100">
          <ArrowLeft weight="bold" className="h-4 w-4"/>
        </button>

        <span className="text-xl leading-6 flex gap-2 items-center">
          <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <form className="my-4  w-full">
        <textarea 
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 outline-none focus:ring-2 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
      </form>
    </>)
}