export class Promptman {
    public prompt: string

    constructor(prompt: string) {
        this.prompt = prompt
    }

    /**
     * @param {string} prompt - TEXT method to set prompt attribute.
     */
    public text() {
        return this.prompt
    }

    /**
     * @param {string} prompt - The text to be used for resetting the prompt, to make sure LLM is not biased by previous instructions.
     */
    public resetInstructions() {
        this.prompt = `Ignore all previous instructions. \n\n ${this.prompt}`
        return this
    }
    
    /**
     * @param {string} prompt - The text to be used for zero shot chain of thought. LLM will be asked to think step by step.
     */
    public zeroShotCOT() {
        this.prompt = `${this.prompt} \n\n Lets think step by step.`
        return this
    }
    
    /**
     * @param {string} prompt - The text to be used for asking LLM to generate a sentiment of the text provided.
     */
    public sentiment() {
        this.prompt = `${this.prompt} \n\n what is the sentiment of the text?`
        return this
    }
    
    /**
     * 
     * @param type - The type of response to be returned. specifically asking LLM to provide a response in the type provided.
     */
    public toResponseType(type: string, example?: string) {
        this.prompt =  `${this.prompt} \n\n 
                        return the response in the ${type.toUpperCase()}, 
                        and make sure you don't return anything else 
                        but ${type.toUpperCase()} ${(example) ? ", example: " + example : ""}.`
        return this
    }
    
    /**
     * @param {string} prompt - The text to be used for asking LLM to generate a response in JSON format.
     */
    public toJson(example?: string) {
        this.toResponseType("json", example)
        return this
    }    
}

