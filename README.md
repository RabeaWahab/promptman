<p align="center">
    <img src="promptman.png">
</p>

This mini package provides helper methods to interact with a language model like ChatGPT, to generate some repititive prompt engineering techniques. the why behind it, is I got tired of writing the same context around my needed prompt. Extend it if you like it.

[https://www.npmjs.com/package/promptman](https://www.npmjs.com/package/promptman?activeTab=readme)

```bash
npm install promptman
```

The `Promptman` class has the following public methods:

1. `resetInstructions()` - resets the prompt attribute.
2. `zeroShotCOT()` - sets the prompt attribute for generating a response for a zero-shot chain of thought.
3. `sentiment()` - sets the prompt attribute for generating a sentiment analysis of text.
4. `stopWhenInDoubt` - makes sure GPT would only answer when its facutal knowlledge

4. `toResponseType()` - sets the type of response to be returned.
5. `toJson()` - sets the type of response to JSON format.

6. `text()` - returns the text after executing any method.

The `Promptman` class is initialized with a `prompt` parameter and is used to interact with GPT or any LLM simply. The class methods can be called in a step-by-step manner to generate text for various purposes like sentiment analysis and zero-shot chain of thought.

Example 1:

```javascript
import { Promptman } from "promptman"
const text = new Promptman("what are the steps to make a cup of coffee?")
                    .resetInstructions()
                    .zeroShotCOT()
                    .toJson("{ steps: [number: 1, text: 'boil water']}")
                    .text()
```
 Text generated
```javascript
Ignore all previous instructions.
what are the steps to make a cup of coffee?
Lets think step by step.
return the response in the JSON,
and make sure you don't return anything else
but JSON , example: { steps: [number: 1, text: 'boil water']}.


```
Result
```json
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

Example 2 - Stop when in doubt:
```javascript
import { Promptman } from "promptman"
const text = new Promptman("what would be the best way to solve for global warming?")
                    .resetInstructions()
                    .zeroShotCOT()
                    .stopWhenInDoubt()
                    .toJson()
                    .text()
```
 Text generated
```javascript
Ignore all previous instructions.
what would be the best way to solve for global warming?
Lets think step by step.
If you don't have an answer or there is a probability your answer is wrong or the information is not based on factual knowledge, answer with 'I don't know'
return the response in the JSON,
and make sure you don't return anything else
but JSON .
```
Result
```json
{
 "response": "I don't know"
}
```

Note: This README file was generated based on the latest version of the script available at the time of writing.