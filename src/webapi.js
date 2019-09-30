const API_URL = 'http://wetravel-be.herokuapp.com';
const FINDPATH_API_URL = `${API_URL}/findpath`;

export default class Webapi {
  static async findPath(params) {
    /*
     * Params
     * {
     *   toLocation: [Number, Number],
     *   fromLocation: [Number, Number]
     * }
     */
    console.log('find', JSON.stringify(params));
    const src = params.fromLocation;
    const dest = params.toLocation;
    console.log(`https://www.google.com/maps/search/${src[1]},+${src[0]}`);
    console.log(`https://www.google.com/maps/search/${dest[1]},+${dest[0]}`);
    const response = await fetch(FINDPATH_API_URL, {
      method: 'POST',
      body: JSON.stringify(params),
    });
    const json = await response.json();
    return json;
  }
}
