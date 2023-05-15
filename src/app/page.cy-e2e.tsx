describe('App', () => {
  beforeEach(() => cy.visit('/'));

  it('should render successfully', () => {
    cy.get('span').contains('CENTRAL');
    cy.get('span').contains('nick gabe');
    cy.get('input').should('have.attr', 'placeholder', 'Pesquise um tema');
    cy.url().should('be.equal', 'http://localhost:3000/');
  });

  describe('Posts', () => {
    it('should have a redirect link', () => {
      cy.get('a').should('have.attr', 'href');
    });
  });

  describe('Search', () => {
    describe('should be able to search for a post', () => {
      beforeEach(() => cy.visit('/'));

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

    describe('should copy link successfully', async () => {
      beforeEach(() => cy.visit('/'));

      it('with search', () => {
        cy.get('input').type('opa dev');

        cy.get('span').contains('opa dev');
        cy.get('button[data-test-id="copy-link"]').click();

        cy.get('span').contains('Link copiado para a área de transferência!');
        cy.clipboardContains('http://localhost:3000/?search=opa+dev');
      });

      it('with search and page', () => {
        cy.get('input').type('op');

        cy.get('.ant-pagination-next').click();
        cy.get('span').contains('op');

        cy.get('button[data-test-id="copy-link"]').click();
        cy.get('span').contains('Link copiado para a área de transferência!');
        cy.clipboardContains('http://localhost:3000/?page=2&search=op');
      });
    });
  });

  it('should be redirected when github corner is clicked', () => {
    cy.get('a').click({ force: true });
    cy.url().should(
      'be.equal',
      'https://github.com/nick-gabe/central-nickgabe'
    );
  });
});
