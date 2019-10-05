# Lightpath
![alt-text](https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3036f386223243.5d932aa627487.png)

**Change of name to BrightPath in progress**
## Abstract
LightPath is an application used to find routes through the city that are well lit, to avoid dark pathways. The concept came from discussions I saw on twitter hoping for this problem to be solved by particularly women and queer people. The concept originally was to use computer vision along with Open Street Maps data to automate the classification of brightness. In the time we had, we were not able to implement the computer vision aspect, but we did make a custom routing algorithm which does use the light data from OSM to find routes that do not go down unlit roads. Our algorithm can also be quite easily adapted for finding the brightest route once we have the data available.

### Hackathon topic you used
Accessibility & Community

### The development tools used to build the project
- Golang (Backend)
- Vue.js (Frontend)

## LightPath Backend
The backend is a go project who's github is here [https://github.com/cryptoqween/we-travel-backend](https://github.com/cryptoqween/we-travel-backend)

### Pathfinding Algorithm Demo

## Design Proposal
https://www.behance.net/gallery/86223243/BrightPath-Safe-route-finder

## Running Dev Env
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
