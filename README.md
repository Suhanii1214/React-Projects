REACT PROJECTS

1) Setup and Installation
a. React is library that can be installed using a framework for example Next.js where we use the command `npx create-next-app`
b. React can also be installed without using any framework using command `npx create-react-app`. This command creates a large bundle that is slow in loading. To run a project here we use `npm run start` and to take the project for production build we use `npm run build`
c. Another way of installing react is by using a bundling tool like Vite or Parcel where we use the commmand `npm create vite@latest`. To run a project here we use `npm run dev`

2) React-DOM and React Native
a. Both React-DOM and React Native are implementations of React, while working with web browsers and WebApps we use React-DOM and while working with mobile applications we use React Native.
b. Our browser runs on a Document Object Model(DOM) that is rendered whenever we run a website while using react it creates a "Virtual DOM" known as React-DOM which like a copy of the real DOM running on the browser. Whenever we make changes to our website the virtual DOM updates only that changed part into the Real DOM thus making browser loading faster.

3) Evaluated Javascript Expression
const name = "Suhani"
<p>Hello {name}</p> // Output: Hello Suhani => {name} putting this in html tags is called "Evaluated Expressions" in Javascript

4) Calling functions as HTML Element
In React whenever we make new components each component is defined as a function and then we call all these components in the main.jsx/index.js file as a Custom HTML element but that same function can also be called as a normal javascript function
                      return (                       return (
                       <App/>                         App()
                      )                              )
both the expressions have same meaning but 2nd one is not considered a good practice.

5) React Fibre
React Fiber is a reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is *incremental rendering*: the ability to split rendering work into chunks and spread it out over multiple frames.

6) Reconcilation
Reconcilation is diffing (differentiating) algorithm used in the core concept of Virtual DOM which is used to diff one tree from another for the changes and determine which parts need to be changed.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM.

EXAMPLE: " A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

    a. Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
    b. Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

7) *Counter Interview Question*
Q: What will be the value of count (initial value = 15) after executing this statement?
   function increaseCount() {
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
  }

A: The value of count will be increased by 1 only i.e. it will become 16 because we are using the useState() hook and it updates the state of a variable in bundles so when this function gets executed it all the setCount() would be sent one after the other so it will take this as only one update and the count = 16.

If in case, we have to increment value in this manner only we can include a callback function inside setCount function
   function increaseCount() {
    setCount((prevCount) => prevCount + 1 )
    setCount((prevCount) => prevCount + 1 )
    setCount((prevCount) => prevCount + 1 )
    setCount((prevCount) => prevCount + 1 )
  }
Here, the value returned would be 19 as everytime it is taking the prev value from the callback

8) onClick function
The onClick function always accepts a functions that is why we either pass a callback funtion(arrow function) to onClick or explicitly create a function and then pass its refernce to the onClick metthod

onClick = {setColor("red")} this will cause an error because ultimately we are passing a return value from the setColor function to onClick but onClick accepts only the function.

9) useCallback hook
Whenever we use the useState hook on a variable for state change it re-renders the web page to update tha value but our webpage can also contain a few functions whose value need not to be updated on changing the useState variable. To prevent this unwanted update in functions we use the useCallback function which stores the cache/previous value of the function and stops the function from re-rendering.

useCallback functions are mainly use to improve/optimize the performance of our React App by storing a cache/memoized function.

Similarly *useMemo()* hook is used for variable -> memoized variables.

10) useEffect hook
the useEffect hook is used when we want to tell our react app that our component need to do something after render

11) Memoization
Memoization is an optimization technique for accelerating computer programs by caching the results of heavy function calls and returning them when similar inputs are encountered repeatedly.

12) React Router
a. We use <Link> tag that we get from react router dom in place of <a> tag because <a> tag reloads the entire page but <Link> tag does not 


