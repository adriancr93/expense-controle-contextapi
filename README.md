# JavaScript Function Types

JavaScript supports several ways to define functions. Each has its own use case and syntax. Below are the main types, when to use them, and examples:

## 1. Function Declaration
**Use when:** You want a named function that is hoisted (can be called before its definition).
```javascript
function add(a, b) {
	return a + b;
}
```

## 2. Function Expression
**Use when:** You need a function as a value (e.g., assign to a variable, pass as an argument). Not hoisted.
```javascript
const subtract = function(a, b) {
	return a - b;
};
```

## 3. Arrow Function
**Use when:** You want a concise function, especially for callbacks. Does not have its own `this` context.
```javascript
const multiply = (a, b) => a * b;
```

## 4. Constructor Function
**Use when:** You want to create objects using the `new` keyword (before ES6 classes).
```javascript
function Person(name) {
	this.name = name;
}
const user = new Person('Alice');
```

## 5. Method in Object
**Use when:** You want to define functions as object properties (methods).
```javascript
const obj = {
	greet() {
		return 'Hello';
	}
};
```

## 6. Class Method
**Use when:** You are working with ES6 classes and want to define methods.
```javascript
class Calculator {
	sum(a, b) {
		return a + b;
	}
}
```

## TypeScript Function Types
**Use when:** You want to specify function types explicitly for type safety.
```typescript
type AddFn = (a: number, b: number) => number;
const add: AddFn = (a, b) => a + b;
```

---
Choose the function type based on your needs: hoisting, context, object-oriented design, or type safety.

# React

## Context API

Global state management without dependencies.

---

### What is Context API?

The Context API in React allows you to create a global state that can be accessed from any component, without the need to pass props through multiple component layers. This makes state management simpler for medium-sized applications and avoids "prop drilling".

The main hook to use Context is `useContext`.

Many libraries, such as Redux and Zustand, use Context API under the hood.

---

### Alternatives to Context API

While Context API does not require external dependencies, its setup can be somewhat verbose. Alternatives include:

- [Zustand](https://github.com/pmndrs/zustand)
- [Redux Toolkit](https://redux-toolkit.js.org/)

---

## How to Use Context API in React

### 1. Create a Context

```tsx
import React, { createContext, useContext, useState } from 'react';

// Create the context
const BudgetContext = createContext(null);

// Create a provider component
export const BudgetProvider = ({ children }) => {
	const [budget, setBudget] = useState(0);
	return (
		<BudgetContext.Provider value={{ budget, setBudget }}>
			{children}
		</BudgetContext.Provider>
	);
};
```

### 2. Wrap your app with the Provider

```tsx
// In src/main.tsx or App.tsx
import { BudgetProvider } from './path/to/BudgetContext';

<BudgetProvider>
	<App />
</BudgetProvider>
```

### 3. Consume Context with useContext

```tsx
import React, { useContext } from 'react';
import { BudgetContext } from './path/to/BudgetContext';

const BudgetForm = () => {
	const { budget, setBudget } = useContext(BudgetContext);
	return (
		<div>
			<input
				type="number"
				value={budget}
				onChange={e => setBudget(Number(e.target.value))}
			/>
			<p>Current budget: ${budget}</p>
		</div>
	);
};
```

---

## Summary

- Context API is built-in and dependency-free for global state management.
- Use `createContext`, a Provider, and `useContext` to share state.
- Best for medium-sized apps; for large apps, consider Redux Toolkit or Zustand.

---

> **Tip:** Always keep context logic simple and avoid storing large or frequently changing data in context to prevent unnecessary re-renders.

