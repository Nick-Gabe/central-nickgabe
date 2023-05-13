describe('App', () => {
  beforeEach(() => cy.visit('/'));

  it('should render successfully', () => {
    cy.get('span').contains('CENTRAL');
    cy.get('span').contains('nick gabe');
    cy.get('input').should('have.attr', 'placeholder', 'Pesquise um tema');
  });

  describe('Posts', () => {
    it('should have a redirect link', () => {
      cy.get('a').should('have.attr', 'href');
    });
  });

  describe('Search', () => {
    describe('should be able to search for a post', () => {
      it('using regex', () => {
        cy.get('input').type('\\?$');
        cy.get('span').contains('?');
        cy.get('a').should('have.attr', 'href');
      });

      it('using literal string', () => {
        cy.get('input').type('Tu usa git?');
        cy.get('span').contains(/Tu usa git?/i);
        cy.get('a').should('have.attr', 'href');
      });
    });

    it('should copy link successfully', async () => {
      cy.get('input').type('Tu usa git?');

      cy.get('button[data-test-id="copy-link"]').click();
      cy.get('span').contains('Link copiado para a área de transferência!');
    });
  });
});
