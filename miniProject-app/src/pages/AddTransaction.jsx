/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React, { useState } from 'react';
// import './styles/addTransaction.css';

// const AddTransaction = ({ onAddTransaction }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     amount: '',
//     category: '',
//     date: '',
//     type: 'Expense',
//     note: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.name && formData.amount && formData.category && formData.date) {
//       onAddTransaction({ ...formData, amount: parseFloat(formData.amount) });
//       setFormData({
//         name: '',
//         amount: '',
//         category: '',
//         date: '',
//         type: 'Expense',
//         note: ''
//       });
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   return (
//     <div className="add-transaction">
//       <h2 className="main-title">New Transaction</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="type">
//           <div className="radio-input">
//             <label className="label">
//               <input
//                 type="radio"
//                 name="type"
//                 value="Expense"
//                 checked={formData.type === 'Expense'}
//                 onChange={handleChange}
//               />
//               <p className="text">Expense</p>
//             </label>
//             <label className="label">
//               <input
//                 type="radio"
//                 name="type"
//                 value="Income"
//                 checked={formData.type === 'Income'}
//                 onChange={handleChange}
//               />
//               <p className="text">Income</p>
//             </label>
//           </div>
//         </div>
//         <div className="form">
//           <div className="input-group">
//             <input
//               autoComplete="off"
//               name="name"
//               className="input"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="input-group">
//             <input
//               autoComplete="off"
//               name="amount"
//               className="input"
//               type="number"
//               placeholder="Amount"
//               value={formData.amount}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="input-group">
//             <select
//               name="category"
//               className="input"
//               value={formData.category}
//               onChange={handleChange}
//             >
//               <option value="" disabled>
//                 Select Category
//               </option>
//               <option value="Food">Food</option>
//               <option value="Transport">Transport</option>
//               <option value="Entertainment">Entertainment</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div className="input-group">
//             <input
//               autoComplete="off"
//               name="date"
//               className="input"
//               type="date"
//               value={formData.date}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="input-group">
//             <input
//               autoComplete="off"
//               name="note"
//               className="input"
//               type="text"
//               placeholder="Note"
//               value={formData.note}
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit">Save</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddTransaction;














import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './styles/addTransaction.css';

const AddTransaction = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: '',
    date: '',
    type: 'Expense',
    note: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.amount && formData.category && formData.date) {
      onAddTransaction({ ...formData, amount: parseFloat(formData.amount) });
      setFormData({
        name: '',
        amount: '',
        category: '',
        date: '',
        type: 'Expense',
        note: ''
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="add-transaction">
      <h2 className="main-title">New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="type">
          <div className="radio-input">
            <label className="label">
              <input
                type="radio"
                name="type"
                value="Expense"
                checked={formData.type === 'Expense'}
                onChange={handleChange}
              />
              <p className="text">Expense</p>
            </label>
            <label className="label">
              <input
                type="radio"
                name="type"
                value="Income"
                checked={formData.type === 'Income'}
                onChange={handleChange}
              />
              <p className="text">Income</p>
            </label>
          </div>
        </div>
        <div className="form">
          <div className="input-group">
            <input
              autoComplete="off"
              name="name"
              className="input"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              autoComplete="off"
              name="amount"
              className="input"
              type="number"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <select
              name="category"
              className="input"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="input-group">
            <input
              autoComplete="off"
              name="date"
              className="input"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              autoComplete="off"
              name="note"
              className="input"
              type="text"
              placeholder="Note"
              value={formData.note}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

// Define propTypes for AddTransaction
AddTransaction.propTypes = {
  onAddTransaction: PropTypes.func.isRequired, // Validate onAddTransaction as a required function
};

export default AddTransaction;