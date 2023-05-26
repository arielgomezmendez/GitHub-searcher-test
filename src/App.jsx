import './App.css'
import GitHubUser from './components/GitHubUser'
import Search from './components/Search'
import ContextProvider from './context/ContextProvider'

//import MyContext from './context/MyContext'

function App() {

  return (

    <ContextProvider>
      <Search />
      <GitHubUser />
    </ContextProvider>

  )
}

export default App
