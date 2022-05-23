import { should } from "chai";

describe('Cy request examples', () => {
//   it('Get Example', () => {
//       cy.request('https://jsonplaceholder.cypress.io/comments').should(
//           (response) => {
//               expect(response.status).to.eq(200)
//               expect(response.body)
//                   .to.have.property('length')
//                   .and.be.eq(500)
//               expect(response).to.have.property('headers')
//               expect(response).to.have.property('duration')
//           },
//       )
//   })

  it('Getmod Example', () => {
    const param ='postId=61'
    cy.request('https://jsonplaceholder.cypress.io/comments?'+param)

    })


  it('Put Example2', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.cypress.io/comments', 
      body: {
      postId:'63', id:'501', name:'I_TestName', email:'I_test@email.com', body:'I_test_body'
    }
  } 
    // )     .should('contain', {
    //        postId: 63,
    //       id: 501,
    //    })
    
    ) . should ((response)=> {
      expect (response.status).to.eq(201)
      expect (response.body).to.contain(
         {         postId: '63',
                 id: '501'})
    }
    )

})
  
});