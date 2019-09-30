export default class Route {
  constructor(data) {
    // Validate response body is valid path
    const geojson = data.data;
    if (geojson.features[0].geometry.coordinates.length === 1) {
      throw new Error('No line, only point');
    }

    this.geojson = geojson;
    this.startPoint = Route.getStartPoint(geojson);
    this.endPoint = Route.getEndPoint(geojson);
  }

  static getStartPoint(geojson) {
    return geojson.features[0].geometry.coordinates[0];
  }

  static getEndPoint(geojson) {
    const { features } = geojson;
    const lastFeature = features[features.length - 1];
    const { coordinates } = lastFeature.geometry;
    return coordinates[coordinates.length - 1];
  }
}
