import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogs bg-white'>
            <Container>
               <div className=' border shadow-sm text-dark text-start p-5 mt-5'>
               <h3>1. How will you improve the performance of a React Application? </h3>
                <p className=' '>
                Use React.Fragment to Avoid Adding Extra Nodes to the DOM When working with React, 
                there are cases where you will need to render multiple elements or return a group of
                 related items.Use Production BuildAnother way of optimizing a React app is by making 
                 sure you bundle your app for production before deploying. By default, your app is in 
                 development mode, which means React will include helpful warnings. This can be very 
                 useful while you’re developing.Use React.Suspense and React.Lazy for Lazy Loading
                  Components.Use React.memo for Component Memoization.React.memo is a great way of
                   optimizing performance as it helps cache functional components.Virtualize a Large
                    List Using react-window




                </p>
               </div>

               <div className=' border shadow-sm text-dark text-start p-5 mt-5'>
                <h3>2. What are the different ways to manage a state in a React application?</h3>
                <p>useState is the first tool you should reach for to manage state in your components.
             It can take accept any valid data value, including primitive and object values. 
             Additionally, its setter function can be passed down to other components as a callback 
             function (without needing optimizations like useCallback)useReducer is another option 
             that can be used for either local or global state. It is similar in many ways to useState 
             under the hood, although instead of just an initial state it accepts a reducer.
             The benefit of useReducer is that it provides a built-in way to perform a number of different
              state operations with the help of the reducer function, which makes it more dynamic overall than
               useState.

                         

                         </p>
                </div>
                <div className=' border shadow-sm text-dark text-start p-5 mt-5'>
                  <h3>3. How does prototypical inheritance work?</h3>
                  <p>
                  JavaScript is the most common of the prototype-capable languages, and its capabilities are 
                  relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful
                   tool that can save hours of coding. prototypical inheritance refers to the ability to access object
                    properties from another object. We use a JavaScript prototype to add new properties and methods to 
                    an existing object constructor. We can then essentially tell our JS code to inherit properties from
                     a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript
                      object to another through a reference pointer function.
                  </p>
                  </div>

                  <div className=' border shadow-sm text-dark text-start p-5 mt-5'>
                  <h3>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts]
                     = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h3>
                  <p>
                  .This is a bad idea for two reasons (even though it would work in this example, and many others).
                       (other patterns to avoid are things like this.state.something = x and this.state = 
                    Mutating state directly can lead to odd bugs, and components that are hard to optimize. Here’s 
                    an example. As you may already know, a common way to tune a React component for performance is
                     to make it “pure,” which causes it to only re-render when its props change (instead of every time
                      its parent re-renders). This can be done automatically by extending React.PureComponent instead 
                      of React.Component, or manually by implementing the shouldComponentUpdate lifecycle method to 
                      compare nextProps with current props. If the props look the same, it skips the render, and 
                      saves some time.
                  </p>
                  </div>
                  <div className=' border shadow-sm text-dark text-start p-5 mt-5'>
                  <h3>4. What is a unit test? Why should write unit tests?</h3>
                  <p>
                  Unit Testing is a software testing technique by means of which individual units of software i.e.
                   group of computer program modules, usage procedures and operating procedures are tested to determine
                    whether they are suitable for use or not. It is a testing method using which every independent 
                    modules are tested to determine if there are any issue by the developer himself. It is correlated 
                    with functional correctness of the independent modules.Unit Testing is defined as a type of 
                    software testing where individual components of a software are tested.Unit Testing of software 
                    product is carried out during the development of an application. An individual component may be 
                    either an individual function or a procedure. Unit Testing is typically performed by the developer.
                  </p>
                  </div>


            </Container>
            
        </div>
    );
};

export default Blog;