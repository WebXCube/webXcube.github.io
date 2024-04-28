---
title: "WebXCube: A Trial Run"
tags:
  - JavaScript
  - Visualisation
  - ThreeJS
  - ESP32CDev
authors:
  - name: Alex Hales
    orcid: 0000-0001-8395-6056 does this need to change?
    affiliation: "1"
affiliations:
  - name: Herberger Institute for Design and the Arts, Arizona State University, USA
    index: 1
date: 3 May 2024
bibliography: paper.bib
---

# Summary

WebXCube incorportates an ESP32 Module with three.js to rotate 3d modules that appear in the browser. There are 3 main parts to this project. 1. The arudino code compiled onto the ESP32C Dev Module to collect motion data and transmit it through bluetooth. 2. The index.html file, from which the user interacts to initiate the bluetooth pairing process that will connect the ESP32C Dev Module to the site and render the scene. 3. The main.js file that imports three.js into the project, loads the glb flie, renders the scene (inlcuding camera, lights, and animation), and handles the bluetooth connection. If everything is compiled correctly, the ESP32 device is on, any users should see the glb file rotate onscreen. 

# Project Description

The goal of the project was to learn how to use open source products and code to create something. The created product, WebXCube, is an interactive web-bluetooth device used to rotate 3d models that appear in the browser. A cube was printed, with a lid to house the ESP32C Dev Module to track its rotation. This rotation data, collected by the ESP32C Dev Module was printed to the serial monitor so we could identify that the code was working. To get the rotation data from the module, we developed a .JS file, calling the three.js API to build out 3d environments in a web browser using WebGL. This js file also housed the other end of the bluetooth functionality used to transfer the data from the ESP32C Dev Module to the website. The index.html page, while simple is what users can access on the web to test out its functionality. 

# Statement of Need

WebXCube is a useful tool that augments the 3d modeling processes. It is possible to rotate models hosted on 3d modeling software including blender or fusion 360, by connecting the WebXCube via bluetooth and physically rotating it. While simple, this brings a tactile feel to the 3d modeling process. No longer is a mouse needed, users can physically rotate and move their model in real time wherever they want. It is a way to bridge the gap between the physcial and digital worlds.

# Usage

In order make everything work, first, please download a copy of each reopository (webXcube.github.io and cubefirmware) on your own machine. Then aquire and complie the webxcube.ino file on the ESP32C Dev Module (or other capable IMU device) using the arduino IDE. Make sure to turn on the device before you compile the code. If the system is working, the rotational data (four numbers in a "0, 0, 0, 0" format) should be shown in the serial monitor. If useing a different IMU system, augment the existing code to the new IMU specifications.

Second, open the main.js file. To change the model, simply add the desired model desired into the /model folder. Then change the path identified on line 6 of the main.js code to that new model.

Third, open the index.html file. Initialize a server by typing into the terminal "http-server cmd docs." The website is live!! Great. Now look for the server IP address will in the terminal. Currently, this itteration of the web-bluetooth connection does not like http and instead requires addtional security provided by https. We cane get around this issue by localhosting the site. To do this, replace the IP address with "localhost.0000" in the browser. Make sure to use the correct port (the last four numbers in the IP address) identified in the terminal. 

Finaly, with the hosted index.html page open, it will show a static image of the 3d model. Make sure the ESP32 Dev Module is ON, select the "Connect Bluetooth" button and find the device. When the device has been connected succesfully, the model will begin to rotate. 

# Future Functionality

 In the future, we look forward to adding addtional functionality to this prototype. For instance a calibration button would be useful to have so that each time a model is loaded, the rotation of the cube can be reset. It would be interesting to expand the given library of models one could choose to view in the browser by adding a dropdown menu that the user chooses (either a desired model or uploads their own) from and clicks a "render" button. This way the user does not have to mess with the main.js code to get the correct 3d model to show. Future itterations may see the main viewport located on the left side with a menu of buttons and settings on the right side. By adjusting the index.html in this way, it would allow for a better user viewing and user experience. Features could include a slider to enlarge or shrink the model, placing the model in a specific scene, and using light to change how the model looks.  

# Documentation

All nessesary documentation is avalible on the WebXCube repository. Additonal updates to the project will be added periodically dependent on addtional functionality created. 

# Acknowledgements

Professor Tejaswi Linge Gowda - Mentor and friend

# References

"Dice" (https://skfb.ly/Ftpp) by dez_z is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
