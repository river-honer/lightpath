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
    // const responseBody = fetch(FINDPATH_API_URL, {
    //   method: 'POST',
    //   body: params,
    // })
    //   // Check for ok Status Code
    //   .then((res) => {
    //     if (res.ok === false) {
    //       throw new Error (`Response unsuccessful with status code ${res.status}`);
    //     }
    //     return res;
    //   })
    //   // Return JSON
    //   .then((okRes) => {
    //     if (okRes.body) {
    //       return okRes.json();
    //     }
    //     throw new Error('Response has no body');
    //   })
    //   // Check for network error
    //   .catch(() => {
    //     throw new Error('Connection unsuccessful');
    //   });
    // return responseBody;

    return {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {...params},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -0.067291259765625,
                51.50949034120275
              ],
              [
                -0.06857872009277344,
                51.51082581495246
              ],
              [
                -0.072784423828125,
                51.510077954475555
              ],
              [
                -0.07355690002441406,
                51.50954376090435
              ],
              [
                -0.07493019104003906,
                51.50997111626239
              ],
              [
                -0.07784843444824219,
                51.509436921438486
              ],
              [
                -0.07990837097167967,
                51.50965060011967
              ],
              [
                -0.08265495300292969,
                51.510558723334285
              ],
              [
                -0.08651733398437499,
                51.51082581495246
              ],
              [
                -0.09364128112792969,
                51.51232149907683
              ],
              [
                -0.09243965148925781,
                51.51269541243519
              ],
              [
                -0.09209632873535156,
                51.51509906788574
              ]
            ]
          }
        }
      ]
    }
  }
}
