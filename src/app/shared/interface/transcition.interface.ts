
export type transctionType = 'expense' | 'income'

export interface ITransction{
    id: string;
    type : transctionType;
    readonly transictionDate : Date;
    amount: number;
    catigory?: string
    paymentMethod?: string
    comment: string
}