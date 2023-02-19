# AutotestsChatGPT

## Description

Project was written mostly by using chatGPT with some adjustments due to lack of 
ChatGPT knowledge of updates over 2021 nevertheless they can be updated and configured
again by using right prompts.

## Goals to be achieved

* Understanding pytest structure &check;
* Understanding cypress structure &check;
* Multi module management in IntellijIdea &check;
* Creating sample tests for Cypress &check;
* Creating sample tests for Python &check;
* Understanding Docker basics &check;
* Creating images for 2 different modules since they can be updated independently &check;
* Creating docker-compose.yml to merge image running &check;
* Creating GitHub Action to update images separately (Partly finished) &cross;

## Project context given to ChatGPT

Project context.
Project goal is to collect information how good ChatGPT is for automation purposes.
This project is written from scratch using ChatGPT model.
Technologies chosen were based on least informed technologies for me personally. To measure how helpful ChatGPT would be in understanding those technologies.

Technologies used:
1. Cypress for FE tests under cypress_test module
2. Pytest for BE tests under PythonTest module


Answering on the way tests will be run.
1. `npm run cypress:open` will be used to run test locally during debug process
2. `pytest` will be used to run backend tests using CLI

Answering following questions of yours
1. How Cypress tests are structured and how they interact with the application under test
   I've sent all my project structure.
   They will be interacting with a demo site for testing purposes https://demoqa.com/
2. How the Pytest tests are structured and how they interact with the back-end system
   I've sent all my project structure
   They will be interacting with a demo site for testing purposes https://demoqa.com/ using REST API


## Getting started

### Python Tests

Run from ./PythonTests module:

Install dependencies: ```pip install -r requirement.txt```

Run tests: ```pytest```

### Cypress tests

Run from ./PythonTests module:

Install dependencies: ```npm install cypress```

Run tests: ```npx cypress run```

## Docker images

[Python Tests](https://hub.docker.com/repository/docker/kuwatain/gpt-tests-python/general)

[Cypress Tests](https://hub.docker.com/repository/docker/kuwatain/gpt-tests-cypress/general)

## Docker image download and run tests in docker command:
```
curl -L -o docker-compose.yml https://raw.githubusercontent.com/Kuwatain/AutotestsChatGPT/main/docker-compose.yml && docker-compose up
```
