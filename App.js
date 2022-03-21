import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";

//styles
import { GlobalStyle } from './GlobalStyle';

//pages
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import MovieItemPage from './Pages/MovieItemPage';
import AccountSettingPage from './Pages/AccountSettingPage';
import InfoPage from './Pages/InfoPage';
import CollectionPage from './Pages/CollectionPage';
import ListPage from './Pages/ListPage';
import LoginPage from './Pages/LoginPage';
import SingUpPage from './Pages/SingUpPage';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        {/* <Route path="/" element={<Navigation />} /> */}
        <Route exact='False' path="/" element={<HomePage />} />
        <Route path="/homePage/" element={<HomePage />} />
        <Route path="/homePage/:id" element={<HomePage />} />
        <Route path="/search/" element={<SearchPage/>}/> 
        <Route path="/movieItem/:id" element={<MovieItemPage/>}/>
        <Route path="/accountSetting/" element={<AccountSettingPage />}/>
        <Route path="/accountSetting/info/" element={<InfoPage/>}/>
        <Route path="/accountSetting/collection/" element={<CollectionPage/>}/>
        <Route path="/accountSetting/list/" element={<ListPage/>}/>
        <Route path="/login/" element={<LoginPage/>}/>
        <Route path="/login/singup/" element={<SingUpPage/>}/>
      </Routes>
      <GlobalStyle />
    </div>
    </BrowserRouter>

  );
}

export default App;
