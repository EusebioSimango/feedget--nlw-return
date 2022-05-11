import { PrismaFeedbackRepository } from '../repositories/prisma/prisma-feedback-repository'
import { FeedbacksRepository } from '../repositories/feedbacks-repository'
import { MailAdapter } from '../adapters/mail-adapter'

interface SubmitFeedbackUseCaseRequest {
	type: string;
	comment: string;
	screenshot?: string;
}

export class SubmitFeedbackUseCase {
	constructor(
		private feedbacksRepository: FeedbacksRepository,
		private mailAdapter: MailAdapter,

	) {}
	async execute(request: SubmitFeedbackUseCaseRequest) {
		const { type, comment, screenshot } = request

		await this.feedbacksRepository.create({
			type,
			comment,
			screenshot,
		})

		await this.mailAdapter.sendMail({
			subject:	'Novo Feedbck',
			body: [
				`<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
				`<p>Tipo dtransporto feedback: ${type}</p>`,
				`<p>Comentário: ${comment}</p>`,
				`</div>`,
			].join('\n')
		})
	}
}