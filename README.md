<h1 align="center">pokemon-api</h1>


<div align="center">

Pokemon-api is a simple to use, no bull-sh*t API endpoint to query data available in [pokedex-data.json](https://github.com/Purukitto/pokemon-data.json) <br>
It can be currently queried at https://app.pokemon-api.xyz

<p align="center">  <a href="https://purukitto.github.io/pokemon-api/">
    <img alt="pokemon-API" src="wiki.png" width="728">
  </a>
</p>


[![Documentation](https://img.shields.io/badge/wiki-updated-red)](https://purukitto.github.io/pokemon-api/)
![Development Stage](https://img.shields.io/badge/version-v1.2.5-blue)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d02ef50bf3f444bea0c886ac70a322d7)](https://app.codacy.com/manual/purukitto/pokemon-api?utm_source=github.com&utm_medium=referral&utm_content=Purukitto/pokemon-api&utm_campaign=Badge_Grade_Dashboard)

![Build](https://circleci.com/gh/Purukitto/pokemon-api.svg?style=shield)
[![Issuies](https://img.shields.io/github/issues/Purukitto/pokemon-api)](https://github.com/Purukitto/pokemon-api/issues)
[![Known Vulnerabilities](https://snyk.io/test/github/Purukitto/pokemon-api/badge.svg)](https://snyk.io/test/github/Purukitto/pokemon-api)
[![License](https://img.shields.io/github/license/Purukitto/pokemon-api)](https://github.com/Purukitto/pokemon-api/blob/master/LICENSE.md)

</div>

## API Usage
### Get started by getting a random Pokemon!
Using the language / framework of your choice:
- Load [https://app.pokemon-api.xyz/pokemon/random](https://app.pokemon-api.xyz/pokemon/random)
- Parse the response body
- Load it's the required parameters (e.g. `body.id` or `body.name.english`)

Please visit the [Wiki](https://purukitto.github.io/pokemon-api/) for more information and different endpoints

## Why?
There are hundred's of pokemon APIs already, with 20,000 ways to use and god knows how much incomprehensible data. This projects aim is to be as simple and straightforward to use as possible. Simple enough to be used, forked, edited and self-hosted as per personal preferences.

<!-- if link  changes update on https://github.com/tobiasbueschel/awesome-pokemon -->

### `Active Development Goals`
- [X] POST queries
- [X] Change host and move to custom DNS (v1)
- [X] Wiki
  - [X] Add Usage Examples (Needs contribution)
    - [X] Node.js
    - [X] Python
- [X] Implement basic rate limits (For DDoS protection)
- [X] Implement dark/light theme for website
- [ ] **[WIP]** FrontEnd Panel
- [ ] Show closest match suggestions
- [ ] Develop interactions with the different queries
- [ ] Update [database](https://github.com/Purukitto/pokemon-data.json) to include Gen 8 (Looking for contributors)

## Self host
Why to self host?
- You might want to add or modify some endpoints for your specific use case.
- Biggest advantage will be low latency and you can freely remove the rate limits

### Steps for self hosting
- Download the release .rar from this [link](https://drive.google.com/drive/folders/1uoYEMtLcPNEq_rI7MsCsSzIpu9vO405F?usp=sharing)
##### Download the lastest release or any other specefic release (upwards of v1.1.2). See [Version History](/versionHistory.md) for changes.
- Export the .rar you downloaded using your software of choice
- Open the terminal in the exported folder or navigate to the folder in the terminal or IDE of your choice
- Use `npm install` and wait for the dependencies to install
- Then do `npm start` and wait for the script to run
- Done, now you can query the code on http://localhost:3000/ (http://localhost:3000/pokemon/random)

#### To remove/edit rate limiting on self hosted release
- Open `app.js` with the editor of your choice
- Find the `// RATE LIMITING START` section
- Edit the values to your requirement
- To  completely remove the rate limiting, simply comment out code section between `// RATE LIMITING START` and `// RATE LIMITING END`

## Contributing
### How to Contribute?
* Make sure that your changes do not conflict with the core files (changing file directories will require a change in all called paths)
* Follow the original code structure
* Refactoring contributions are welcome, explicitly mention "[Refactor]" in your pull request
* Give a few days to review PRs, code reviews are welcome 

See [Contributing.md](/Contributing.md) for more details
<hr>

## License

[GNU GPLv3](https://github.com/Purukitto/pokemon-api/blob/master/LICENSE) © Pulkit Sambhavi Singh (https://github.com/Purukitto/)

##### This project was made for educational purposes, do consider supporting development by contributing or donating if you like the project

<hr>

##### Pokémon and Pokémon character names are trademarks of Nintendo and The Pokémon Company.
