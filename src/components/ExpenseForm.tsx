import { useState } from "react";
import type { DraftExpense, Value } from "../types"
import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date()
  }) 

  const [error, setError] = useState('')
  const {dispatch} = useBudget()
  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> ) => {
      const { name, value} = e.target
      const isAmountField = ['amount'].includes(name)
      setExpense({
        ...expense,
        [name] : isAmountField ? +value : value
      })
  }
  
  const handleChangeDate = (value : Value) => {
    setExpense({
        ...expense,
        date: value
    })
  }

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate
    if(Object.values(expense).includes('')){
        setError('All input are required')
        return
    }

   // Add new expense
   dispatch({type: 'add-expense', payload: { expense }})

  }

  return (
    <form action="" className="space-y-5" onSubmit={handleSubmit}>
        <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">New Expense</legend>

        {error && <ErrorMessage>{error} </ErrorMessage>}

        <div className="flex flex-col gap-2">
            <label htmlFor="expenseName" className="text-xl">Expense Name</label>
            <input type="text" id="expenseName" placeholder="Add name of Expense" name="expenseName" className="bg-slate-100 p-2" value={expense.expenseName} onChange={handleChange}/>
        </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="text-xl">Amount</label>
            <input type="number" id="amount" placeholder="Add amount of expense: ej. 300" name="amount" className="bg-slate-100 p-2" value={expense.amount} onChange={handleChange} />
        </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-xl">Categories</label>
            <select id="category" name="category" className="bg-slate-100 p-2" value={expense.category} onChange={handleChange}>
                <option value="">Select a category</option>
                {categories.map( category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-xl">Date Expense:</label>
            <DatePicker className="bg-slate-100 p-2 border-0" value={expense.date} onChange={handleChangeDate}/>
        </div>

        <input type="submit" value="Add Expense" className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"/>
    </form>
  )
}
