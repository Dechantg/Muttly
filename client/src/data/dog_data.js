
const dogBreedData = [
  {
    "image_link": "https://api-ninjas.com/images/dogs/bearded_collie.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 3,
    "grooming": 4,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 4,
    "protectiveness": 3,
    "trainability": 3,
    "energy": 4,
    "barking": 5,
    "max_height_male": 22,
    "max_height_female": 22,
    "max_weight_male": 55,
    "max_weight_female": 55,
    "min_height_male": 21,
    "min_height_female": 21,
    "min_weight_male": 45,
    "min_weight_female": 45,
    "name": "Bearded Collie"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/border_collie.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 3,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 5,
    "protectiveness": 3,
    "trainability": 5,
    "energy": 5,
    "barking": 4,
    "max_height_male": 22,
    "max_height_female": 22,
    "max_weight_male": 55,
    "max_weight_female": 55,
    "min_height_male": 19,
    "min_height_female": 19,
    "min_weight_male": 30,
    "min_weight_female": 30,
    "name": "Border Collie"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/collie.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 3,
    "drooling": 2,
    "coat_length": 2,
    "good_with_strangers": 3,
    "playfulness": 4,
    "protectiveness": 3,
    "trainability": 4,
    "energy": 3,
    "barking": 5,
    "max_height_male": 26,
    "max_height_female": 26,
    "max_weight_male": 75,
    "max_weight_female": 65,
    "min_height_male": 24,
    "min_height_female": 24,
    "min_weight_male": 60,
    "min_weight_female": 50,
    "name": "Collie"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/golden_retriever.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 4,
    "grooming": 2,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 4,
    "protectiveness": 3,
    "trainability": 5,
    "energy": 3,
    "barking": 1,
    "max_height_male": 24,
    "max_height_female": 24,
    "max_weight_male": 75,
    "max_weight_female": 65,
    "min_height_male": 23,
    "min_height_female": 23,
    "min_weight_male": 65,
    "min_weight_female": 55,
    "name": "Golden Retriever"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/american_bulldog.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 2,
    "coat_length": 1,
    "trainability": 4,
    "barking": 1,
    "max_height_male": 28,
    "max_height_female": 24,
    "max_weight_male": 100,
    "max_weight_female": 80,
    "min_height_male": 20,
    "min_height_female": 20,
    "min_weight_male": 75,
    "min_weight_female": 60,
    "grooming": 0,
    "drooling": 0,
    "good_with_strangers": 0,
    "playfulness": 0,
    "protectiveness": 0,
    "energy": 0,
    "name": "American Bulldog"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/bulldog.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 3,
    "drooling": 3,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 4,
    "protectiveness": 3,
    "trainability": 4,
    "energy": 3,
    "barking": 2,
    "max_height_male": 15,
    "max_height_female": 15,
    "max_weight_male": 50,
    "max_weight_female": 40,
    "min_height_male": 14,
    "min_height_female": 14,
    "min_weight_male": 50,
    "min_weight_female": 40,
    "name": "Bulldog"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/french_bulldog.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 4,
    "shedding": 3,
    "grooming": 1,
    "drooling": 3,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 5,
    "protectiveness": 3,
    "trainability": 4,
    "energy": 3,
    "barking": 1,
    "max_height_male": 13,
    "max_height_female": 13,
    "max_weight_male": 28,
    "max_weight_female": 26,
    "min_height_male": 11,
    "min_height_female": 11,
    "min_weight_male": 20,
    "min_weight_female": 18,
    "name": "French Bulldog"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/american_hairless_terrier.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 1,
    "grooming": 1,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 3,
    "trainability": 5,
    "energy": 3,
    "barking": 3,
    "max_height_male": 16,
    "max_height_female": 16,
    "max_weight_male": 16,
    "max_weight_female": 16,
    "min_height_male": 12,
    "min_height_female": 12,
    "min_weight_male": 12,
    "min_weight_female": 12,
    "name": "American Hairless Terrier"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/american_staffordshire_terrier.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 2,
    "grooming": 1,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 3,
    "protectiveness": 5,
    "trainability": 3,
    "energy": 3,
    "barking": 3,
    "max_height_male": 19,
    "max_height_female": 19,
    "max_weight_male": 70,
    "max_weight_female": 55,
    "min_height_male": 18,
    "min_height_female": 18,
    "min_weight_male": 55,
    "min_weight_female": 40,
    "name": "American Staffordshire Terrier"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/boston_terrier.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 4,
    "shedding": 2,
    "grooming": 2,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 5,
    "protectiveness": 3,
    "trainability": 4,
    "energy": 4,
    "barking": 2,
    "max_height_male": 17,
    "max_height_female": 17,
    "max_weight_male": 25,
    "max_weight_female": 25,
    "min_height_male": 15,
    "min_height_female": 15,
    "min_weight_male": 12,
    "min_weight_female": 12,
    "name": "Boston Terrier"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/bull_terrier.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 1,
    "shedding": 3,
    "grooming": 2,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 4,
    "protectiveness": 3,
    "trainability": 3,
    "energy": 4,
    "barking": 3,
    "max_height_male": 22,
    "max_height_female": 22,
    "max_weight_male": 70,
    "max_weight_female": 70,
    "min_height_male": 21,
    "min_height_female": 21,
    "min_weight_male": 50,
    "min_weight_female": 50,
    "name": "Bull Terrier"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/irish_terrier.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 1,
    "shedding": 2,
    "grooming": 1,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 5,
    "trainability": 3,
    "energy": 3,
    "barking": 3,
    "max_height_male": 18,
    "max_height_female": 18,
    "max_weight_male": 27,
    "max_weight_female": 25,
    "min_height_male": 18,
    "min_height_female": 18,
    "min_weight_male": 27,
    "min_weight_female": 25,
    "name": "Irish Terrier"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/cavalier_king_charles_spaniel.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 2,
    "grooming": 2,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 3,
    "protectiveness": 3,
    "trainability": 4,
    "energy": 3,
    "barking": 3,
    "max_height_male": 13,
    "max_height_female": 13,
    "max_weight_male": 18,
    "max_weight_female": 18,
    "min_height_male": 12,
    "min_height_female": 12,
    "min_weight_male": 13,
    "min_weight_female": 13,
    "name": "Cavalier King Charles Spaniel"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/cocker_spaniel.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 3,
    "grooming": 4,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 3,
    "protectiveness": 3,
    "trainability": 4,
    "energy": 4,
    "barking": 3,
    "max_height_male": 15.5,
    "max_height_female": 15.5,
    "max_weight_male": 30,
    "max_weight_female": 25,
    "min_height_male": 14.5,
    "min_height_female": 14.5,
    "min_weight_male": 25,
    "min_weight_female": 20,
    "name": "Cocker Spaniel"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/english_springer_spaniel.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 4,
    "shedding": 3,
    "grooming": 2,
    "drooling": 3,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 4,
    "protectiveness": 3,
    "trainability": 5,
    "energy": 4,
    "barking": 3,
    "max_height_male": 20,
    "max_height_female": 20,
    "max_weight_male": 50,
    "max_weight_female": 40,
    "min_height_male": 20,
    "min_height_female": 20,
    "min_weight_male": 50,
    "min_weight_female": 40,
    "name": "English Springer Spaniel"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/labrador_retriever.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 4,
    "grooming": 2,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 5,
    "protectiveness": 3,
    "trainability": 5,
    "energy": 5,
    "barking": 3,
    "max_height_male": 24.5,
    "max_height_female": 24.5,
    "max_weight_male": 80,
    "max_weight_female": 70,
    "min_height_male": 22.5,
    "min_height_female": 22.5,
    "min_weight_male": 65,
    "min_weight_female": 55,
    "name": "Labrador Retriever"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/german_shepherd_dog.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 4,
    "grooming": 2,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 4,
    "protectiveness": 5,
    "trainability": 5,
    "energy": 5,
    "barking": 3,
    "max_height_male": 26,
    "max_height_female": 26,
    "max_weight_male": 90,
    "max_weight_female": 70,
    "min_height_male": 24,
    "min_height_female": 24,
    "min_weight_male": 65,
    "min_weight_female": 50,
    "name": "German Shepherd Dog"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/poodle_(miniature).jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 1,
    "grooming": 4,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 5,
    "protectiveness": 3,
    "trainability": 5,
    "energy": 4,
    "barking": 4,
    "max_height_male": 15,
    "max_height_female": 15,
    "max_weight_male": 15,
    "max_weight_female": 15,
    "min_height_male": 10,
    "min_height_female": 10,
    "min_weight_male": 10,
    "min_weight_female": 10,
    "name": "Poodle (Miniature)"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/poodle_(standard).jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 1,
    "grooming": 4,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 5,
    "protectiveness": 5,
    "trainability": 5,
    "energy": 4,
    "barking": 4,
    "max_height_male": 17,
    "max_height_female": 17,
    "max_weight_male": 70,
    "max_weight_female": 50,
    "min_height_male": 15,
    "min_height_female": 15,
    "min_weight_male": 60,
    "min_weight_female": 40,
    "name": "Poodle (Standard)"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/poodle_(toy).jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 1,
    "grooming": 4,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 5,
    "protectiveness": 3,
    "trainability": 5,
    "energy": 4,
    "barking": 4,
    "max_height_male": 10,
    "max_height_female": 10,
    "max_weight_male": 6,
    "max_weight_female": 6,
    "min_height_male": 8,
    "min_height_female": 8,
    "min_weight_male": 4,
    "min_weight_female": 4,
    "name": "Poodle (Toy)"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/beagle.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 3,
    "grooming": 2,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 4,
    "protectiveness": 2,
    "trainability": 3,
    "energy": 4,
    "barking": 4,
    "max_height_male": 16,
    "max_height_female": 15,
    "max_weight_male": 20,
    "max_weight_female": 30,
    "min_height_male": 14,
    "min_height_female": 13,
    "min_weight_male": 15,
    "min_weight_female": 20,
    "name": "Beagle"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/rottweiler.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 1,
    "drooling": 3,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 4,
    "protectiveness": 5,
    "trainability": 5,
    "energy": 3,
    "barking": 1,
    "max_height_male": 27,
    "max_height_female": 27,
    "max_weight_male": 135,
    "max_weight_female": 100,
    "min_height_male": 24,
    "min_height_female": 24,
    "min_weight_male": 95,
    "min_weight_female": 80,
    "name": "Rottweiler"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/yorkshire_terrier.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 1,
    "grooming": 5,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 4,
    "protectiveness": 5,
    "trainability": 4,
    "energy": 4,
    "barking": 4,
    "max_height_male": 8,
    "max_height_female": 8,
    "max_weight_male": 7,
    "max_weight_female": 7,
    "min_height_male": 7,
    "min_height_female": 7,
    "min_weight_male": 7,
    "min_weight_female": 7,
    "name": "Yorkshire Terrier"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/boxer.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 2,
    "grooming": 2,
    "drooling": 3,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 4,
    "protectiveness": 4,
    "trainability": 4,
    "energy": 4,
    "barking": 3,
    "max_height_male": 25,
    "max_height_female": 25,
    "max_weight_male": 80,
    "max_weight_female": 65,
    "min_height_male": 23,
    "min_height_female": 23,
    "min_weight_male": 65,
    "min_weight_female": 50,
    "name": "Boxer"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/dachshund.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 4,
    "shedding": 2,
    "grooming": 2,
    "drooling": 2,
    "coat_length": 2,
    "good_with_strangers": 4,
    "playfulness": 4,
    "protectiveness": 4,
    "trainability": 4,
    "energy": 3,
    "barking": 5,
    "max_height_male": 9,
    "max_height_female": 9,
    "max_weight_male": 32,
    "max_weight_female": 32,
    "min_height_male": 8,
    "min_height_female": 8,
    "min_weight_male": 16,
    "min_weight_female": 16,
    "name": "Dachshund"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/shih_tzu.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 1,
    "grooming": 4,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 3,
    "trainability": 4,
    "energy": 3,
    "barking": 3,
    "max_height_male": 10.5,
    "max_height_female": 10.5,
    "max_weight_male": 16,
    "max_weight_female": 16,
    "min_height_male": 9,
    "min_height_female": 9,
    "min_weight_male": 9,
    "min_weight_female": 9,
    "name": "Shih Tzu"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/siberian_husky.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 4,
    "grooming": 2,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 5,
    "protectiveness": 1,
    "trainability": 3,
    "energy": 5,
    "barking": 5,
    "max_height_male": 23.5,
    "max_height_female": 23.5,
    "max_weight_male": 60,
    "max_weight_female": 50,
    "min_height_male": 21,
    "min_height_female": 21,
    "min_weight_male": 45,
    "min_weight_female": 35,
    "name": "Siberian Husky"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/doberman_pinscher.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 4,
    "grooming": 1,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 4,
    "protectiveness": 5,
    "trainability": 5,
    "energy": 5,
    "barking": 3,
    "max_height_male": 28,
    "max_height_female": 28,
    "max_weight_male": 100,
    "max_weight_female": 90,
    "min_height_male": 26,
    "min_height_female": 26,
    "min_weight_male": 75,
    "min_weight_female": 60,
    "name": "Doberman Pinscher"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/australian_cattle_dog.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 1,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 4,
    "trainability": 4,
    "energy": 5,
    "barking": 1,
    "max_height_male": 20,
    "max_height_female": 20,
    "max_weight_male": 50,
    "max_weight_female": 50,
    "min_height_male": 18,
    "min_height_female": 18,
    "min_weight_male": 35,
    "min_weight_female": 35,
    "name": "Australian Cattle Dog"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/australian_shepherd.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 2,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 4,
    "protectiveness": 3,
    "trainability": 5,
    "energy": 5,
    "barking": 3,
    "max_height_male": 23,
    "max_height_female": 23,
    "max_weight_male": 65,
    "max_weight_female": 55,
    "min_height_male": 20,
    "min_height_female": 20,
    "min_weight_male": 50,
    "min_weight_female": 40,
    "name": "Australian Shepherd"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/shetland_sheepdog.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 3,
    "grooming": 3,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 2,
    "playfulness": 5,
    "protectiveness": 5,
    "trainability": 5,
    "energy": 4,
    "barking": 5,
    "max_height_male": 16,
    "max_height_female": 16,
    "max_weight_male": 25,
    "max_weight_female": 25,
    "min_height_male": 13,
    "min_height_female": 13,
    "min_weight_male": 15,
    "min_weight_female": 15,
    "name": "Shetland Sheepdog"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/great_dane.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 1,
    "drooling": 4,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 4,
    "protectiveness": 5,
    "trainability": 3,
    "energy": 4,
    "barking": 3,
    "max_height_male": 32,
    "max_height_female": 32,
    "max_weight_male": 175,
    "max_weight_female": 140,
    "min_height_male": 30,
    "min_height_female": 30,
    "min_weight_male": 140,
    "min_weight_female": 110,
    "name": "Great Dane"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/chihuahua.jpg",
    "good_with_children": 1,
    "good_with_other_dogs": 3,
    "shedding": 2,
    "grooming": 1,
    "drooling": 1,
    "coat_length": 2,
    "good_with_strangers": 2,
    "playfulness": 4,
    "protectiveness": 4,
    "trainability": 3,
    "energy": 4,
    "barking": 5,
    "max_height_male": 8,
    "max_height_female": 8,
    "max_weight_male": 6,
    "max_weight_female": 6,
    "min_height_male": 5,
    "min_height_female": 5,
    "min_weight_male": 4,
    "min_weight_female": 4,
    "name": "Chihuahua"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/shiba_inu.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 2,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 5,
    "trainability": 2,
    "energy": 3,
    "barking": 3,
    "max_height_male": 16.5,
    "max_height_female": 16.5,
    "max_weight_male": 23,
    "max_weight_female": 17,
    "min_height_male": 14.5,
    "min_height_female": 14.5,
    "min_weight_male": 23,
    "min_weight_female": 17,
    "name": "Shiba Inu"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/pomeranian.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 2,
    "grooming": 3,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 4,
    "trainability": 3,
    "energy": 3,
    "barking": 4,
    "max_height_male": 7,
    "max_height_female": 7,
    "max_weight_male": 7,
    "max_weight_female": 7,
    "min_height_male": 6,
    "min_height_female": 6,
    "min_weight_male": 3,
    "min_weight_female": 3,
    "name": "Pomeranian"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/bernese_mountain_dog.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 5,
    "grooming": 3,
    "drooling": 3,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 4,
    "protectiveness": 3,
    "trainability": 4,
    "energy": 4,
    "barking": 3,
    "max_height_male": 27.5,
    "max_height_female": 27.5,
    "max_weight_male": 115,
    "max_weight_female": 95,
    "min_height_male": 25,
    "min_height_female": 25,
    "min_weight_male": 80,
    "min_weight_female": 70,
    "name": "Bernese Mountain Dog"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/miniature_schnauzer.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 4,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 4,
    "protectiveness": 4,
    "trainability": 5,
    "energy": 3,
    "barking": 5,
    "max_height_male": 14,
    "max_height_female": 14,
    "max_weight_male": 20,
    "max_weight_female": 20,
    "min_height_male": 12,
    "min_height_female": 12,
    "min_weight_male": 11,
    "min_weight_female": 11,
    "name": "Miniature Schnauzer"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/havanese.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 2,
    "grooming": 3,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 5,
    "protectiveness": 3,
    "trainability": 4,
    "energy": 3,
    "barking": 4,
    "max_height_male": 11.5,
    "max_height_female": 11.5,
    "max_weight_male": 13,
    "max_weight_female": 13,
    "min_height_male": 8.5,
    "min_height_female": 8.5,
    "min_weight_male": 7,
    "min_weight_female": 7,
    "name": "Havanese"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/bullmastiff.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 1,
    "drooling": 3,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 5,
    "trainability": 4,
    "energy": 4,
    "barking": 1,
    "max_height_male": 27,
    "max_height_female": 27,
    "max_weight_male": 130,
    "max_weight_female": 120,
    "min_height_male": 25,
    "min_height_female": 25,
    "min_weight_male": 110,
    "min_weight_female": 100,
    "name": "Bullmastiff"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/newfoundland.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 3,
    "grooming": 2,
    "drooling": 5,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 3,
    "protectiveness": 5,
    "trainability": 3,
    "energy": 3,
    "barking": 1,
    "max_height_male": 28,
    "max_height_female": 28,
    "max_weight_male": 150,
    "max_weight_female": 120,
    "min_height_male": 28,
    "min_height_female": 28,
    "min_weight_male": 130,
    "min_weight_female": 100,
    "name": "Newfoundland"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/dalmatian.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 4,
    "grooming": 2,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 4,
    "protectiveness": 4,
    "trainability": 4,
    "energy": 4,
    "barking": 3,
    "max_height_male": 24,
    "max_height_female": 24,
    "max_weight_male": 70,
    "max_weight_female": 70,
    "min_height_male": 19,
    "min_height_female": 19,
    "min_weight_male": 45,
    "min_weight_female": 45,
    "name": "Dalmatian"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/maltese.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 1,
    "grooming": 4,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 4,
    "trainability": 3,
    "energy": 3,
    "barking": 3,
    "max_height_male": 9,
    "max_height_female": 9,
    "max_weight_male": 8.8,
    "max_weight_female": 8.8,
    "min_height_male": 7,
    "min_height_female": 7,
    "min_weight_male": 6.6,
    "min_weight_female": 6.6,
    "name": "Maltese"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/weimaraner.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 2,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 5,
    "protectiveness": 5,
    "trainability": 5,
    "energy": 5,
    "barking": 3,
    "max_height_male": 27,
    "max_height_female": 27,
    "max_weight_male": 90,
    "max_weight_female": 75,
    "min_height_male": 25,
    "min_height_female": 25,
    "min_weight_male": 70,
    "min_weight_female": 55,
    "name": "Weimaraner"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/basset_hound.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 2,
    "grooming": 3,
    "drooling": 4,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 3,
    "trainability": 3,
    "energy": 2,
    "barking": 4,
    "max_height_male": 15,
    "max_height_female": 14,
    "max_weight_male": 65,
    "max_weight_female": 65,
    "min_height_male": 12,
    "min_height_female": 11,
    "min_weight_male": 40,
    "min_weight_female": 40,
    "name": "Basset Hound"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/scottish_terrier.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 2,
    "shedding": 2,
    "grooming": 3,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 4,
    "protectiveness": 5,
    "trainability": 3,
    "energy": 3,
    "barking": 4,
    "max_height_male": 10,
    "max_height_female": 10,
    "max_weight_male": 22,
    "max_weight_female": 21,
    "min_height_male": 10,
    "min_height_female": 10,
    "min_weight_male": 19,
    "min_weight_female": 18,
    "name": "Scottish Terrier"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/rhodesian_ridgeback.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 2,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 5,
    "trainability": 4,
    "energy": 3,
    "barking": 2,
    "max_height_male": 27,
    "max_height_female": 27,
    "max_weight_male": 85,
    "max_weight_female": 70,
    "min_height_male": 25,
    "min_height_female": 25,
    "min_weight_male": 85,
    "min_weight_female": 70,
    "name": "Rhodesian Ridgeback"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/akita.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 1,
    "shedding": 3,
    "grooming": 3,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 2,
    "playfulness": 3,
    "protectiveness": 5,
    "trainability": 3,
    "energy": 4,
    "barking": 2,
    "max_height_male": 28,
    "max_height_female": 28,
    "max_weight_male": 130,
    "max_weight_female": 100,
    "min_height_male": 26,
    "min_height_female": 26,
    "min_weight_male": 100,
    "min_weight_female": 70,
    "name": "Akita"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/saint_bernard.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 2,
    "drooling": 5,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 5,
    "trainability": 3,
    "energy": 3,
    "barking": 1,
    "max_height_male": 30,
    "max_height_female": 30,
    "max_weight_male": 180,
    "max_weight_female": 140,
    "min_height_male": 28,
    "min_height_female": 28,
    "min_weight_male": 140,
    "min_weight_female": 120,
    "name": "Saint Bernard"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/pembroke_welsh_corgi.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 4,
    "shedding": 4,
    "grooming": 2,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 4,
    "protectiveness": 5,
    "trainability": 4,
    "energy": 4,
    "barking": 4,
    "max_height_male": 12,
    "max_height_female": 12,
    "max_weight_male": 31,
    "max_weight_female": 28,
    "min_height_male": 10,
    "min_height_female": 10,
    "min_weight_male": 24,
    "min_weight_female": 24,
    "name": "Pembroke Welsh Corgi"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/staffordshire_bull_terrier.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 2,
    "grooming": 2,
    "drooling": 3,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 4,
    "protectiveness": 5,
    "trainability": 5,
    "energy": 4,
    "barking": 3,
    "max_height_male": 16,
    "max_height_female": 16,
    "max_weight_male": 38,
    "max_weight_female": 34,
    "min_height_male": 14,
    "min_height_female": 14,
    "min_weight_male": 28,
    "min_weight_female": 24,
    "name": "Staffordshire Bull Terrier"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/west_highland_white_terrier.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 3,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 5,
    "protectiveness": 5,
    "trainability": 3,
    "energy": 4,
    "barking": 5,
    "max_height_male": 11,
    "max_height_female": 11,
    "max_weight_male": 20,
    "max_weight_female": 20,
    "min_height_male": 11,
    "min_height_female": 11,
    "min_weight_male": 15,
    "min_weight_female": 15,
    "name": "West Highland White Terrier"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/irish_setter.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 3,
    "grooming": 3,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 5,
    "protectiveness": 3,
    "trainability": 4,
    "energy": 5,
    "barking": 3,
    "max_height_male": 27,
    "max_height_female": 27,
    "max_weight_male": 70,
    "max_weight_female": 60,
    "min_height_male": 27,
    "min_height_female": 27,
    "min_weight_male": 70,
    "min_weight_female": 60,
    "name": "Irish Setter"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/alaskan_malamute.jpg",
    "good_with_children": 3,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 3,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 3,
    "protectiveness": 4,
    "trainability": 5,
    "energy": 4,
    "barking": 3,
    "max_height_male": 25,
    "max_height_female": 25,
    "max_weight_male": 85,
    "max_weight_female": 75,
    "min_height_male": 25,
    "min_height_female": 25,
    "min_weight_male": 85,
    "min_weight_female": 75,
    "name": "Alaskan Malamute"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/portuguese_water_dog.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 4,
    "shedding": 2,
    "grooming": 4,
    "drooling": 2,
    "coat_length": 1,
    "good_with_strangers": 4,
    "playfulness": 5,
    "protectiveness": 4,
    "trainability": 5,
    "energy": 5,
    "barking": 3,
    "max_height_male": 23,
    "max_height_female": 23,
    "max_weight_male": 60,
    "max_weight_female": 50,
    "min_height_male": 20,
    "min_height_female": 20,
    "min_weight_male": 42,
    "min_weight_female": 35,
    "name": "Portuguese Water Dog"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/samoyed.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 3,
    "shedding": 3,
    "grooming": 3,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 5,
    "protectiveness": 4,
    "trainability": 4,
    "energy": 4,
    "barking": 5,
    "max_height_male": 23.5,
    "max_height_female": 23.5,
    "max_weight_male": 65,
    "max_weight_female": 50,
    "min_height_male": 21,
    "min_height_female": 21,
    "min_weight_male": 45,
    "min_weight_female": 35,
    "name": "Samoyed"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/whippet.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 5,
    "shedding": 2,
    "grooming": 1,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 3,
    "playfulness": 4,
    "protectiveness": 3,
    "trainability": 3,
    "energy": 4,
    "barking": 1,
    "max_height_male": 22,
    "max_height_female": 22,
    "max_weight_male": 40,
    "max_weight_female": 40,
    "min_height_male": 19,
    "min_height_female": 19,
    "min_weight_male": 25,
    "min_weight_female": 25,
    "name": "Whippet"
  },
  {
    "image_link": "https://api-ninjas.com/images/dogs/pug.jpg",
    "good_with_children": 5,
    "good_with_other_dogs": 4,
    "shedding": 4,
    "grooming": 2,
    "drooling": 1,
    "coat_length": 1,
    "good_with_strangers": 5,
    "playfulness": 5,
    "protectiveness": 3,
    "trainability": 4,
    "energy": 3,
    "barking": 1,
    "max_height_male": 13,
    "max_height_female": 13,
    "max_weight_male": 18,
    "max_weight_female": 18,
    "min_height_male": 10,
    "min_height_female": 10,
    "min_weight_male": 14,
    "min_weight_female": 14,
    "name": "Pug"
  }
];

export default dogBreedData;
