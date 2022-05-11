import { PrismaFeedbackRepository } from '../repositories/prisma/prisma-feedback-repository'
import { FeedbacksRepository } from '../repositories/feedbacks-repository'

interface SubmitFeedbackUseCaseRequest {
	type: string;
	comment: string;
	screenshot?: string;
}

export class SubmitFeedbackUseCase {
	constructor(
		private feedbacksRepository: FeedbacksRepository
	) {}
	async execute(request: SubmitFeedbackUseCaseRequest) {
		const { type, comment, screenshot } = request

		await this.feedbacksRepository.create({
			type,
			comment,
			screenshot,
		})
	}
}