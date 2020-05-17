# Griffbot

**A lightweight library for building guided interviews in React**

Griffbot asks lots of questions.

This makes it easy to add a guided interview to a static React site.

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

Then `pickNextQuestion` returns a React component that actually asks a question. `pickNextQuestion` should pass a couple of props into the question component. The first prop is the dispatch method. The second prop is the ID of the question that this question component answers. (The questionId corresponds to the key of the question in `initialState`). This might look like:

```
const pickNextQuestion = (currentInterviewState, dispatch) => {

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

This particular `pickNextQuestion` function defines a guided interview that asks the two questions one after the other, and then redirects the user to different results, depending on the final state of the interview. But you can write `pickNextQuestion` to perform any kind of branching behavior.

This example interview could be added to another React component like this:

```
export default MyInterview = (props) => {
    return(
        <Layout>
            <Questioner initialState={initialState} pickNextQuestion={pickNextQuestion}/>
        </Layout>
        )
}
```

## How it works

The underlying idea is that a guided interview is a _state_, a _collection of user interfaces_, and a _mapping_ from one to the other.

An interview's _state_ consists of the data it is tracking: questions and their answers. The interview's _collection of user interfaces_ is, in React, a collection of components with `form` elements and elements like `input`s and `button`s. The _mapping_ is a function that links the current state to pieces of user interface that ask questions. Questions modify the state, which then triggers the interview to delivery a different user interface.
