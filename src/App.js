

import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/Landingpage.css"
import Intro from './components/Intro';
import Trending from './components/Trending'
import Superharo from './components/Superhero';

function App() {
  return (
    <div >
      {/* intro section */}
     <div className='MYBG'>
     <NavigationBar/>
     <Intro/>
     </div>
     {/* end of intro  */}

    {/* trending section */}
     <div className='trending'>
        <Trending/>
     </div>
     {/* end of trending */}
     <div className='superhero'>
      <Superharo/>
     </div>
    </div>
  );
}

export default App;
