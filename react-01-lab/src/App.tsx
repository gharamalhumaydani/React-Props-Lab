import Programers from './component/Programers';
import Companies from "./component/Companies";
import './App.css'

function App() {
  

  return (
    <>
      <div className="contaner">
        <div>
           <Programers name={'mohammed'} Programminglanguage={'HTML'} Year={1} companies='APP'/>
        </div>
        <div>
          <Programers name={'Shahad'} Programminglanguage={'CSS'} Year={15} companies='STC'/>
        </div>
        <div>
           <Programers name={'fahad'} Programminglanguage={'JS'} Year={5} companies='MSI'/>
        </div>
      </div>
      <div className='contaner'>
        <div>
          <Companies compname={'STC'} employee={2580} year={1998} tyservices={'Telecom'} prices={1000}/>
        </div>
        <div>
          <Companies compname={'MSI'} employee={2580} year={1986} tyservices={'electronics'} prices={1599}/>
        </div> 
      </div>
    </>
    
  )
}

export default App
