"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="@types/google.maps" />
var User_1 = require("./User");
var Company_1 = require("./Company");
var CustomMap_1 = require("./CustomMap");
var user = new User_1.User();
var company = new Company_1.Company();
var customMap = new CustomMap_1.CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
