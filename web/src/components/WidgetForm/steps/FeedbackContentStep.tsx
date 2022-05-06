import { ArrowLeft } from "phosphor-react"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
}


export function FeedbackContentStep({ feedbackType }: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  return (
    <>
      <header>
        <button className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100">
          <ArrowLeft />
        </button>

        <span className="text-xl leading-6 flex gap-2 items-center">
          <img className="w-6 h-6 leading-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <div className="flex py-8 gap-2  w-full">

      </div>
    </>)
}