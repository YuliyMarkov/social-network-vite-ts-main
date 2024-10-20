import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { PhoneSMS } from "./pages/PhoneSMS/PhoneSMS";
import { RepeatPassword } from "./pages/RepeatPassword/RepeatPassword";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<LoginPage/>
    },
    {
      path:"/main-page",
      element:<MainPage/>
    },
    {
      path:"/profile-page",
      element:<ProfilePage/>
    },
    {
      path:"/forgotPassword-page",
      element:<ForgotPassword/>
    },
    {
      path:"/phoneSMS-page",
      element:<PhoneSMS/>
    },
    {
      path:"/repeatPassword-page",
      element:<RepeatPassword/>
    },
    {
      path:"/registration-page",
      element:<RegistrationPage/>
    },
  ])

  return (

      <div className="App">
        <RouterProvider router={router}/>
      </div>

  );
}

export default App;
