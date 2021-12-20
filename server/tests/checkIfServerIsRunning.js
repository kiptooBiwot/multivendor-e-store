const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

// configure chai 
chai.use(chaiHttp)
chai.should()

describe('Make sure the status is 200', () => {
    it('It should return a status of 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.an('object')
                done()
            })
    })
})