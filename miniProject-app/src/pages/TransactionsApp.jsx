/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TransactionsList from './TransactionsList';
import AddTransaction from './AddTransaction';
import './styles/transactionsApp.css';

const TransactionsApp = () => {
  const [transactions, setTransactions] = useState([
    { name: 'Grocery Shopping', category: 'Food', amount: 50, date: '2023-10-01', type: 'Expense' },
    { name: 'Bus Ticket', category: 'Transport', amount: 2.5, date: '2023-10-02', type: 'Expense' },
    { name: 'Salary', category: 'Income', amount: 2000, date: '2023-10-03', type: 'Income' },
    { name: 'Movie Night', category: 'Entertainment', amount: 15, date: '2023-10-03', type: 'Expense' },
  ]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  return (
    <div className="transactions-app">
      <AddTransaction onAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default TransactionsApp;
