import styles from './styles/App.module.scss'
//components
import Footbar from "./components/Footbar"
import Navbar from "./components/Navbar"
import AppRouter from "./router/AppRouter"


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <AppRouter />
      <Footbar />
    </div>
  )
}

export default App
