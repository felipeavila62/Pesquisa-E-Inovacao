import React, {useState, useEffect} from 'react';



export default function App(){

  const [repositories, setRepositories] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(async() =>{
    const response = await fetch('https://api.github.com/users/JhonFather/repos');

    const data = await response.json();
    setRepositories(data);
  }, []);


  useEffect(()=>{
   const filtered =  repositories.filter(repo => repo.favorites);
   document.title = `Você tem ${filtered.length} favoritos`;
  },[repositories]);

  function handleFavorite(id){
     const newRepositories = repositories.map(repo =>{
       return repo.id == id ? { ...repo, favorites: !repo.favorites}: repo
     });
     setRepositories(newRepositories);
  }

  
  return(
    <>
      <ul>
        {repositories.map(repo =>(
          <li key={repo.id}>
          {repo.name}
          {repo.favorites && <span> ( favorito )</span>}
          <button onClick={()=> handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
     
    </>
  );
}