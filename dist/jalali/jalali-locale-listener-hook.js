"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var dayjs_1 = __importDefault(require("dayjs"));
var jalali_plugin_dayjs_1 = __importDefault(require("jalali-plugin-dayjs"));
var calendar_1 = __importDefault(require("dayjs/plugin/calendar"));
/**
 * Subscribes to the ConfigProvider locale changes and updates the dayjs calendar based on current locale.
 */
var useJalaliLocaleListener = function () {
    dayjs_1.default.extend(calendar_1.default);
    dayjs_1.default.extend(jalali_plugin_dayjs_1.default);
    var locale = (0, react_1.useContext)(antd_1.ConfigProvider.ConfigContext).locale;
    react_1.default.useEffect(function () {
        var _a, _b;
        if ((locale === null || locale === void 0 ? void 0 : locale.locale) == "fa") {
            (_a = dayjs_1.default["calendar"]) === null || _a === void 0 ? void 0 : _a.call(dayjs_1.default, "jalali");
        }
        else {
            (_b = dayjs_1.default["calendar"]) === null || _b === void 0 ? void 0 : _b.call(dayjs_1.default, "jalali");
        }
    }, [locale]);
};
exports.default = useJalaliLocaleListener;
