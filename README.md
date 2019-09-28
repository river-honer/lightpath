# LightPath

## Abstract
LightPath is an application used to find routes through the city that are well lit, to avoid dark pathways. The concept came from discussions I saw on twitter hoping for this problem to be solved by particularly women and queer people. The concept originally was to use computer vision along with Open Street Maps data to automate the classification of brightness. In the time we had, we were not able to implement the computer vision aspect, but we did make a custom routing algorithm which does use the light data from OSM to find routes that do not go down unlit roads. Our algorithm can also be quite easily adapted for finding the brightest route once we have the data available.
## Hackathon topic you used
Accessibility
## The development tools used to build the project
- Golang (Backend)
- Vue.js (Frontend)

## APIs used in the project
- OPENCAGE (geolocation)

## Any libraries used in the project
- Leaflet (Frontend Maps)
- Stamen (Map Tiles)
- Vuetify (Component Library)
## Licence/s
MIT