/* eslint-disable no-unused-vars */
// import './App.css';
// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// import MainLayout from './components/MainLayout';
// import Dashboard from './pages/Dashboard';
// import Users from './pages/Users';
// import Messages from './pages/Messages';
// import Analytics from './pages/Analytics';
// import FileManager from './pages/FileManager';
// import Order from './pages/Order';
// import Saved from './pages/Saved';
// import Setting from './pages/Setting';
// import AddTransaction from './pages/AddTransaction';
// import TransactionsList from './pages/TransactionsList';

// function App() {
//   return (
//     <Router>
//       <MainLayout>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/new-transaction" element={<AddTransaction />} />
//           <Route path="/transactions" element={<TransactionsList />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/messages" element={<Messages />} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/file-manager" element={<FileManager />} />
//           <Route path="/order" element={<Order />} />
//           <Route path="/saved" element={<Saved />} />
//           <Route path="/settings" element={<Setting />} />
//           <Route path="/new-transaction" element={<AddTransaction />} />
//           <Route path="*" element={<> not found</>} />
//         </Routes>
//       </MainLayout>
//     </Router>
//   );
// }

// export default App;





























// import './App.css';
// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// import MainLayout from './components/MainLayout';
// import Dashboard from './pages/Dashboard';
// import Users from './pages/Users';
// import Messages from './pages/Messages';
// import Analytics from './pages/Analytics';
// import FileManager from './pages/FileManager';
// import Order from './pages/Order';
// import Saved from './pages/Saved';
// import Setting from './pages/Setting';
// import AddTransaction from './pages/AddTransaction';
// import TransactionsList from './pages/TransactionsList';
// import React, { useState } from 'react';

// function App() {
//   // State to manage transactions
//   const [transactions, setTransactions] = useState([
//     { id: 1, name: 'Grocery Shopping', category: 'Food', amount: 50, date: '2023-10-01', type: 'Expense' },
//     { id: 2, name: 'Bus Ticket', category: 'Transport', amount: 2.5, date: '2023-10-02', type: 'Expense' },
//     { id: 3, name: 'Salary', category: 'Income', amount: 2000, date: '2023-10-03', type: 'Income' },
//     { id: 4, name: 'Movie Night', category: 'Entertainment', amount: 15, date: '2023-10-03', type: 'Expense' },
//   ]);

//   // Function to add a new transaction
//   const handleAddTransaction = (newTransaction) => {
//     setTransactions((prev) => [
//       ...prev,
//       { ...newTransaction, id: prev.length + 1 }
//     ]);
//   };

//   // Function to edit an existing transaction
//   const handleEditTransaction = (updatedTransaction) => {
//     setTransactions((prev) =>
//       prev.map((t) => (t.id === updatedTransaction.id ? updatedTransaction : t))
//     );
//   };

//   // Function to delete a transaction
//   const handleDeleteTransaction = (transactionToDelete) => {
//     setTransactions((prev) =>
//       prev.filter((transaction) => transaction.id !== transactionToDelete.id)
//     );
//   };

//   return (
//     <Router>
//       <MainLayout>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route
//             path="/new-transaction"
//             element={<AddTransaction onAddTransaction={handleAddTransaction} />}
//           />
//           <Route
//             path="/transactions"
//             element={
//               <TransactionsList
//                 transactions={transactions}
//                 onEditTransaction={handleEditTransaction}
//                 onDeleteTransaction={handleDeleteTransaction}
//               />
//             }
//           />
//           <Route path="/users" element={<Users />} />
//           <Route path="/messages" element={<Messages />} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/file-manager" element={<FileManager />} />
//           <Route path="/order" element={<Order />} />
//           <Route path="/saved" element={<Saved />} />
//           <Route path="/settings" element={<Setting />} />
//           <Route path="*" element={<> not found</>} />
//         </Routes>
//       </MainLayout>
//     </Router>
//   );
// }

// export default App;























import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Messages from './pages/Messages';
import Analytics from './pages/Analytics';
import FileManager from './pages/FileManager';
import Order from './pages/Order';
import Saved from './pages/Saved';
import Setting from './pages/Setting';
import AddTransaction from './pages/AddTransaction';
import TransactionsList from './pages/TransactionsList';
import React, { useState, useEffect } from 'react';

function App() {
  // Load transactions from localStorage on initial render
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [
      { id: 1, name: 'Grocery Shopping', category: 'Food', amount: 50, date: '2023-10-01', type: 'Expense' },
      { id: 2, name: 'Bus Ticket', category: 'Transport', amount: 2.5, date: '2023-10-02', type: 'Expense' },
      { id: 3, name: 'Salary', category: 'Income', amount: 2000, date: '2023-10-03', type: 'Income' },
      { id: 4, name: 'Movie Night', category: 'Entertainment', amount: 15, date: '2023-10-03', type: 'Expense' },
    ];
  });

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a new transaction
  const handleAddTransaction = (newTransaction) => {
    setTransactions((prev) => [
      ...prev,
      { ...newTransaction, id: prev.length + 1 }
    ]);
  };

  // Function to edit an existing transaction
  const handleEditTransaction = (updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updatedTransaction.id ? updatedTransaction : t))
    );
  };

  // Function to delete a transaction
  const handleDeleteTransaction = (transactionToDelete) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== transactionToDelete.id)
    );
  };

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/new-transaction"
            element={<AddTransaction onAddTransaction={handleAddTransaction} />}
          />
          <Route
            path="/transactions"
            element={
              <TransactionsList
                transactions={transactions}
                onEditTransaction={handleEditTransaction}
                onDeleteTransaction={handleDeleteTransaction}
              />
            }
          />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;