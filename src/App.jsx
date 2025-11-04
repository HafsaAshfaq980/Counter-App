// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="main">
//       <div className="card">
//         <h1> Counter App</h1>
//         <p className="subtitle">Counter using React</p>

//         <div className="counter-display">
//           <h2>{count}</h2>
//         </div>

//         <div className="btn-group">
//           <button className="btn primary" onClick={() => setCount(count + 1)}>
//             + Click
//           </button>
//           <button
//             className="btn secondary"
//             onClick={() => setCount(0)}
//             disabled={count === 0}
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    setShowModal(false);
    setName('');
    setEmail('');
    alert('Details saved successfully!');
  };

  return (
    <div className="main">
      <div className="card">
        <h1 className="title">Counter App</h1>
        <p className="subtitle">Simple React Counter App</p>

        <div className="counter-display">
          <h2>{count}</h2>
        </div>

        <div className="btn-group">
          <button className="btn primary" onClick={() => setCount(count + 1)}>
            + Increase
          </button>
          <button
            className="btn secondary"
            onClick={() => setCount(0)}
            disabled={count === 0}
          >
            Reset
          </button>
          <button className="btn info" onClick={() => setShowModal(true)}>
            Enter Name & Email
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Enter Your Details</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="modal-btns">
              <button className="btn save" onClick={handleSave}>
                Save
              </button>
              <button className="btn cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
