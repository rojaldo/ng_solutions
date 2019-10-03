export class Card {

    category: string;
    question: string;
    answers: string[] = [];
    correctAnswer: string;
    responded = false;

    constructor(json: any){
        this.category = json.category;
        this.question = json.question;
        this.answers = json.incorrect_answers;
        this.answers.push(json.correct_answer);
        this.correctAnswer = json.correct_answer;
    }
}