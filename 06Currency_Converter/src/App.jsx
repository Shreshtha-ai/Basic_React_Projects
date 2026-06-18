import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyinfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('/bg.png')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-white/20 rounded-2xl p-5 backdrop-blur-lg bg-black/30 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=> setAmount(currency)}
                selectCurrency={from}
                onAmountChange={(amount)=> setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 p-0 shadow-lg transition-all duration-300 active:scale-90"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency)=> setTo(currency)}
                selectCurrency={to}
                onAmountChange={(amount)=> setConvertedAmount(amount)}
                amountDisable
              />

              
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );




}

export default App
