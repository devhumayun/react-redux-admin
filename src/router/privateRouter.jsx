import PageLayout from "../components/PageLayout/PageLayout"
import Dashboard from "../pages/dashboard/Dashboard"
import Users from "../pages/users/Users"

// create private router
const privateRouter = [
    {
      element: <PageLayout />,
      children: [
        {
            path: "/",
            element: <Dashboard />,
        },
        {
            path:"/users",
            element: <Users />
        }
      ]  
    },
]

// export router
export default privateRouter