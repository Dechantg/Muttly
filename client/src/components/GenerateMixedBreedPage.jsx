// GenerateMixedBreedPage.jsx


import React, { useState, useEffect } from 'react';


import DogBreedCardModal from './DogBreedCardModal';

import '../views/stylesheets/GenerateMixedBreedPage.scss';

import Card from './Card';

const GenerateMixedBreedPage = () => {

  const [dogOptions, setOptions] = useState([]);
  const [selectedBreedOne, setDogOneBreed] = useState(null);
  const [selectedBreedTwo, setDogTwoBreed] = useState(null);
  const [optionsList, setOptionsList] = useState([]);
  const [firstDog, setFirstDog]= useState(null);
  const [secondDog, setSecondDog]= useState(null);

  useEffect(() => {
    const updatedOptionsList = dogOptions.map((dog) => {
      return <option key ={dog.id} value={dog.name}>
        {dog.name}
      </option>
    })
     setOptionsList(updatedOptionsList)
  },[dogOptions])

  useEffect(() => {
    if (selectedBreedTwo) {
  const dogChoice = dogOptions.find(dog => dog.name === selectedBreedTwo);
  console.log(dogChoice.id);

  const fetchDataSecondDog = async () => {
    try {
      if (dogChoice) {
        const response = await fetch(`http://localhost:8088/api/breedbyid/${dogChoice.id}`);
        const data = await response.json();
        console.log(data[0]);
        const newDogData = data[0];
  
        // Directly create the Card component with newDogData
        const dogCard = (
          <Card 
            num={2} 
            image={newDogData.image_link} 
            shedding={{shedding: newDogData.shedding}} 
            drooling={ {drooling:newDogData.drooling}}
            protectiveness={{protectiveness: newDogData.protectiveness}} 
            energy={{energy:newDogData.energy}} 
            barking={{barking: newDogData.barking}} 
            height={[
              newDogData.max_height_female,
              newDogData.max_height_male,
              newDogData.min_height_female,
              newDogData.min_height_male,
            ]} 
            weight={[ 
              newDogData.max_weight_female,
              newDogData.max_weight_male,
              newDogData.min_weight_female,
              newDogData.min_weight_male
            ]}
            name={newDogData.name} 
            description={newDogData.description} 
          />
        );
  
        // Update the state to render the Card
        setSecondDog(dogCard);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Call fetchData if dogChoice is available
  dogChoice && fetchDataSecondDog();
}}, [selectedBreedTwo]);

useEffect(() => {
  if (selectedBreedOne) {
const dogChoice = dogOptions.find(dog => dog.name === selectedBreedOne);
console.log(dogChoice.id);

const fetchDataFirstDog = async () => {
  try {
    if (dogChoice) {
      const response = await fetch(`http://localhost:8088/api/breedbyid/${dogChoice.id}`);
      const data = await response.json();
      console.log(data[0]);
      const newDogData = data[0];

      const dogCard = (
        <Card 
          num={1} 
          image={newDogData.image_link} 
          shedding={{shedding: newDogData.shedding}} 
          drooling={ {drooling:newDogData.drooling}}
          protectiveness={{protectiveness: newDogData.protectiveness}} 
          energy={{energy:newDogData.energy}} 
          barking={{barking: newDogData.barking}} 
          height={[
            newDogData.max_height_female,
            newDogData.max_height_male,
            newDogData.min_height_female,
            newDogData.min_height_male,
          ]} 
          weight={[ 
            newDogData.max_weight_female,
            newDogData.max_weight_male,
            newDogData.min_weight_female,
            newDogData.min_weight_male
          ]}
          name={newDogData.name} 
          description={newDogData.description} 
        />
      );

      setFirstDog(dogCard);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call fetchData if dogChoice is available
dogChoice && fetchDataFirstDog();
}}, [selectedBreedOne]);


  const handleDogOneSelection = (breed) => {
    setDogOneBreed(breed);
  };

  const handleDogTwoSelection = (breed) => {
    setDogTwoBreed(breed);
  };


  const fetchData = async () => {
    try {
      const responce = await fetch(`http://localhost:8088/api/allbreednames`);
      const data = await responce.json();
      setOptions(data)
      console.log("breed names object returned from api server:", data);
      
    } catch (error) {
      console.error('Error fetch data', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className="generate-mixed-breed-container">
        <h1>Muttly's Mixer</h1>
        <div className="page-body-generate">
          <div className="left-container">
            <label htmlFor="leftDropdown">Select Dog Breed:</label>
            <select id="leftDropdown" onChange={(e) => handleDogOneSelection(e.target.value)}>
              <option>Pick a Dog</option>
              {optionsList}
            </select>
            {firstDog || <Card num = {1}/>}
          </div>
          <div className="middle-container">
            <div className="generate-container">
              <img className='generate-button' src='../icons/paw_button.png'/>
              <p>Go Fetch that Mutt !</p>
              <img className ='merge-icon' src='../icons/merger.png'/>
            </div>
        </div>
        <div className="right-container">
          <label htmlFor="rightDropdown">Select Dog Breed:</label>
          <select id="rightDropdown" onChange={(e) => handleDogTwoSelection(e.target.value)}>
          <option>Pick a Dog</option>
            {optionsList}
          </select>
          {secondDog || <Card num = {2}/>}
        </div>
      </div>
  </div>
  );
};

export default GenerateMixedBreedPage; 

