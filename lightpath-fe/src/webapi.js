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
    // TODO Get API Working
    console.log('running')
    const response = await fetch(FINDPATH_API_URL, {
      method: 'POST',
      body: JSON.stringify(params),
    });
    const json = await response.json();
    console.log(json);
      // .then((res) => {
      //   if (res.ok === false) {
      //     throw new Error (`Response unsuccessful with status code ${res.status}`);
      //   }
      //   return res;
      // }).then(okRes => okRes.json());
    return json;
  }
}
