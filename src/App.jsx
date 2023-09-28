import Navbar from './Components/Navbar';
import './App.css';
import Home_page from './Components/Home_page';
import Content1 from './Components/Content1';
import Content2 from './Components/Content2';
import Contact from './Components/Contact';
import MobCaro from './Components/MobCaro';



function App() {
 
    

  return (
    <div className="App ">
      <div className='md:h-[100vh] h-[86vh]'>
        <div className='md:mb-[15%] mb-[70%] '>
          <Navbar/>
        </div>
        <div className=''>
          <Home_page/>
        </div>
      </div>
      
      <div id='About'  className='bg-black pt-20'>
        <div className='container'>
          <section className=''>
            <Content1/>
          </section>
          <section className='md:pt-20'>
            <Content2/>
          </section>
        </div>
      </div>
      
      <div id='Members' className='min-h-screen'>
        <MobCaro/>
      </div>
      <div>
     
      </div>
      
      <div id='Contact' className='md:min-h-screen bg-black pt-16'>
        <Contact/>
       
      </div>
    </div>
  );
 
}

export default App;
