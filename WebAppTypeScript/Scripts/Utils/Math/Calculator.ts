
export default class Calculator {

    private _input: string;
    private _result:  number;

    constructor(initialValue: number = 0) {

        this._result = initialValue;
        this._input = '';
    }

    public set input(input: string) {

        this._input = input;        
        this._result = eval(input);   
    }

    public get input() : string {
        return this._input;
    }

    public get result() : number {

        return this._result;
    }    
}