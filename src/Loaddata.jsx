// import { use } from "react"

// export default function Loaddata(fetchUsers){
//     const users=use(fetchUsers);
//     console.log(users);
//     return(
//         <div className="card">
//             <h3>users:{users.length} </h3>
//         </div>
//     )
// }
import { use } from "react";   

export default function Loaddata({ fetchUsers }) {
  const users = use(fetchUsers);  
  console.log(users);

  return (
    <div className="card">
      <h3>users: {users.length}</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
