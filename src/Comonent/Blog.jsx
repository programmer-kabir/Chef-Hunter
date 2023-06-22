import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="collapse container mx-auto mb-5">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Tell us the differences between uncontrolled and controlled
          components?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            <span className="font-bold">Controlled:</span> Controlled components
            in React are those in which form data is handled by the component’s
            state. Forms are used to store information in a document section.
            The information from this form is typically sent to a server to
            perform an action. This data is held by form input elements and
            control elements, such as input, select, textarea, etc., which
            maintain and control their states or values.
          </p>
          <p className="mt-5">
            <span className="font-bold">uncontrolled:</span>t is similar to the
            traditional HTML form inputs. Here, the form data is handled by the
            DOM itself. It maintains their own state and will be updated when
            the input value changes. To write an uncontrolled component, there
            is no need to write an event handler for every state update, and you
            can use a ref to access the value of the form from the DOM.
          </p>
        </div>
      </div>

      <div className="collapse container mx-auto mb-5">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          How to validate React props using PropTypes?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            There are different validators in PropTypes that can be used to
            check whether the data one received is valid. Basic data types. This
            is the most basic way one can check if a prop is valid in react
            components. And this is done by checking if the prop is one of the
            primitive data types in Javascript such boolean, strings, numbers
            etc.
          </p>
        </div>
      </div>

      <div className="collapse container mx-auto mb-5">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Tell us the difference between nodejs and express js.
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            <span className="font-bold">NOde js:</span> Node.js is one of the
            most popular frameworks and many large companies use this to develop
            amazing applications. It is an open-source cross-function runtime
            environment and to create a server-side and networking JavaScript
            application, you can use it. The huge library of this development
            framework simplifies the coding process for you.
          </p>
          <p className="mt-5">
            <span className="font-bold">Express js:</span>From our above
            example, we have seen how we can decide on what output to show based
            on routing. This sort of routing is what is used in most modern-day
            web applications. The other part of a web server is about using
            templates in Node js. When creating quick on-the-fly Node
            applications, an easy and fast way is to use templates for the
            application. There are many frameworks available in the market for
            making templates. In our case, we will take the example of the jade
            framework for templating. Jade gets installed via the Node Package
            manager. This can be done by executing the following line in the
            command line
          </p>
        </div>
      </div>

      <div className="collapse container mx-auto mb-5">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What is a custom hook, and why will you create a custom hook?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            React hooks are functions that let you use and interact with state
            in React function components. React comes with some built-in hooks,
            the most commonly used ones being useState, useRef, and useEffect.
            The former two are used to store data across renders, while the
            latter is used to execute side effects when that data changes. We
            can also build our own hooks using the built-in hooks as building
            blocks. These are often referred to as “custom hooks” to
            differentiate them from the built-in hooks. In my experience, custom
            hooks are the most underused React abstraction. Developers who are
            newer to React can struggle to understand how to build custom hooks
            or when to use them. This post will focus on answering those
            questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
