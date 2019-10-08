# Brightpath

## [Demo](https://brightpath-fe.web.app)

### Using the demo
- [Here](https://brightpath-fe.web.app)
- Click two points anywhere on the map of London.
- The animation between points is just an animation, the response from the server is instant.
- Limited to London due to memory constraints of the free tier of heroku.
- Your live location will be updated regularly if you are walking or cycling.

[
<img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3036f386223243.5d932aa627487.png" alt="" data-canonical-src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3036f386223243.5d932aa627487.png" height="345" />
](https://brightpath-fe.web.app)[
<img src="https://user-images.githubusercontent.com/1690659/66380361-30df4d00-e9af-11e9-8579-b569220ddea1.gif" alt="brightpath-demo" data-canonical-src="https://user-images.githubusercontent.com/1690659/66380361-30df4d00-e9af-11e9-8579-b569220ddea1.gif" height="345" />
](https://brightpath-fe.web.app)

## Mission

To provide the safest walking route between two locations.

## Problem

- Google maps can often provide unsafe walking routes.
- If you are new to a city or travelling you are highly dependent on google maps for navigating safely between locations and you will often be on foot.
- There has been a surge of people vying for a product which provides safe walking paths. Here are some [examples](https://twitter.com/Chlojob_/status/1181279485901099008?s=19) from twitter.

<img src="https://user-images.githubusercontent.com/1690659/66380508-83b90480-e9af-11e9-9106-bb1c6ccc59d3.png" alt="" data-canonical-src="https://user-images.githubusercontent.com/1690659/66380508-83b90480-e9af-11e9-9106-bb1c6ccc59d3.png" width="345" /><img src="https://user-images.githubusercontent.com/1690659/66380581-ac40fe80-e9af-11e9-9d36-9933462a1055.png" alt="" data-canonical-src="https://user-images.githubusercontent.com/1690659/66380581-ac40fe80-e9af-11e9-9d36-9933462a1055.png" width="220" /><img src="https://user-images.githubusercontent.com/1690659/66380608-b95ded80-e9af-11e9-937a-013003f04360.png" alt="" data-canonical-src="https://user-images.githubusercontent.com/1690659/66380608-b95ded80-e9af-11e9-937a-013003f04360.png" width="220" />




## Solution

Brightpath finds walking routes through the city that are well lit, avoiding dark pathways. Later we could incorporate many other kinds of data such as crime reports and safe checkpoints. The core technical challenge was wrangling the data and writing our own custom routing algorithm. For this hackathon we used data about whether a street is lit or not from [Open Street Map](<[https://www.openstreetmap.org/#map=10/51.4835/-0.1265](https://www.openstreetmap.org/#map=10/51.4835/-0.1265)>). Later we could incorporate official [UK gov data about street lighting](https://data.gov.uk/search?q=Street+Light) or even incorporate satellite imaging data.

[To use the routing in action, click any two locations on the map.](https://brightpath-fe.web.app) Note this is limited to London because of the limitations of heroku free plan. While we did optimize for space complexity there are over 5 million edges in London.

## Technical Solution


### [Backend github repository](https://github.com/mfbx9da4/brightpath-backend)

Built in Go, hosted on heroku. https://brightpath.herokuapp.com

Steps taken to create backend

1. Get a dump of London data from [Open Street Map](http://download.geofabrik.de/europe/great-britain/england/greater-london.html)
2. Convert OSM format to geojson.
3. Clean geojson to remove dark pathways.
4. [Write algorithm](https://github.com/mfbx9da4/brightpath-backend/blob/master/parse-geojson.go#L43) to load geojson into graph representation in memory in Go.
5. Create Go API server.
6. Write algorithm for finding closest node two api source and output destination.
7. Write [A\* routing algorithm](https://github.com/mfbx9da4/brightpath-backend/blob/master/graph.go#L164) to find shortest path between two nodes in optimal time.
8. Write [unit tests](https://github.com/mfbx9da4/brightpath-backend/blob/master/routing_test.go) and test cases for shortest path edge cases.

### [Frontend 1 github repository](https://github.com/mfbx9da4/brightpath-frontend)

[Hosted on firebase](https://brightpath-fe.web.app), written in Vanilla JS. Originally written for testing purposes. Uses mapbox for map. Connects to backend hosted on [heroku](https://brightpath.herokuapp.com/).

### [Frontend 2 github repository](https://github.com/river-honer/lightpath)

Uses vuejs

- Uses mapbox geolocation API to get start and end destination.
- Uses leaflet to render map.
- Connects to backend hosted on [heroku](https://brightpath.herokuapp.com/)

### Hackathon topic you used

Accessibility & Community

## Design Proposal

https://www.behance.net/gallery/86223243/BrightPath-Safe-route-finder

## Run Backend

```

go build -v -o bin/main . && ./bin/main

```

## Run Frontend

```

yarn install
yarn start

```
