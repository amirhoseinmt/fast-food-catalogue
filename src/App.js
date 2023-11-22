import './App.css';
import CategoryList from './CategoryList/categortList';
import Header from './Header/header';

function App() {
  return (
    <div className='wrapper bg-faded-dark'>
      <Header></Header>
      <CategoryList></CategoryList>
    </div>
  );
}

export default App;
