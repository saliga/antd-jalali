"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var jalali_locale_listener_hook_1 = __importDefault(require("./jalali-locale-listener-hook"));
var JalaliLocaleListener = function () {
    (0, jalali_locale_listener_hook_1.default)();
    return react_1.default.createElement(react_1.default.Fragment, null);
};
exports.default = JalaliLocaleListener;
