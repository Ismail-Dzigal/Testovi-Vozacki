export interface Question {
id: number,
type: number,
categories?: string[], 
question: string,
answers: Object[],
correctArray: number[],
image?: string,
explanation?: string
}