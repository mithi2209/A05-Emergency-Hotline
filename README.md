## Question - Answers :


### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

*Differences between getElementById, getElementsByClassName, and querySelector / querySelectorAl--*

  **getElementById :** 

 -  Selects a single element by it's unique "id".
 -  Always returns **one element** or **null**.

  **getElementByClassName :**
 -  Selects **all elements** with the given class name.
 -  Returns an **HTMLCollection**

 **querySelector :**
- Selects the **first element** that matches the CSS selector.
- Returns a single element or null.

**querySelectorAll :**
- Selects **all elements** matching the CSS selector.
- Returns a **NodeList**.




### 2. How do you create and insert a new element into the DOM?


*To insert a new element in dom--*



 **Step 1 : Create a new element**

-  const newDiv = document.createElement("div");

**Step 2: Add text or attributes**

- newDiv.innerText = "Hello World";
- newDiv.className = "hello-div";

**Step 3: Insert into the DOM**

- document.body.appendChild(newDiv);



### 3. What is Event Bubbling and how does it work?

- Event Bubbling is the process where an event starts from the innermost (child) element and propagates upward to parent elements.



### 4. What is Event Delegation in JavaScript? Why is it useful?


- **Event Delegation** is a technique where instead of adding event listeners to multiple child elements, you add a single listener to their parent and use event.target to detect which child was clicked.


- **Useful because:**
   - - Improves performance (fewer listeners).
   - - Works well with dynamically added elements.


### What is the difference between preventDefault() and stopPropagation() methods?


**preventDefault()** 

- Prevents the default behavior of an element.

- Example: stops a form from submitting, stops a link from opening.


**stopPropagation()**


- Stops the event from bubbling up to parent elements.

- Example:  clicking a child won’t trigger parent’s click event.

    
