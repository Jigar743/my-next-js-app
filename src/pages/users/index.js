import { useEffect, useState } from "react";
import { isAuthenticated } from "../../Helpers/AuthHandler";
import axios from "axios";
import { API_ROUTES } from "../../Helpers/ApiManage";

export default function UserPage({ loginUser }) {
  const [users, setUsers] = useState([]);
  const { _id, name, email, active, createdAt, updatedAt } = loginUser;

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(API_ROUTES.getAllUsers);

      if (response?.status === 200) {
        setUsers(JSON.parse(JSON.stringify(response?.data.allUsers)));
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users?.map((u) => {
          return (
            <li key={u._id.toString()}>
              {u.name} {_id.toString() === u._id.toString() && "(You)"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { isLoggedIn, user } = await isAuthenticated(context);
  if (!isLoggedIn && !user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        isLoggedIn,
        loginUser: user,
      },
    };
  }
}
