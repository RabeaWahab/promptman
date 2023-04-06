export class Promptman {
    public prompt: string
    public defaults: {
        zeroShotCOT: string
        sentiment: string
        toResponseType: string
        stopWhenInDoubt: string
        resetInstructions: string
    }

    constructor(prompt: string) {
        this.prompt = prompt
        this.defaults = {
            resetInstructions: "Ignore all previous instructions.",
            zeroShotCOT: "Lets think step by step.",
            sentiment: "what is the sentiment of the text?",
            toResponseType: "return the response in the {type}, and make sure you don't return anything else but {type}.",
            stopWhenInDoubt: "If you don't have an answer or there is a probability your answer is wrong or the information is not based on factual knowledge, answer with 'I don't know'.",
        }
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
        this.prompt = `${this.defaults.resetInstructions} \n ${this.prompt}`
        return this
    }
    
    /**
     * @param {string} text - The text to be used for zero shot chain of thought.
     */
    public zeroShotCOT(text: string = "") {
        this.prompt = `${this.prompt} \n ${this.replaceTextIfPresent(text, this.defaults.zeroShotCOT)}`
        return this
    }
    
    /**
     * @param {string} text - The text to be used for asking LLM to generate a sentiment.
     */
    public sentiment(text: string = "") {
        this.prompt = `${this.prompt} \n ${this.replaceTextIfPresent(text, this.defaults.sentiment)}`
        return this
    }
    
    /**
     * @param type - The type of response to be returned. specifically asking LLM to provide a response in the type provided.
     */
    public toResponseType(type: string, example?: string) {
        const searchRegExp = /{type}/gi;
        const text = this.defaults.toResponseType.replace(searchRegExp, type.toUpperCase())
        this.prompt =  `${this.prompt} \n ${text} ${this.provideExample(example)}`
        return this
    }
    
    /**
     * @param {string} example - The example to be used for asking LLM to generate a response in the type provided.
     */
    public toJson(example?: string) {
        this.toResponseType("json", example)
        return this
    }

    /**
     * 
     * @param text - The text to be used for asking LLM to generate a response in the type provided.
     */
    public stopWhenInDoubt(text: string = "") {
        this.prompt = `${this.prompt} \n ${this.replaceTextIfPresent(text, this.defaults.stopWhenInDoubt)}`
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

    /**
     * @param example 
     * @returns returns the example if present, else returns an empty string.
     */
    private provideExample(example: string = "") {
        return (example) ? ", example: " + example : ""
    }
}

