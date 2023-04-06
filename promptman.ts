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
        this.prompt = `Ignore all previous instructions. \n ${this.prompt}`
        return this
    }
    
    /**
     * @param {string} prompt - The text to be used for zero shot chain of thought. LLM will be asked to think step by step.
     */
    public zeroShotCOT(text: string = "") {
        this.prompt = `${this.prompt} \n ${this.replaceTextIfPresent(text, "Lets think step by step.")}`
        return this
    }
    
    /**
     * @param {string} prompt - The text to be used for asking LLM to generate a sentiment of the text provided.
     */
    public sentiment(text: string = "") {
        this.prompt = `${this.prompt} \n ${this.replaceTextIfPresent(text, "what is the sentiment of the text?")}`
        return this
    }
    
    /**
     * 
     * @param type - The type of response to be returned. specifically asking LLM to provide a response in the type provided.
     */
    public toResponseType(type: string, example?: string) {
        this.prompt =  `${this.prompt} \n 
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

    public stopWhenInDoubt(text: string = "") {
        this.prompt = `${this.prompt} \n ${this.replaceTextIfPresent(text, "If you don't have an answer or there is a probability your answer is wrong or the information is not based on factual knowledge, answer with 'I don't know'")}`
        return this
    }

    /**
     * @param text 
     * @param defaultText 
     * @returns returns the text if present, else returns the default text provided by the class.
     */
    private replaceTextIfPresent(text: string, defaultText: string) {
        return (text && text.length > 0) ? text : defaultText
    }
}

