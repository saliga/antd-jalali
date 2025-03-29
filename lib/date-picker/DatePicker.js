"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jalali_1 = require("../jalali");
var generatePicker_1 = __importDefault(require("antd/es/date-picker/generatePicker"));
var DatePicker = (0, generatePicker_1.default)(jalali_1.generateJalaliConfig);
exports.default = DatePicker;
