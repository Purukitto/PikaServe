<p align="center">  <a href="https://purukitto.github.io/PikaServe/">
    <img alt="PikaServe" src="logo.png" width="728">
  </a>
</p>


<div align="center">

PikaServe is a simple to use, no bull-sh*t API endpoint to query data available in [pokedex-data.json](https://github.com/Purukitto/pokemon-data.json) <br>
It can be currently queried at https://api.pikaserve.xyz/


[![Documentation](https://img.shields.io/badge/wiki-updated-green)](https://purukitto.github.io/PikaServe/)
![Development Stage](https://img.shields.io/badge/Version-v1.4.1-blue)

[![Issues](https://img.shields.io/github/issues/Purukitto/PikaServe)](https://github.com/Purukitto/PikaServe/issues)
[![License](https://img.shields.io/github/license/Purukitto/PikaServe)](https://github.com/Purukitto/PikaServe/blob/master/LICENSE.md)

</div>

## API Usage
### Get started by getting a random Pokemon!
Using the language / framework of your choice:
- Load [https://api.pikaserve.xyz/pokemon/random](https://api.pikaserve.xyz/pokemon/random)
- Parse the response body
- Load it's the required parameters (e.g. `body.id` or `body.name.english`)

Please visit the [Wiki](https://purukitto.github.io/PikaServe/) for more information and different endpoints

## Why?
There are hundred's of pokemon APIs already, with 20,000 ways to use and god knows how much incomprehensible data. This projects aim is to be as simple and straightforward to use as possible. I have a self collected, independent and unique database, which means I have complete control on every step on interaction. Simple enough to be used, forked, edited and self-hosted as per personal preferences, I am are sure this API is for someone out there.

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

[GNU GPLv3](https://github.com/Purukitto/PikaServe/blob/master/LICENSE) © Pulkit Sambhavi Singh (https://github.com/Purukitto/)

##### This project was made for educational purposes, do consider supporting development by contributing or donating if you like the project

<hr>

##### Pokémon and Pokémon character names are trademarks of Nintendo and The Pokémon Company.
