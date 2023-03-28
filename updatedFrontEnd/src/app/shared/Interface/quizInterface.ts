
export interface Question {
  description: string;
  alternatives: {
    text: string;
    isCorrect: boolean;
  }[];
  softDelete?: number;
}