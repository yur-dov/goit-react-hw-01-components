import TransactionHistory from './TransactionHistory/TransactionHistory'
import transaction from './data/transactions.json'

import Wrapper from './Wrapper'

import style from './app.module.css'


export default function App() {
  return (
          <div className={style.container}>
            <TransactionHistory items={transaction} />
            <Wrapper />
        </div>
   )
 }