import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


type Imags ={
  titulo:string , 
  avatar:string;
}

function App(){
  
  const [carregando,setLoading] = useState<Imags[]>([]);
  const [loadig,setcarregando] = useState(false)


  useEffect(()=>{
    loading();
  },[])

  const loading = () =>{
    setcarregando(true)

    axios.get('https://api.b7web.com.br/cinema/')
    .then((Response)=>{
      setLoading(Response.data)
      setcarregando(false)
    })
  }


  return(
    
    <div className='container'>
      <h1>Catalogo de Filmes</h1>
      {loadig &&
        <>
        <p>carregando...</p>
        
        </>
      }
      
      {!loadig &&
        <>
          <div className='grid'>
            {carregando.map((item,index)=>(
              <div key={index}>
                <img src={item.avatar} alt="" className='imagi' />
                <p>{item.titulo}</p>
              </div>
            ))}
          </div>
        </>
}
    </div>
  )
}
export default App;