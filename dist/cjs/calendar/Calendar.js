"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jalali_1 = require("../jalali");
var generateCalendar_1 = __importDefault(require("antd/lib/calendar/generateCalendar"));
// remove styles when building for commonJs
// import 'antd/lib/calendar/style';
var Calendar = generateCalendar_1.default(jalali_1.generateJalaliConfig);
exports.default = Calendar;
