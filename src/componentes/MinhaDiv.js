/*
PascalCase
camelCase
kebab-case
_snake_case
const API_URL
*/
/*
export class MinhaDiv {
    constructor(nome) 
        this.nome = nome 
    }
}*/
export default class MinhaDiv extends HTMLElement {
    constructor () {
        super();

        //this.profileName;

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
       
            <p>Minha Div  FEIA</p>
            Minha-div: ${this.profileName}

       `;
    }

    get profileName() {
        return this.getAttribute('profile');
    }
}
//export default customElements.define('minha-div', MinhaDiv);
customElements.define('minha-div', MinhaDiv);

