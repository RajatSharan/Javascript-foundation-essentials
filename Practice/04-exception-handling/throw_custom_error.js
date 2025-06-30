class ValidationError extends Error {

    constructor(message){
        super(message)
        this.name="validationError"
    }

}

function validate(age){
            if(age <18){

                throw new Error ("Age must be 18 or above")
            }

            return age

        }


try{
    console.log(validateAge(16))
}catch(error){
    if(error instanceof ValidationError){
            console.log("Validation Error:", error.message);
    }
else{
    console.log("Some other error:", error.message);
}

}
