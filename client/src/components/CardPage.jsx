import React, {useState} from "react";
import Card from './Card'; 

function CardPage () {

  const { id } = match.params;
  const [card, setCard] = useState(null)

  // /api/generated/breedbyid

  const fetchGeneratedDog = async () => {
    try {
      if (id) {
        const response = await fetch(`http://localhost:8088/api/generated/breedbyid/${id}`);
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
  
        setCard(dogCard);
      }
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchGeneratedDog()

return (
  {card}
)

}

export default CardPage