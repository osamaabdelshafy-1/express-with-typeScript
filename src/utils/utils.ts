export function add(a: number, b: number) {
	return a + b;
}


export function getErrorMessage(error:unknown): string {
	if(error instanceof Error){
		return error.message ; 
	}
	// if the error is custom error that you defined .
	if(error && typeof error === "object" && "message"  in  error){
		return String(error.message) ;
	}
	
	if(typeof error === "string" ){
		return error ; 
	}

	return "An error occurred"
}