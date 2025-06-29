function divide(a,b){
    if(b==0){
        throw new Error("Cannot divide by zero")
    }
    return a/b
}

class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name="validationError"
    }
}

