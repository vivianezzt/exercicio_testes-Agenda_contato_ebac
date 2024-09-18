describe('Testes de funcionalidades da Agenda de Contatos', () => { 
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Teste para a funcionalidade adicionar um contato', () => {
    cy.get('input[placeholder="Nome"]').type('Viviane');
    cy.get('input[placeholder="E-mail"]').type('viviane.teste@email.com');
    cy.get('input[placeholder="Telefone"]').type('21999990000');
    cy.get('button.adicionar').click();
    cy.contains('Viviane').should('exist');
    cy.contains('viviane.teste@email.com').should('exist');
    cy.wait(2000);
  });

  it('teste para a funcionalidade editar um contato', () => {

    cy.get('button[class*="adicionar"]', { timeout: 10000 }).should('be.visible').first().click();

    cy.get('input[placeholder="Nome"]').clear().type('Rachel');
    cy.get('input[placeholder="E-mail"]').clear().type('rachel.editado@email.com');
    cy.get('input[placeholder="Telefone"]').clear().type('3299990000');
    cy.get('button.adicionar').click();
    cy.contains('Rachel').should('exist');
    cy.contains('rachel.editado@email.com').should('exist');
    cy.wait(2000);
  });

  it('teste para a funcionalidade remover um contato', () => {
    cy.get('.delete').first().click();
    cy.wait(2000);
  });
});
