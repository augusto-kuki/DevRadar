import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "Main"
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Profile"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#FFF",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#7d40e0"
        }
      }
    }
  )
);

export default Routes;
