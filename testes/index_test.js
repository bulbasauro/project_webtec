const {I} = inject();
const baseUrl = 'file:///C:/Users/ana_p/Ana_Projetos/project_webtec';

Feature('default');

Scenario('test something', (I) => {
    I.amOnPage(`${baseUrl}/index.html`);
    I.see('Teste Imagem com HTML');
    I.saveScreenshot('imagem.png');
});
