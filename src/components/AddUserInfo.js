// import React, { useState } from "react";

// export const AddUserInfo = ({ onAdd }) => {
//   const [newName, setNewName] = useState("");
//   const [newNumber, setNewNumber] = useState("");

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           onAdd(newName, newNumber);
//           setNewName("");
//           setNewNumber("");
//         }}
//       >
//         <div>
//           Name:{" "}
//           <input
//             type="text"
//             value={newName}
//             onChange={(e) => setNewName(e.target.value)}
//           />
//         </div>
//         <div>
//           Nunber:{" "}
//           <input
//             type="text"
//             value={newNumber}
//             onChange={(e) => setNewNumber(e.target.value)}
//           />
//         </div>
//         <div>
//           <input type="submit" value="Add" disabled={!newName || !newNumber} />
//         </div>
//       </form>
//     </div>
//   );
// };
