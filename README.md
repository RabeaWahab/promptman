This script defines a class called `Promptman` which provides methods to interact with a language model (LLM) to generate some repititive prompt engineering techniques. 

The `Promptman` class has the following public methods:

1. `text()` - returns the text after executing any method.
2. `resetInstructions()` - resets the prompt attribute.
3. `zeroShotCOT()` - sets the prompt attribute for generating a response for a zero-shot chain of thought.
4. `sentiment()` - sets the prompt attribute for generating a sentiment analysis of text.
5. `toResponseType()` - sets the type of response to be returned.
6. `toJson()` - sets the type of response to JSON format.

The `Promptman` class is initialized with a `prompt` parameter and is used to interact with GPT or any LLM simply. The class methods can be called in a step-by-step manner to generate text for various purposes like sentiment analysis and zero-shot chain of thought.

Example with ChatGPT:
```
const text = new Promptman("what are the steps to make a cup of coffee?")
                    .resetInstructions()
                    .zeroShotCOT()
                    .toJson("{ steps: [number: 1, text: 'boil water']}")
                    .text()
```
 Text generated
```
Ignore all previous instructions.
what are the steps to make a cup of coffee?
Lets think step by step.
return the response in the JSON,
and make sure you don't return anything else
but JSON , example: { steps: [number: 1, text: 'boil water']}.


```
Result
```
{
  "steps": [
    {
      "number": 1,
      "text": "Fill a kettle or pot with fresh water and bring it to a boil."
    },
    {
      "number": 2,
      "text": "Grind coffee beans to a medium-fine consistency."
    },
    {
      "number": 3,
      "text": "Add ground coffee to a coffee filter or french press."
    },
    {
      "number": 4,
      "text": "Pour hot water over the coffee grounds and let it steep for 4-5 minutes."
    },
    {
      "number": 5,
      "text": "Slowly press french press plunger down or remove filter from coffee maker."
    },
    {
      "number": 6,
      "text": "Pour coffee into a mug and add milk, sugar, or other desired additions."
    },
    {
      "number": 7,
      "text": "Enjoy your delicious cup of coffee!"
    }
  ]
}
```

Note: This README file was generated based on the latest version of the script available at the time of writing.