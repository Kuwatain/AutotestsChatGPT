# AutotestsChatGPT

Project was written mostly by using chatGPT with some adjustments due to lack of 
ChatGPT knowledge of updates over 2021.

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


## Docker image download and run tests in docker command:
```
curl -L -o docker-compose.yml https://raw.githubusercontent.com/Kuwatain/AutotestsChatGPT/main/docker-compose.yml && docker-compose up
```
