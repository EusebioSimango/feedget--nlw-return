export interface sendMailData {
	subject: string;
	body: string;
}

export interface MailSdapter {
	sendMail: (data: sendMailData) => void;
}