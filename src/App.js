import React, { useEffect, useState } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import LoadScreen from './components/LoadScreen';

function App() {

  let cards;
  let loadingscreen;

  let today = new Date().toISOString().slice(0, 10);
  let startDate = new Date();

  startDate.setDate(startDate.getDate() -10);
  startDate= startDate.toISOString().slice(0, 10);

  const [isLoading, setIsLoading] = useState(true);
  const [jsondata, setJsonData] = useState(null);

  let apiKey = 'aCSBwiT8VzB97iRDkf4CIHxlYN1aTpyM14YckrsE';
  let apiUrl;

  useEffect(() => {
    
    fetchPhoto(startDate);
  }, [])

  function fetchPhoto(start_Date) {
    apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${start_Date}&end_date=${today}`;

    fetch(apiUrl)
    .then((response) =>{
      if (!response.ok){
        throw new Error("Nothinig");
      }

      return response.json();
    })
    .then((data) =>{
      setJsonData(data);
      setIsLoading(false);
    })
    .catch((error) =>{
      console.error("can't fetch data");
    });
  }

  function createCards(arrayToLoop){
    let info = [];
    let object;


    for (const item of arrayToLoop){
      info.push(
        <div key={item.title} className='card'>
          <div className='card-info'>
            <ImageCard
              title={item.title}
              mediaType={item.media_type}
              image = {item.url}
              date={item.date}
              description={item.explanation}
            />
          </div>
        </div>
      );
    }
    return info;
  }

  function selectdate(dateValue){
    let newStartDate =new Date();
    newStartDate.setDate(new Date().getDate()- dateValue);
    newStartDate = newStartDate.toISOString().slice(0,10);

    setIsLoading(true);
    fetchPhoto(newStartDate);
  }
  if (!isLoading){
    loadingscreen = "none";
    cards = createCards(jsondata).reverse();
  } else {
    loadingscreen = "block"
  }
  return (
    <React.Fragment>
      <LoadScreen display={loadingscreen}/>
      <div className='container'>{cards}</div>
    </React.Fragment>
  );
}

export default App;
