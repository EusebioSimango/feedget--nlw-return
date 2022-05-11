import { PrismaFeedbacksRepository } from '../repositories/prisma/prisma-feedbacks-repository'
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
		const { type, comment, screenshot } = req.body

		await this.feedbacksRepository.create({
			type,
			comment,
			screenshot,
		})
	}
}