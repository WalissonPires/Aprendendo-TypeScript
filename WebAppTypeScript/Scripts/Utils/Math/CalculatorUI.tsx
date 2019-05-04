import Calculator from './Calculator';
import StyleUtils, { StyleParams } from '../DOM/StyleUtils';

interface ComponentUI {

    getContext(): HTMLElement;
}

export default class CalculatorUI implements ComponentUI {

    private _calc: Calculator;
    private _expElement: HTMLElement;
    private _resultElement: HTMLElement;

    constructor() {

        this._calc = new Calculator();
    }

    private handleBtnClick(e: Event) {
       
        const userInput = $(e.target).text();

        switch (userInput) {
            case '=':
                this._calc.input = this._calc.result.toString();
                $(this._expElement).html(this._calc.input);
                $(this._resultElement).html(this._calc.result.toString());
                return;
            case 'c':
                this._calc.input = '';
                $(this._expElement).html('');
                $(this._resultElement).html('');
                return;
        }
        const especialChars = ['=', 'c'];
        if (especialChars.indexOf(userInput) > -1) {



            return;
        }

        const currentInput = this._calc.input;
        const lastChar = currentInput[currentInput.length - 1];
        const operators = ['+', '-', '*', '/'];
        let newInput: string = null;

        if (operators.indexOf(lastChar) > -1 && operators.indexOf(userInput) > -1) 
            newInput = currentInput.substring(0, currentInput.length - 2) + userInput;        
        else 
            newInput = this._calc.input + userInput;

        $(this._expElement).html(newInput);

        try {
            this._calc.input = newInput;
            $(this._resultElement).html(String(this._calc.result));
        }
        catch (e) {
            if (operators.indexOf(userInput) === -1)
                $(this._resultElement).html('ERROR: ' + e.message);
        }
    }

    getContext(): HTMLElement {
        throw new Error("Method not implemented.");
    }

    render() {

        var dom = (
            <div class="calculator-ui">
                <TituloComponent size={2}>
                    <span>Calculadora</span>
                </TituloComponent>                    
                <div class="output">
                    <p class="linha l1"></p>
                    <p class="linha l2">0</p>
                </div>
                <div class="keyboard">
                    <button class="kb-btn">7</button>
                    <button class="kb-btn">8</button>
                    <button class="kb-btn">9</button>
                    <button class="kb-btn">+</button>
                    <button class="kb-btn">4</button>
                    <button class="kb-btn">5</button>
                    <button class="kb-btn">6</button>
                    <button class="kb-btn">-</button>
                    <button class="kb-btn">1</button>
                    <button class="kb-btn">2</button>
                    <button class="kb-btn">3</button>
                    <button class="kb-btn">*</button>
                    <button class="kb-btn btn__w50">c</button>
                    <button class="kb-btn btn__w50">=</button>
                    <button class="kb-btn">/</button>                    
                </div>
            </div>
        ) as HTMLElement;

        $(dom).find('.kb-btn').each((i, x) => x.addEventListener('click', this.handleBtnClick.bind(this)));

        this._expElement = $(dom).find('.output .l1')[0];
        this._resultElement = $(dom).find('.output .l2')[0];

        return dom;
    }
}

interface TesteComponentProps {
    size?: number;
    children: any;
}

class TituloComponent {

    constructor(public props: TesteComponentProps) {        
    }    

    render() {

        let style: StyleParams = {};
        style['font-size'] = (this.props.size || 12).toString() + 'em';
        style.margin = '0';
        style.padding = '.5em 0';
        style.color = '#444';

        const strStyle = StyleUtils.objectToString(style);
       
        return (<h1 style={strStyle}>{this.props.children}</h1>);
    }
}