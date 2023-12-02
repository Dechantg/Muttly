// GenerateMixedBreedPage.jsx


import React, { useState, useEffect } from 'react';
import DogBreedCardModal from './DogBreedCardModal';
import '../views/stylesheets/GenerateMixedBreedPage.scss';
import useSessionValidation from '../hooks/useSessionValidation';
import useApiFetch from '../hooks/apiFetchHook';
import Card from './Card';




const GenerateMixedBreedPage = () => {

  const [optionsA, setOptionsA] = useState([]);
  const [optionsB, setOptionsB] = useState([]);
  const [selectedBreedOne, setDogOneBreed] = useState(null);
  const [selectedBreedTwo, setDogTwoBreed] = useState(null);

  useSessionValidation();

  const { data: breedNames, error: fetchError } = useApiFetch('/api/allbreednames');

  useEffect(() => {
    console.log('Breed Names:', breedNames);
    console.log('Fetch Error:', fetchError);

  }, [breedNames, fetchError]);



  const handleDogOneSelection = (breed) => {
    setDogOneBreed(breed);
  };

  const handleDogTwoSelection = (breed) => {
    setDogTwoBreed(breed);
  };



  // const firstDog = data.map((data) => (
  //   <Card 
  //     num = {1} 
  //     image = {} 
  //     shedding = {} 
  //     drooling = {}
  //     protectiveness = {} 
  //     energy = {} 
  //     barking = {} 
  //     height = {[]} 
  //     weight = {[]}
  //     name = {} 
  //     description = {} 
  //   /> 
  // )) 

  // const secondDog = data.map((data) => (
  //   <Card 
  //     num = {2} 
  //     image = {} 
  //     shedding = {} 
  //     drooling = {}
  //     protectiveness = {} 
  //     energy = {} 
  //     barking = {} 
  //     height = {[]} 
  //     weight = {[]}
  //     name = {} 
  //     description = {} 
  //   /> 
  // ))


  
  return (
    <div className="generate-mixed-breed-container">
      {/* Top Navigation Bar */}
      {/* Body of the Page */}
      <h1>Muttly's Mixer</h1>
      <div className="page-body-generate">
        {/* Left Container with Dropdown */}
        <div className="left-container">
          <label htmlFor="leftDropdown">Select Dog Breed:</label>
          <select id="leftDropdown" onChange={(e) => handleDogOneSelection(e.target.value)}>
            {/* Render options for Dog Breeds */}
            <option value="labrador">Labrador</option>
            {/* Unsure how to reference all these db breednames within the component */}
          </select>
          {/* {firstDog} */}
          <Card num = {1}/>
        </div>
        {/* Middle Container with the Pawprint Button to Mix the Selected Breeds */}
        <div className="middle-container">
          <div className="generate-container">
            <img className='generate-button' src='../icons/paw_button.png'/>
            <p>Go Fetch that Mutt !</p>
            <img className ='merge-icon' src='../icons/merger.png'/>
          </div>
        </div>

        {/* Right Container with Dropdown */}
        <div className="right-container">
          <label htmlFor="rightDropdown">Select Dog Breed:</label>
          <select id="rightDropdown" onChange={(e) => handleDogTwoSelection(e.target.value)}>
            {/* Render options for Dog Breeds */}
            <option value="germansheperd">German Shepherd</option>
            {/* Unsure how to reference all these db breednames within the component */}
          </select>
          {/* {secondDog} */}
          <Card num = {2}/>
        </div>

        {/* Dog Breed Card Modal */}
        {/* {selectedBreed && <DogBreedCardModal breed={selectedBreed} />} */}
      </div>
    </div>
  );
};

export default GenerateMixedBreedPage; 

// [{"id":69,"image_link":"https://api-ninjas.com/images/dogs/irish_terrier.jpg","good_with_children":5,"good_with_other_dogs":1,"shedding":2,"grooming":1,"drooling":1,"coat_length":1,"good_with_strangers":3,"playfulness":3,"protectiveness":5,"trainability":3,"energy":3,"barking":3,"max_height_male":18,"max_height_female":18,"max_weight_male":27,"max_weight_female":25,"min_height_male":18,"min_height_female":18,"min_weight_male":27,"min_weight_female":25,"name":"Irish Terrier","description":"The Irish Terrier, a spirited and intelligent breed, features a wiry, red coat. Known for fearless and loyal nature, these dogs make lively and devoted companions. With a distinct appearance, regular grooming is necessary. The Irish Terrier confident demeanor and friendly temperament contribute to popularity, making them cherished pets for those seeking an energetic and loving canine friend."}]
// [{"id":104,"name":"Akita"},{"id":110,"name":"Alaskan Malamute"},{"id":62,"name":"American Bulldog"}]