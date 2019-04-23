import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
// Import "Screen" component
import ClickerScreen from './ClickerScreen'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: ClickerScreen }, // Add a screen
  Clicker: { screen: ClickerScreen }
})
const App = createAppContainer(MainNavigator)

export default App