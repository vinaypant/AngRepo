import { addition } from "./operation1";

describe("====Operation1========", () => {

    let num1: number=10, num2: number=11;

    /*beforeEach(() => {
        num1 = 10;
        num2 = 11;
    })
    afterEach(() => {
        num1 = 0;
        num2 = 0;
    })

    it("===addition test 1=======", () => {
        expect(addition(num1, num2)).toEqual(21);
    })

    it("===addition test 2=======", () => {
        expect(addition(num1, num2)).toEqual(1);
    })*/

    it("===Array test===",()=>{
  
      //let ar=[1,2,3];
      let ob1=[{  Id:1,Name:'vinay'},{Id:2,Name:'kiran' }];
      let ob2=[{  Id:2,Name:'ajeet'},{Id:2,Name:'kiran' }];

       expect(ob1).toEqual(ob2);

    })

    

})