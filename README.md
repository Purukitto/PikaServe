<br>

<p align="center">
  <a href="https://github.com/Purukitto/pokemon-api/">
    <img alt="pokemon-API" src="logo.png" width="500">
  </a>
</p>

![Development Stage](https://img.shields.io/badge/Development-v1.0-blue)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d02ef50bf3f444bea0c886ac70a322d7)](https://app.codacy.com/manual/purukitto/pokemon-api?utm_source=github.com&utm_medium=referral&utm_content=Purukitto/pokemon-api&utm_campaign=Badge_Grade_Dashboard)
[![License](https://img.shields.io/github/license/Purukitto/pokemon-api)](https://github.com/Purukitto/pokemon-api/blob/master/LICENSE.md)

Pokemon-api is a simple to use, no bull-sh*t API endpoint to query data available in [pokedex-data.json](https://github.com/Purukitto/pokemon-data.json) <br>
It can be currently queried at http://app.pokemon-api.xyz
<!-- if link  changes update on https://github.com/tobiasbueschel/awesome-pokemon -->

## `CURRENTLY UNDER DEVELOPMENT`
- [X] POST queries
- [X] Change host and move to custom DNS (v1)
- [ ] **[WIP]** Wiki
- [ ] FrontEnd Panel
- [ ] Develop interactions with the different queries
- [ ] Update [database](https://github.com/Purukitto/pokemon-data.json) to include Gen 8 (Looking for contributors)

<br>

# QUERIES

## GET

- ### /pokemon

Possible queries:
- #### /pokemon/all
  Retrieves the complete pokemon database <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/pokemon/all``
  
- #### /pokemon/random
  Retrives a random pokemon from the database <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/pokemon/random``
  
- #### /pokemon/{name}
  Searches the database and retrives pokemon named {name} <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/pokemon/pikachu``

- #### /pokemon/{pokedexID}
  Searches the database and retrives pokemon numbered {pokedexID} <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/pokemon/500``

<br>


- ### /moves

Possible queries:
- #### /moves/all
  Retrieves the complete moves database <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/moves/all``
  
- #### /moves/random
  Retrives a random move from the database <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/moves/random``
  
- #### /moves/{name}
  Searches the database and retrives move named {name} <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/moves/aerialace``

  <br>
  
- ### /items

Possible queries:
- #### /items/all
  Retrieves the complete items database <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/items/all``
  
- #### /items/random
  Retrives a random item from the database <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/items/random``
  
- #### /items/{name}
  Searches the database and retrives item named {name} <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/items/masterball``

<br>

- ### /types

Possible queries:
- #### /types/all
  Retrieves the complete types database <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/types/all``
  
- #### /types/random
  Retrives a random type from the database <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/types/random``
  
- #### /types/{name}
  Searches the database and retrives type named {name} <br>
  ``Sample Request URL : http://app.pokemon-api.xyz/types/fairy``
  
  <br>
  
  ## POST
  `Send JSON objects with input parameter`
  
- ### /pokemon
``POST Request URL : http://app.pokemon-api.xyz/pokemon/``

Possible queries:
- #### all
  Retrieves the complete pokemon database <br>
  ```
  Sample POST Request Body :
  {
     "input":"all"
  }
  ```
  
- #### random
  Retrives a random pokemon from the database <br>
   ```
  Sample POST Request Body :
  {
     "input":"random"
  }
  ```
  
- #### {name}
  Searches the database and retrives pokemon named {name} <br>
   ```
  Sample POST Request Body :
  {
     "input":"pikachu"
  }
  ```

- #### {pokedexID}
  Searches the database and retrives pokemon numbered {pokedexID} <br>
  ```
  Sample POST Request Body :
  {
     "input":"500"
  }
  ```

<br>


- ### /moves
``POST Request URL : http://app.pokemon-api.xyz/moves/``

Possible queries:
- #### all
  Retrieves the complete moves database <br>
  ```
  Sample POST Request Body :
  {
     "input":"all"
  }
  ```
  
- #### random
  Retrives a random move from the database <br>
  ```
  Sample POST Request Body :
  {
     "input":"random"
  }
  ```
  
- #### {name}
  Searches the database and retrives move named {name} <br>
  ```
  Sample POST Request Body :
  {
     "input":"aerial ace"
  }
  ```

  <br>
  
- ### /items
``POST Request URL :http://app.pokemon-api.xyz/items/``

Possible queries:
- #### all
  Retrieves the complete items database <br>
  ```
  Sample POST Request Body :
  {
     "input":"all"
  }
  ```
  
- #### random
  Retrives a random item from the database <br>
  ```
  Sample POST Request Body :
  {
     "input":"random"
  }
  ```
  
- #### {name}
  Searches the database and retrives item named {name} <br>
  ```
  Sample POST Request Body :
  {
     "input":"master ball"
  }
  ```

<br>

- ### /types
``POST Request URL : http://app.pokemon-api.xyz/types/``

Possible queries:
- #### all
  Retrieves the complete types database <br>
  ```
  Sample POST Request Body :
  {
     "input":"all"
  }
  ```
  
- #### random
  Retrives a random type from the database <br>
  ```
  Sample POST Request Body :
  {
     "input":"all"
  }
  ```
  
- #### {name}
  Searches the database and retrives type named {name} <br>
  ```
  Sample POST Request Body :
  {
     "input":"all"
  }
  ```
