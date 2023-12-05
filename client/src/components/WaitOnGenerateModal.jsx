import React, {useState,useEffect} from "react"; 
import '../views/stylesheets/WaitOnGenerateModal.scss'

function WaitOnGenerateModal() {
  const [ index, setIndex ] = useState(0);
  const loadingPhrases = [
    "Fetching your unique mutt! Paws for a moment.",
    "Creating a tail-wagging masterpiece! Sit tight.",
    "Unleashing the magic to craft your one-of-a-kind pup!",
    "Mixing breeds to cook up cuteness! Almost there!",
    "Building your paw-some mutt! Just a few more seconds.",
    "Generating your fur-bulous furry friend! Hold on!",
    "Crafting your doggone adorable mutt! Almost ready to bark!",
    "Combining breeds for the ultimate pup blend! Patience pays off.",
    "Creating a canine masterpiece! Hang tight, it's happening!",
    "Mixing and matching breeds for your paw-sitively adorable mutt!"
]; 

useEffect(() => {
  const interval = setInterval(() => {
    // Generate a random index for the loading phrases array
    const newIndex = Math.floor(Math.random() * loadingPhrases.length);
    setIndex(newIndex);
  }, 6000)
  return () => clearInterval(interval);
}, []);

  return (
    <div className="wait-modal-container">
      <div className="fade-in-container">
        <div className="wait-modal-background">
          <img className='modal-icon' src="../icons/dog-house-loading.png"/>
          <p>{loadingPhrases[index]}</p>
        </div>
      </div>
    </div>
  )
}

export default WaitOnGenerateModal