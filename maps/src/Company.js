"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var faker_1 = require("@faker-js/faker");
var Company = /** @class */ (function () {
    function Company() {
        this.name = faker_1.faker.company.name();
        this.catchPhrase = faker_1.faker.company.catchPhrase();
        this.location = {
            lat: faker_1.faker.location.latitude(),
            lng: faker_1.faker.location.longitude()
        };
    }
    return Company;
}());
exports.Company = Company;
