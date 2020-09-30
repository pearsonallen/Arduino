# Getting Started
To Get Started, make sure you have the local.settings.json file created in the api directory
You will also need to install Azure Functions extension for VS Code : https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions

All you need to do is pull the repository down, make changes then push.  The pipeline will automatically process the changes and update the site.

# Technologies
Project API uses Azure Functions using node.js: https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node
Azure Static Web Apps to host the website: https://docs.microsoft.com/en-us/azure/static-web-apps/overview
Processing to show the visual: https://p5js.org/
Azure Table Storage to store the data: https://azure.microsoft.com/en-us/services/storage/tables/
Particle Photon Arduino to collect and send the data: https://www.sparkfun.com/products/13774 , https://docs.particle.io/photon/

Welcome! This project uses Azure Functions, P5.js, Azure Table Storage, an Arduino feeding it data, and hopefully will include some React and unit tests. The Arduino collects the value from the photosensor and sends the value to the api where it's recorded.  The webpage has a Processing sketch that calls the api to get the most recent value.
