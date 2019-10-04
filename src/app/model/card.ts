export class Card {

    category: string;
    question: string;
    answers: string[] = [];
    correctAnswer: string;
    responded = false;
    respondedIndex = -1;
    rightAnswered = false;

    constructor(json: any){
        this.category = json.category;
        this.question = json.question;
        this.answers = json.incorrect_answers;
        this.answers.push(json.correct_answer);
        this.shuffle();
        this.correctAnswer = json.correct_answer;
    }

    shuffle() {
        for (let index = this.answers.length - 1; index > 0; index--) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [this.answers[index], this.answers[randomIndex]] = [this.answers[randomIndex], this.answers[index]];
        }
    }
}