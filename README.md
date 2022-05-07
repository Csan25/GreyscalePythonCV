// Created by Chetan Chaku  
// USC ID : 3896899942  
  
ISI Summer Internship with VIMAL  
  
This application allows users to upload a video file to the Angular UI with preview and playback and allows for conversion of the video to grayscale on the click of a button.  
On button click, the video file is sent to a flask backend in a POST request where it is processed frame by frame and converted into grayscale and saved.  
From there the processed file is sent back to the angular frontend where it can be played by the user.  
  
  
SETUP INSTRUCTIONS:  
  
--> Backend  
-> Create a new python environment and activte it  
-> cd into FlaskBackend folder and run - "pip install requirements.txt"  
  
--> Frontend   
-> Ensure you have node.js installed  
-> run the following command in your terminal to install angular cli - "npm install -g @angular/cli@10"  
-> cd into AngularFrontend/greyscale and run the follwoing to install all dependencies - "npm install"  
  
  
  
INSTRUCTIONS TO RUN THE PROGRAM:  
  
--> Start backend flask server  
    -> Open a new terminal and cd into FlaskBackend  
    -> First setup the required evn variable in the terminal by typing :   
        $env:FLASK_APP = "restservice.py"  
        $env:FLASK_ENV = "development"  
    -> Run the following in the same terminal to start the flask server:  
        python -m flask run --port 4433  
  
--> Strat frontend angular server  
    -> Open a new terminal and cd into AngularFrontend/greyscale  
    -> Run the following in the terminal to start agular server:  
        ng serve --open --port 8080  
  
--> Open your browser and hit http://localhost:8080/ and you should be able to run the program.  
