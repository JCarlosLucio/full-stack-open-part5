describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset');
    const user = {
      username: 'yoshi',
      name: 'Yoshi Tester',
      password: '1234',
    };
    cy.request('POST', 'http://localhost:3003/api/users', user);
    cy.visit('http://localhost:3000');
  });

  it('Login form is shown', function () {
    cy.contains('log in to application');
    cy.contains('username');
    cy.get('#username');
    cy.contains('password');
    cy.get('#password');
    cy.contains('login');
  });

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.get('#username').type('yoshi');
      cy.get('#password').type('1234');
      cy.get('#login-button').click();
      cy.get('.notification.success')
        .should('contain', 'Welcome back, Yoshi Tester!')
        .and('have.css', 'color', 'rgb(0, 128, 0)');
      cy.contains('Yoshi Tester logged in');
    });

    it('fails with wrong credentials', function () {
      cy.get('#username').type('yoshi');
      cy.get('#password').type('wrong');
      cy.get('#login-button').click();
      cy.get('.notification.error')
        .should('contain', 'invalid username or password')
        .and('have.css', 'color', 'rgb(255, 0, 0)');
    });
  });
});
