# Griffbot

**A lightweight library for building guided interviews in React**

Griffbot makes it easy to add a guided interview to a static React site.

## How to use.

This library exports the `Questioner` component. You will use this component to run your guided interview.

The `Questioner` component needs two arguments. (It can work with a few more, but they are optional)

First, `Questioner` needs an `initialState` object for your interview. The keys of this object track the answers to the interview's questions. For example, a two-question interview's `initialState` might look like:

```
const initialState = {
    isHungry: {
        answer: null
    },
    isAngry: {
        answer: null
    },
}
```

Second, `Questioner` needs a function, which we'll call `pickNextQuestion`. This function takes an object like `initialState`. It also takes a `dispatch` method that the `Questioner` uses to update the state object.

Then `pickQuestion` returns a React component that actually asks a question. `pickQuestion` should pass a couple of props into the question component. The first prop is the dispatch method. The second prop is the ID of the question that this question component answers. (The questionId corresponds to the key of the question in `initialState`). This might look like:

```
const pickQuestion = (currentInterviewState, dispatch) => {

    const { isHungry, isAngry } =

    if (isHungry.answer === null) {
        return <AskIfHungry dispatch={dispatch} questionId='isHungry'/>
    }
    if (isAngry.answer === null) {
        return <AskIfAngry dispatch={dispatch} questionId='isAngry'/>
    }

    // if the questions' answers are both not null, the our interview is complete, and we can end the interview.
    if (isHungry.answer === 'yes' && isAngry.answer === 'yes') {
        return <Redirect to="/you-are-hangry"/>
    }
    return <Redirect to="/you-are-not-hangry"/>
}
```

This particular `pickQuestion` function defines a guided interview that asks the two questions one after the other. But you can write `pickQuestion` to perform any kind of branching behavior.
