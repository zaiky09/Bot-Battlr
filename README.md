# Bot Battlr

## Description
An application that allows a user to browse through a list of robots, view a robot's details, and enlist a bot into their bot army.

## Installation 
### Requirements
In order for you to use the content on this repo ensure you have the following:

A computer that runs on either of the following; (Windows 7+, Linux, Mac OS).
  - nodejs 9.0+
  - Visual Studio Code.
  - Live server extension.

## Link to webpage

              bot-battlr-beta.vercel.app/
              
### Alternative One
Open a terminal / command line interface on your computer.

  - Clone the repo by using the following to create a copy on your local machine:

              git clone git@github.com:zaiky09/Bot-Battlr.git
              
  - Change directory to the repo folder:

              cd Bot-Battlr
              
  - Open it in Visual Studio Code

              code .
              
### Alternative Two
On the top right corner of this page there is a button labelled Fork.

  - Click on the button to fork the repo to your own account.

  - Follow the process in Alternative One above.

  #### Remember to replace your username when cloning.

              git clone https://github.com/your-username-here/Bot-Battlr

### Running the application

To run the application, you can use the following steps to run the app.

  - Run;
  
          - npm install (to install required dependancies).

          - npm run dev (follow the link provided to open the application on your browser).
          
## Deliverables
A user should be able to:

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to my army by clicking on it. The selected bot should
  render in the `BotArmy` component. The bot can be enlisted only **once**.
  The bot **does not** disappear from the `BotCollection`.
- Release a bot from my army by clicking on it. The bot disappears from the
  `YourBotArmy` component.
- Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.

  
## Author 
          Zamil Mozamil Sheikh
      
## License    
          MIT
