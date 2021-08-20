import React, {useEffect, useState} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

export default function App() {

  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bills")
    .then(response => response.json())
    .then(json => setBills(json))
  }, []);

 function castBill(id) {
  setBills(bills.map(bill => bill.id === id ? {...bill, casted: true} : bill))
 }

 function uncastBill(id) {
  setBills(bills.map(bill => bill.id === id ? {...bill, casted: false} : bill))
 }

 function fireBill(id) {
   setBills(bills.filter(bill => bill.id !== id))
 }

  return (
    <div>
      <BillsCast bills={bills.filter(bill => bill.casted)} handleClick={uncastBill} handleFire={fireBill}/>
      <BillCollection bills={bills} handleClick={castBill} handleFire={fireBill}/>
    </div>
  );
}
