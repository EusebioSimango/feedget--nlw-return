import { prisma } from '../../prisma'
import { FeedbackRepository, FeedbackCreateData } from '../feedbacks-repository'

export class PrismaFeedbackRepositories implements FeedbackRepository {
	async create({ type, comment, screenshot }: FeedbackCreateData) {
		await prisma.feedback.create({
		data: {
			type,
			comment,
			screenshot
		} 
	})
	}
}