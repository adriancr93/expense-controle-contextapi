
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