import { PrismaFeedbacksRepository } from '../repositories/prisma/prisma-feedbacks-repository'

interface SubmitFeedbackUseCaseRequest {
	type: string;
	comment: string;
	screenshot?: string;
}

export class SubmitFeedbackUseCase {
	async execute(request: SubmitFeedbackUseCaseRequest) {
		const { type, comment, screenshot } = req.body

		const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

		await prismaFeedbacksRepository.create({
			type,
			comment,
			screenshot,
		})
	}
}