import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
            <img src="/grafico.jpg" alt="Expense graph" />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
            <button type="button" className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg">
                APP reset
            </button>

            <AmountDisplay 
                label="Budget"
                amount= {300}
            />

            <AmountDisplay 
                label="Available"
                amount= {200}
            />

            <AmountDisplay 
                label="Expense"
                amount= {100}
            />
        </div>
    </div>
  )
}
