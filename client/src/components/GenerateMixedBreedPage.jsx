// GenerateMixedBreedPage.jsx


import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import DogBreedCardModal from './DogBreedCardModal';
import '../views/stylesheets/GenerateMixedBreedPage.scss';
import useSessionValidation from '../hooks/useSessionValidation';
// import useApiFetch from '../hooks/apiFetchHook';
import Card from './Card';

const GenerateMixedBreedPage = () => {

  const [dogOptions, setOptions] = useState([]);
  const [selectedBreedOne, setDogOneBreed] = useState(null);
  const [selectedBreedTwo, setDogTwoBreed] = useState(null);
  const [optionsList, setOptionsList] = useState([]);
  const [firstDog, setFirstDog]= useState(null);
  const [secondDog, setSecondDog]= useState(null);
  const [dogOneId, setIdOne] = useState(null)
  const [dogTwoId, setIdTwo] = useState(null)
  const [DogModal, setDogModal] = useState(null)

  const { isValid, userId, isLoading } = useSessionValidation();

  const navigate = useNavigate();

  console.log("from the genrate page valid", isValid)

  useEffect(() => {
    console.log("Before navigation. isValid:", isValid);
    if (!isLoading && !isValid) {
      console.log("Navigating to /");
      navigate('/');
    }
    console.log("After navigation. isValid:", isValid);
  }, [isLoading, isValid, navigate]);



  useEffect(() => {
    // isValid ? console.log('working') : navigate('/about');

    const updatedOptionsList = dogOptions.map((dog) => {
      return <option key ={dog.id} value={dog.name}>
        {dog.name}
      </option>
    })
     setOptionsList(updatedOptionsList)
  },[dogOptions])


  useEffect(() => {
    if (selectedBreedOne) {
  const dogChoice = dogOptions.find(dog => dog.name === selectedBreedOne);
  setIdOne(dogChoice.id)
  const fetchDataFirstDog = async () => {
    try {
      if (dogChoice) {
        const response = await fetch(`http://localhost:8088/api/breedbyid/${dogChoice.id}`);
        const data = await response.json();
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
  
  dogChoice && fetchDataFirstDog();
  }}, [selectedBreedOne]);

  useEffect(() => {
    if (selectedBreedTwo) {
  const dogChoice = dogOptions.find(dog => dog.name === selectedBreedTwo);
  setIdTwo(dogChoice.id)
  const fetchDataSecondDog = async () => {
    try {
      if (dogChoice) {
        const response = await fetch(`http://localhost:8088/api/breedbyid/${dogChoice.id}`);
        const data = await response.json();
        const newDogData = data[0];

        const dogCard = (
          <Card 
            num={2} 
            image={newDogData.image_link} 
            shedding={{shedding: newDogData.shedding}} 
            drooling={{drooling:newDogData.drooling}}
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

        setSecondDog(dogCard);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  dogChoice && fetchDataSecondDog();
}}, [selectedBreedTwo]);

  const handleDogOneSelection = (breed) => {
    setDogOneBreed(breed);
  };

  const handleDogTwoSelection = (breed) => {
    setDogTwoBreed(breed);
  };

  const handleClickToGenerate = () => {
    if (dogOneId && dogTwoId) {
      let modal = null
      setDogModal(null)
      const fetchFusion = async () => {
        try {
          const response = await fetch(`http://localhost:8088/api/generatebreed?dogOneId=${dogOneId}&dogTwoId=${dogTwoId}`, {
            credentials: 'include',
          });
          const data = await response.json();
          console.log("here is the data from the generate click", data)
          const dogData = data.muttyResult[0]
          console.log('extrastats',data.extraStats)
          const mateData = data.extraStats
          modal=
          <DogBreedCardModal
          id = {dogData.id}
          image={dogData.generated_photo_link}
          shedding={{shedding: dogData.shedding}}
          drooling={{drooling: dogData.drooling}}
          protectiveness={{protectiveness: dogData.protectiveness}}
          energy={{energy: dogData.energy}}
          barking={{barking: dogData.barking}} 
          height={[
            dogData.max_height_female,
            dogData.max_height_male,
            dogData.min_height_female,
            dogData.min_height_male,
          ]} 
          weight={[ 
            dogData.max_weight_female,
            dogData.max_weight_male,
            dogData.min_weight_female,
            dogData.min_weight_male
          ]}
          name={dogData.name} 
          description={dogData.description} 
          dog1 = {mateData.breedOne}
          dog2 = {mateData.breedTwo}
          />
          setDogModal(modal)
        } catch (error) {data.
          console.error('Error fetching data', error);
        }
      };
      fetchFusion();
    }
  };
  


  const fetchData = async () => {
    try {
      const responce = await fetch(`http://localhost:8088/api/allbreednames`)
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
            <select id="leftDropdown" placeholder= "Pick a Dog" onChange={(e) => handleDogOneSelection(e.target.value)}>
              <option value="" disabled selected>Pick a Dog</option>
              {optionsList}
            </select>
            {firstDog || <Card num = {1}/>}
          </div>
          <div className="middle-container">
            <div className="generate-container">
              <img className='generate-button' src='../icons/paw_button.png' onClick={handleClickToGenerate}/>
              <p>Go Fetch that Mutt !</p>
              <img className ='merge-icon' src='../icons/merger.png'/>
            </div>
        </div>
        <div className="right-container">
          <select id="rightDropdown" onChange={(e) => handleDogTwoSelection(e.target.value)}>
          <option value="" disabled selected>Pick a Dog</option>
            {optionsList}
          </select>
          {secondDog || <Card num = {2}/>}
        </div>
      </div>
      {DogModal}
  </div>
  );
};


export default GenerateMixedBreedPage; 

