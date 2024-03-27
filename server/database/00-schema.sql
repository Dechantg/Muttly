DROP TABLE IF EXISTS dog_breeds CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS generated_breeds CASCADE;
DROP TABLE IF EXISTS liked_generated_breeds CASCADE;
DROP TABLE IF EXISTS new_breed_queries CASCADE;

DROP SEQUENCE IF EXISTS generated_breeds_seq;
DROP SEQUENCE IF EXISTS dog_breeds_seq;
DROP SEQUENCE IF EXISTS users_seq;
DROP SEQUENCE IF EXISTS liked_generated_breeds_seq;
DROP SEQUENCE IF EXISTS new_breed_queries_seq;


CREATE SEQUENCE generated_breeds_seq START WITH 300;
CREATE SEQUENCE dog_breeds_seq START WITH 75;
CREATE SEQUENCE users_seq START WITH 80;
CREATE SEQUENCE liked_generated_breeds_seq START WITH 300;
CREATE SEQUENCE new_breed_queries_seq START WITH 300;




CREATE TABLE dog_breeds (
  id INTEGER DEFAULT nextval('dog_breeds_seq') PRIMARY KEY,
  image_link TEXT,
  good_with_children SMALLINT,
  good_with_other_dogs SMALLINT,
  shedding SMALLINT,
  grooming SMALLINT,
  drooling SMALLINT,
  coat_length SMALLINT,
  good_with_strangers SMALLINT,
  playfulness SMALLINT,
  protectiveness SMALLINT,
  trainability SMALLINT,
  energy SMALLINT,
  barking SMALLINT,
  max_height_male SMALLINT,
  max_height_female SMALLINT,
  max_weight_male SMALLINT,
  max_weight_female SMALLINT,
  min_height_male SMALLINT,
  min_height_female SMALLINT,
  min_weight_male SMALLINT,
  min_weight_female SMALLINT,
  name VARCHAR(50) NOT NULL,
  description TEXT
);

CREATE TABLE users (
  id INTEGER DEFAULT nextval('users_seq') PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

CREATE TABLE generated_breeds (
  id INTEGER DEFAULT nextval('generated_breeds_seq') PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  name VARCHAR(100),
  good_with_children SMALLINT,
  good_with_other_dogs SMALLINT,
  shedding SMALLINT,
  grooming SMALLINT,
  drooling SMALLINT,
  coat_length SMALLINT,
  good_with_strangers SMALLINT,
  playfulness SMALLINT,
  protectiveness SMALLINT,
  trainability SMALLINT,
  energy SMALLINT,
  barking SMALLINT,
  max_height_male SMALLINT,
  max_height_female SMALLINT,
  max_weight_male SMALLINT,
  max_weight_female SMALLINT,
  min_height_male SMALLINT,
  min_height_female SMALLINT,
  min_weight_male SMALLINT,
  min_weight_female SMALLINT,
  description TEXT,
  generated_photo_link TEXT
);

CREATE TABLE liked_generated_breeds (
  id INTEGER DEFAULT nextval('liked_generated_breeds_seq') PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  generated_breeds_id INTEGER REFERENCES generated_breeds(id) ON DELETE CASCADE,
  like_status BOOLEAN
);

CREATE TABLE new_breed_queries (
  id INTEGER DEFAULT nextval('new_breed_queries_seq') PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  generated_breeds_id INTEGER REFERENCES generated_breeds(id) ON DELETE CASCADE,
  breed_one INTEGER REFERENCES dog_breeds(id) ON DELETE CASCADE,
  breed_two INTEGER REFERENCES dog_breeds(id) ON DELETE CASCADE,
  leo_gen_record VARCHAR(100) DEFAULT null,
  openai_thread_id VARCHAR(100) DEFAULT null
);

