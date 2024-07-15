/// <reference types="cypress" />

describe("Testando a agenda de contatos", () => {

    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Deve Adicionar um novo contato", () => {
        cy.get('[type="text"]').type("Contato de Teste")
        cy.get('[type="email"]').type("teste@cypress.com")
        cy.get('[type="tel"]').type("9999-9999")

        cy.get('.adicionar').click()

        // Considerando que temos 2 contatos já salvos na lista
        cy.get(':nth-child(4) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('contain.text', 'Contato de Teste')
    })

    it("Deve Alterar um contato", () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()

        cy.get('[type="text"]').type(" Editado")
        cy.get('.alterar').click()

        // Considerando que temos 2 contatos já salvos na lista
        cy.get(':nth-child(4) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('contain.text', 'Contato de Teste Editado')
    })

    it("Deve Remover um contato", () => {
         cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()

         cy.get('h2').should('have.text', '2 contatos na agenda')
    })
})