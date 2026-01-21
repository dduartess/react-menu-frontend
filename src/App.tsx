import './App.css'
import { Card } from './components/cards/card';
import { useFoodData } from './hooks/useFoodData';

function App() {

  const {data} = useFoodData();

  return (
    <div className='Container'>
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData =>
           <Card 
           price={foodData.price} 
           title={foodData.title} 
           image={foodData.image}
          />
        )}
      </div>
    </div>
  )
}

export default App
