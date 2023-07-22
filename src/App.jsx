import Header from './components/Header/Header';
import SideNavbar from './components/SideNavbar/SideNavbar';
import UserDetail from './components/UserDetail/UserDetail';

const App = () => {
  return (
    <>
      <Header />
      <main className='flex flex-row'>
        <SideNavbar />
        <UserDetail />
      </main>

    </>
  )
}

export default App
