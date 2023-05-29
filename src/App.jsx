import './App.css'
import GitHubUser from './components/GitHubUser'
import Search from './components/Search'
import ContextProvider from './context/ContextProvider'

function App() {
  return (
    <ContextProvider>
      <div className='app-container'>
        <Search />
        <GitHubUser />
      </div>
    </ContextProvider>

  )
}

export default App
