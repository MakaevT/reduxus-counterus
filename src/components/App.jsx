import Header from "./Header";
import styles from "./App.module.css"
import MainContent from "./MainContent";
import Footer from "./Footer";

const App = () => {
  return(
    <div className={styles.reactApp}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App