import { useEffect, useState } from 'react'

/**** Component ******/
export const Calculator = () => {
  const [activeNumber, setActiveNumber] = useState('0')
  const [screenNumber, setScreenNumber] = useState(activeNumber)
  const [firstNumber, setFirstNumber] = useState('0')
  const [secondNumber, setSecondNumber] = useState('0')
  const [activeOperation, setActiveOperation] = useState(null)

  const handleNumberClick = (event) => {
    const buttonNumber = event.currentTarget.innerText
    if (activeNumber !== '0') {
      setActiveNumber(activeNumber + buttonNumber)
    } else {
      setActiveNumber(buttonNumber)
    }
  }

  useEffect(() => {
    const updateScreen = () => {
      setScreenNumber(activeNumber)
    }
    updateScreen()
  }, [activeNumber])

  useEffect(() => {
    const updateScreen = () => {
      setScreenNumber(firstNumber)
    }
    updateScreen()
  }, [firstNumber])

  useEffect(() => {
    const calculate = () => {
      if (activeOperation === '+') {
        setScreenNumber(Number(firstNumber) + Number(secondNumber))
      } else if (activeOperation === '-') {
        setScreenNumber(Number(firstNumber) - Number(secondNumber))
      } else if (activeOperation === '*') {
        setScreenNumber(Number(firstNumber) * Number(secondNumber))
      } else if (activeOperation === '/') {
        setScreenNumber(Number(firstNumber) / Number(secondNumber))
      }
    }
    calculate()
  }, [secondNumber])

  return (
    <div className={MainWrapper}>
      <div className={CalculatorWrapper}>
        <div className={Screen}>{screenNumber}</div>
        <div className={RowWrapper}>
          <div className={Button} onClick={(event) => handleNumberClick(event)}>
            7
          </div>
          <div className={Button} onClick={(event) => handleNumberClick(event)}>
            8
          </div>
          <div className={Button} onClick={(event) => handleNumberClick(event)}>
            9
          </div>
          <div
            className={Button}
            onClick={() => {
              setActiveOperation('*')
              setFirstNumber(screenNumber)
              setActiveNumber('0')
            }}
          >
            X
          </div>
        </div>
        <div className={RowWrapper}>
          <div className={Button} onClick={(event) => handleNumberClick(event)}>
            4
          </div>
          <div className={Button} onClick={(event) => handleNumberClick(event)}>
            5
          </div>
          <div className={Button} onClick={(event) => handleNumberClick(event)}>
            6
          </div>
          <div
            className={Button}
            onClick={() => {
              setActiveOperation('-')
              setFirstNumber(screenNumber)
              setActiveNumber('0')
            }}
          >
            -
          </div>
        </div>
        <div className={RowWrapper}>
          <div className={Button} onClick={(event) => handleNumberClick(event)}>
            1
          </div>
          <div className={Button} onClick={(event) => handleNumberClick(event)}>
            2
          </div>
          <div className={Button} onClick={(event) => handleNumberClick(event)}>
            3
          </div>
          <div
            className={Button}
            onClick={() => {
              setActiveOperation('+')
              setFirstNumber(screenNumber)
              setActiveNumber('0')
            }}
          >
            +
          </div>
        </div>
        <div className={RowWrapper}>
          <div
            className={Button}
            onClick={() => {
              setActiveNumber('0')
              setFirstNumber('0')
              setScreenNumber('0')
              setActiveOperation(null)
            }}
          >
            C
          </div>
          <div className={Button} onClick={(event) => handleNumberClick(event)}>
            0
          </div>
          <div
            className={Button}
            onClick={() => {
              setActiveOperation('/')
              setFirstNumber(screenNumber)
              setActiveNumber('0')
            }}
          >
            /
          </div>
          <div
            className={Button}
            onClick={() => {
              setSecondNumber(screenNumber)
            }}
          >
            =
          </div>
        </div>
      </div>
    </div>
  )
}

/**** Styles ******/
const MainWrapper = 'w-[100%] h-[100vh] flex justify-center items-center'

const CalculatorWrapper =
  'border border-[black] w-[500px] p-[20px] rounded-[10px]'

const Screen =
  'border border-[black] w-[100%] h-[80px] rounded-[10px] p-[20px] flex items-center mb-[20px] text-[24px]'

const RowWrapper = 'flex items-center justify-between mb-[20px]'

const Button =
  'border border-[black] w-[100px] h-[80px] rounded-[10px] cursor-pointer flex justify-center items-center text-[24px]'
