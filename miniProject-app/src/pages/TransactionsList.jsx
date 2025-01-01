import React from 'react';
import './styles/transactionsList.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { IoMdOptions } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import PropTypes from 'prop-types'; 

const TransactionsList = ({ transactions, onEditTransaction, onDeleteTransaction }) => {
  const [orderBy, setOrderBy] = React.useState(['date', 'desc']);
  const [filters, setFilters] = React.useState({ category: '', date: '' });
  const [editTransaction, setEditTransaction] = React.useState(null);
  const [isEditOpen, setIsEditOpen] = React.useState(false);

  const headerContent = ["Name", "Category", "Amount", "Date"];

  const changeOrder = (item) => {
    if (orderBy[0] === item.toLowerCase()) {
      setOrderBy([item.toLowerCase(), orderBy[1] === "asc" ? "desc" : "asc"]);
    } else {
      setOrderBy([item.toLowerCase(), "asc"]);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    return transactions.filter((transaction) => {
      return (
        (!filters.category || transaction.category === filters.category) &&
        (!filters.date || transaction.date === filters.date)
      );
    });
  };

  const handleEdit = (transaction) => {
    setEditTransaction({ ...transaction });
    setIsEditOpen(true);
  };

  const handleSaveEdit = () => {
    onEditTransaction(editTransaction);
    setIsEditOpen(false);
  };

  const handleDelete = (transactionToDelete) => {
    onDeleteTransaction(transactionToDelete);
  };

  const filteredTransactions = applyFilters();

  return (
    <div className="transactions-list">
      <div className='header'>
        <h2 className='main-title'>Transactions List</h2>
        <div className="options">
          <div className="export">
            <label className="popup">
              <input type="checkbox" />
              <div tabIndex="0" className="burger">
                <FaDownload />
              </div>
              <nav className="popup-window">
                <legend>Format</legend>
                <ul>
                  <li>
                    <button>
                      <BsFileEarmarkSpreadsheetFill />
                      <span>CSV</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <FaFilePdf />
                      <span>PDF</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </label>
          </div>
          <button>
            <IoMdOptions /> Filter
          </button>
          <div className="input-group">
            <select name="category" onChange={handleFilterChange} className="input">
              <option value="">All Categories</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Income">Income</option>
            </select>
            <input type="date" name="date" onChange={handleFilterChange} className="input" />
          </div>
        </div>
      </div>

      <ul>
        <li className='transaction-item first'>
          {headerContent.map((item) => (
            <div className={"transaction-" + item.toLowerCase()} key={item}>
              <p onClick={() => changeOrder(item)}>
                {item}
                {orderBy[0] === item.toLowerCase() ? (
                  orderBy[1] === "desc" ? <FaArrowDownLong style={{ color: "rgb(166, 166, 255)" }} /> :
                    <FaArrowUpLong style={{ color: "rgb(166, 166, 255)" }} />
                ) : ""}
              </p>
            </div>
          ))}
          <div className="buttons">Actions</div>
        </li>
        {filteredTransactions.map((transaction) => (
          <li key={transaction.id} className="transaction-item">
            <div className="transaction-name">{transaction.name}</div>
            <div className="transaction-category">{transaction.category}</div>
            <div className="transaction-amount" style={{ color: transaction.type === "Expense" ? "red" : "green" }}>
              {transaction.amount.toFixed(2)} DZD
            </div>
            <div className="transaction-date">{transaction.date}</div>
            <div className="buttons">
              <button className="edit-button" onClick={() => handleEdit(transaction)}><FaEdit /></button>
              <button className="delete-button" onClick={() => handleDelete(transaction)}><MdDelete /></button>
            </div>
          </li>
        ))}
      </ul>

      {isEditOpen && (
        <div className="edit-form">
          <div className="form">
            <div className="tit">
              <h2>Edit Transaction</h2>
            </div>
            <div className="input-group">
              <input
                autoComplete="off"
                name="name"
                className="input"
                type="text"
                value={editTransaction?.name || ''}
                onChange={(e) => setEditTransaction({ ...editTransaction, name: e.target.value })}
              />
            </div>
            <div className="input-group">
              <input
                autoComplete="off"
                name="amount"
                className="input"
                type="number"
                value={editTransaction?.amount || ''}
                onChange={(e) => setEditTransaction({ ...editTransaction, amount: parseFloat(e.target.value) })}
              />
            </div>
            <div className="input-group">
              <select
                name="category"
                className="input"
                value={editTransaction?.category || ''}
                onChange={(e) => setEditTransaction({ ...editTransaction, category: e.target.value })}
              >
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
                value={editTransaction?.date || ''}
                onChange={(e) => setEditTransaction({ ...editTransaction, date: e.target.value })}
              />
            </div>
            <div className="btns">
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={() => setIsEditOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Define propTypes for TransactionsList
TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEditTransaction: PropTypes.func.isRequired,
  onDeleteTransaction: PropTypes.func.isRequired,
};

export default TransactionsList;