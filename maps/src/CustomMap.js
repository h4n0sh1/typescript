"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMap = void 0;
var CustomMap = /** @class */ (function () {
    function CustomMap(id) {
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    return CustomMap;
}());
exports.CustomMap = CustomMap;
