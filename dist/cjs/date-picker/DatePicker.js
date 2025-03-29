"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jalali_1 = require("../jalali");
var generatePicker_1 = __importDefault(require("antd/lib/date-picker/generatePicker"));
// remove styles when building for commonJs
// import 'antd/lib/date-picker/style';
var DatePicker = generatePicker_1.default(jalali_1.generateJalaliConfig);
exports.default = DatePicker;
