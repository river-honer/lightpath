const API_URL = 'http://wetravel-be.herokuapp.com';
const FINDPATH_API_URL = `${API_URL}/findpath`;
// const dummyData = {
//   hello: 'my old friend',
// }

export default class Webapi {
  static async findPath(params) {
    /*
     * Params
     * {
     *   toLocation: [Number, Number],
     *   fromLocation: [Number, Number]
     * }
     */
    const responseBody = fetch(FINDPATH_API_URL, {
      method: 'POST',
      body: params,
    })
      // Check for ok Status Code
      .then((res) => {
        if (res.ok === false) {
          throw new Error (`Response unsuccessful with status code ${res.status}`);
        }
        return res;
      })
      // Return JSON
      .then((okRes) => {
        if (okRes.body) {
          return okRes.json();
        }
        throw new Error('Response has no body');
      })
      // Check for network error
      .catch(() => {
        throw new Error('Connection unsuccessful');
      });
    return responseBody;
  }
}
