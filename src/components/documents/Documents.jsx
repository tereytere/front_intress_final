import React from 'react'
import './documents.css'

function Documents() {
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apidocuments/create')
        .then(response => response.json())
    
        .then(repo => 
            setRepo(repo) )// Establece el valor de 'repo' primero
             // Puedes dejar esto aquí si quieres, pero no es necesari)
        .catch(error => console.error(error));
        
    }, []);
      
    return (
      <div >
          {repo.map(int => {
                  return(
                      <div key={int.id}>
                          <h3>{int.date}</h3>
                          <p>{int.description}</p> 
                      </div>
                  )
              })} 
  
      </div>
    )
}

export default Documents