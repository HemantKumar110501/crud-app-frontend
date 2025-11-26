import { createBrowserRouter} from "react-router-dom"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ContactsPage from "../pages/ContactsPage"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"
import CreateEmpPage from "../pages/CreateEmpPage"
import AllEmpPage from "../pages/AllEmpPage"
import PrivateRoute from "../privateRoute/PrivateRoute"
import EditEmpPage from "../pages/EditEmpPage"



export const myRoutes = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/about",
        element:<AboutPage/>
    },
    {
        path:"/contacts",
        element:<ContactsPage/>
    },
    {
        path:"login",
        element:<LoginPage/>
    },
    {
        path:"signup",
        element:<SignupPage/>
    },
    {
        path:"/create-emp",
        element:(
            <PrivateRoute>
                <CreateEmpPage/>
            </PrivateRoute>
        )
    },
    {
        path:"all-emp",
        element:(
            <PrivateRoute>
                <AllEmpPage/>  {/**children prop mai ye AllEmp component bhej rhe h taaki route protected rahe iss PrivateRoute component k help se */}
            </PrivateRoute>
            )
    },
    {
        path:"/edit-emp/:id",  //yaha humlog dynamic path se dynamic routing kr rhe h actully jobhi emp ka id url mai jo bheja h humne wo apne aap react router apne se ye :id variable mai rakh dega . ye magic h react router ka
        element:<EditEmpPage/>
    }
])

