const {I} = inject();
//const baseUrl = 'file:///C:/Users/ana_p/Ana_Projetos/project_webtec';
const baseUrl = 'file:///D:/GitHub/project_webtec/src/';

Feature('default');

Scenario('test something', (I) => {
    I.amOnPage(`${baseUrl}/index.html`);
    I.see('Teste Imagem com HTML');
    I.saveScreenshot('imagem.png');
});
