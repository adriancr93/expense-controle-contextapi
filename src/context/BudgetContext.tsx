import { useReducer, createContext, type ReactNode } from "react"
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState,
    dispatch: React.Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps); //null! to avoid error in the code both are available with the comunity of React to handled this knid issue with typescript

export const BudgetProvider = ({children}: BudgetProviderProps) => {

     const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <BudgetContext.Provider value={{state, dispatch}}>
          {children}
        </BudgetContext.Provider>
    )
}