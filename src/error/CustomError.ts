
// <C extends string>  type parameter and the class is generic .
// Using a generic like this is helpful 
// when you want to tag errors with a specific code
// that TypeScript can check at compile-time.
class CustomError<C extends string> extends Error { 


    message: string ; 
    statusCode: number ; 
    code?: C ;
    
    // destruct the object that will be passed to the class constructor that must match the object structure. 
    constructor({
          message ,
         statusCode ,
         code
        }: {
          message: string ;
          statusCode: number ;
          code?: C ;
        }){
            super() ; 
            this.message = message ; 
            this.statusCode = statusCode ; 
            this.code  = code ; 
    }
}


export default CustomError ; 