/* eslint-disable no-undef */
const enhancer = require('./enhancer.js');
// test away!
describe('enhancers', () => {
    
    describe('repair', () => {
      it('runs without crashing', () => {
        enhancer.repair({
            name:'a name',
            durability:20,
            enhancement:50
          
          })
      })
      it('returns object with durability:100', () => {
        const expectedOutput = {
            name:'a name',
            durability:100,
            enhancement:50
          }
        expect(enhancer.repair({
            name:'a name',
            durability:20,
            enhancement:50
          
          }))
          .toEqual(expectedOutput)
      })
    })

    describe('succeed', () => {
        it('runs without crashing', () => {
            enhancer.succeed({
                name:'a name',
                durability:20,
                enhancement:10 
              })
          })
          it('runs without crashing', () => {
            enhancer.succeed({
                name:'a name',
                durability:20,
                enhancement:21 
              })
          })
     
          it('increments enhancement by 1 conditionally', () => {
            const expectedOutput2 = {
                name:'a name',
                durability:20,
                enhancement:11
              }
              const expectedOutput3 = {
                name:'a name',
                durability:20,
                enhancement:20
              }
              expect(enhancer.succeed({
                name:'a name',
                durability:20,
                enhancement:10
              }))
              .toEqual(expectedOutput2)

              expect(enhancer.succeed({
                name:'a name',
                durability:20,
                enhancement:20
              }))
              .toEqual(expectedOutput3)

          })


    })

    // describe('fail', () => {


    // })


})