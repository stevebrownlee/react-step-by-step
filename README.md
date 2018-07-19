# Nashville Software School Kennels

## Getting Started

1. Clone this repo and `cd` to the created directory.
1. Run `npm install` to get all dependencies.

## Running the API

Right now, the JSON file for the API only exists in the codebase for release 6.0 and later. Therefore, I suggest that you copy the file to another directory on your system and follow the steps below after that is done. Otherwise, when you checkout tag 1-5, the API will no longer work.

My bad. I should have thought of that when I committed release tag 1.0.

### Hotel Setup

If you have [Hotel](https://github.com/typicode/hotel) installed, follow these steps.

1. Run the following command from the directory containing the JSON file.
    ```
    hotel add 'json-server -p $PORT -w kennel.json' --out kennel.log --port 5002 --name 'react-step-by-step'
    ```
1. Start Hotel if it isn't running.
1. Visit the Hotel web page at [http://localhost:2000/](http://localhost:2000/) and start the server.

### Without Hotel

1. `cd` to the directory containing the JSON file.
1. Run `json-server -p 5002 -w kennel.json` in its own terminal session to start the API.

## Start the Application

Now run `npm start` in the project root directory in its own terminal.

## Instructor Guide

`get checkout 1.0` will take you to the first release to show students a very basic version of the application with hard-coded state so you can show students how `state` becomes `props` when sent to a child component.

Take a look at all of the [releases](https://github.com/stevebrownlee/react-step-by-step/releases) to see the progression of the code and the topics covered in each one.


