describe('My tests',()=>{
  beforeEach(()=>cy.visit('http://localhost:3000'));

  // const nameInput = cy.get('input[name="username"]');
  // const emailInput = cy.get('input[name="email"]');
  // const pwInput = cy.get('input[name="password"]');
  // const termsInput = cy.get('input[type="checkbox"]');
  // const submitBtn = cy.get('button');
  
  it('types into the name field and checks for disabled button',()=>{
    cy.get('input[name="username"]').type('SampleName').should('have.value','SampleName');
    cy.get('button').should('be.disabled');
  });

  it('types into the email field and checks for disabled button',()=>{
    cy.get('input[name="email"]').type('sam@ple.com').should('have.value','sam@ple.com');
    cy.get('button').should('be.disabled');
  })

  it('types into the password field and checks for disabled button',()=>{
    cy.get('input[name="password"]').type('testing').should('have.value','testing');
    cy.get('button').should('be.disabled');
  })

  it('checks the terms checkbox and disabled button',()=>{
    cy.get('input[type="checkbox"]').click().should('be.checked').click().should('not.be.checked');
    cy.get('button').should('be.disabled');
  })

  it("submits the form's data and checks for modal",()=>{
    cy.get('.modal').should('not.exist')
    cy.get('input[name="username"]').type('SampleName');
    cy.get('input[name="email"]').type('sam@ple.com');
    cy.get('input[name="password"]').type('testing');
    cy.get('input[type="checkbox"]').click();
    cy.get('button').click();
    cy.get('.modal').should('exist');
    cy.get('button').click();
    cy.contains('Email:').should('exist');
  })

  it("displays validation error messages appropriately",()=>{
    cy.get('input[name="username"]').type('Sam');
    cy.contains('Name:').next().should('have.text','Name must be at least 4 characters.');
    cy.get('input[name="username"]').clear();

    cy.get('input[name="email"]').type('sam');
    cy.contains('Email:').next().should('have.text','Must be a valid email address.');
    cy.get('input[name="email"]').clear();

    cy.get('input[name="password"]').type('test');
    cy.contains('Password:').next().should('have.text','Password must be at least 6 characters.');
    cy.get('input[name="password"]').clear();

    cy.get('input[type="checkbox"]').click().click();
    cy.contains('I agree to the').next().should('have.text','You must accept the terms and conditions.')
  })

})