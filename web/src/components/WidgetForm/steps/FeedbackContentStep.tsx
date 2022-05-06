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
        <span className="text-xl leading-6 flex">
          <img className="flex-1 w-5 h-5 leading-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <div className="flex py-8 gap-2  w-full">

      </div>
    </>)
}