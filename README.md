# pokemon-api
 
[![Development Stage](https://img.shields.io/badge/Development-Beta_v1.1-blue)]()
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d02ef50bf3f444bea0c886ac70a322d7)](https://app.codacy.com/manual/purukitto/pokemon-api?utm_source=github.com&utm_medium=referral&utm_content=Purukitto/pokemon-api&utm_campaign=Badge_Grade_Dashboard)


Pokemon-api is an API endpoint to query data in [pokedex-data.json](https://github.com/Purukitto/pokemon-data.json) <br>
It can be curentely queried at https://pokemon-api.azurewebsites.net/


## `CURRENTLY UNDER DEVELOPMENT`

<br>

# QUERIES

## GET

- ### /pokemon

Possible queries:
- #### /pokemon/all
  Retrieves the complete pokemon database <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/pokemon/all``
  
- #### /pokemon/random
  Retrives a random pokemon from the database <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/pokemon/random``
  
- #### /pokemon/{name}
  Searches the database and retrives pokemon named {name} <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/pokemon/pikachu``

- #### /pokemon/{pokedexID}
  Searches the database and retrives pokemon numbered {pokedexID} <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/pokemon/500``

<br>


- ### /moves

Possible queries:
- #### /moves/all
  Retrieves the complete moves database <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/moves/all``
  
- #### /moves/random
  Retrives a random move from the database <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/moves/random``
  
- #### /moves/{name}
  Searches the database and retrives move named {name} <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/moves/aerialace``

  <br>
  
- ### /items

Possible queries:
- #### /items/all
  Retrieves the complete items database <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/items/all``
  
- #### /items/random
  Retrives a random item from the database <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/items/random``
  
- #### /items/{name}
  Searches the database and retrives item named {name} <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/items/masterball``

<br>

- ### /types

Possible queries:
- #### /types/all
  Retrieves the complete types database <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/types/all``
  
- #### /types/random
  Retrives a random type from the database <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/types/random``
  
- #### /types/{name}
  Searches the database and retrives type named {name} <br>
  ``Sample Request URL : https://pokemon-api.azurewebsites.net/types/fairy``
  
  <br>
  
  ## POST
  `Send JSON objects with input parameter`
  
- ### /pokemon
``POST Request URL : https://pokemon-api.azurewebsites.net/pokemon/``

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
``POST Request URL : https://pokemon-api.azurewebsites.net/moves/``

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
``POST Request URL : https://pokemon-api.azurewebsites.net/items/``

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
``POST Request URL : https://pokemon-api.azurewebsites.net/types/``

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
