// 1. Global
// function hra(){

// }

// 2. Object functions instead of global
// const salaryOperations = {
//     // key:value format
//     hra:function(){

//     },
//     da:function(){

//     }
// }

// 3. ES6 or ECMA6 : Object shorthand use
export const salaryOperations = {
    basicSalary:0,
    hra(){
        //salaryOperations or this needs to be mentioned inside the function as basicSalary is not a local object inside hra().
        return this.basicSalary * 0.50; 
    },
    da(){
        return this.basicSalary * 0.20; 
    },
    ta(){
        return this.basicSalary * 0.30; 
    },
    ma(){
        return this.basicSalary * 0.25; 
    },
    gs(){
        return Number(this.basicSalary) + Number(this.hra()) + Number(this.da()) + Number(this.ta()) + Number(this.ma()); 
    },
    pf(){
        return this.basicSalary * 0.05; 
    },
    tax(){
        return this.basicSalary * 0.10; 
    },
    ns(){
        return this.gs() - this.tax() - this.pf(); 
    }
}



