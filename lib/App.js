"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var fa_IR_1 = __importDefault(require("antd/lib/locale/fa_IR"));
var en_US_1 = __importDefault(require("antd/lib/locale/en_US"));
var index_ts_1 = require("./index.ts");
require("./index.css");
var App = function () {
    var _a = react_1.default.useState("rtl"), direction = _a[0], setDirection = _a[1];
    var _b = react_1.default.useState(fa_IR_1.default), locale = _b[0], setLocale = _b[1];
    var changeDirection = function (e) {
        var directionValue = e.target.value;
        setDirection(directionValue);
    };
    var changeLocale = function (e) {
        var localeValue = e.target.value;
        setLocale(localeValue);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Row, { justify: "center" },
            react_1.default.createElement(antd_1.Col, { span: 18 },
                react_1.default.createElement(antd_1.Space, { direction: "vertical", size: 12 },
                    react_1.default.createElement("h2", null, " Ant-Design Jalali Date picker "),
                    react_1.default.createElement(antd_1.Space, { direction: "horizontal", size: 12 },
                        react_1.default.createElement("div", { style: { marginBottom: 16 } },
                            react_1.default.createElement("span", { style: { marginRight: 16 } }, "Change direction of components: "),
                            react_1.default.createElement(antd_1.Radio.Group, { defaultValue: direction, onChange: changeDirection },
                                react_1.default.createElement(antd_1.Radio.Button, { key: "ltr", value: "ltr" }, "LTR"),
                                react_1.default.createElement(antd_1.Radio.Button, { key: "rtl", value: "rtl" }, "RTL"))),
                        react_1.default.createElement("div", { style: { marginBottom: 16 } },
                            react_1.default.createElement("span", { style: { marginRight: 16 } }, "Change locale of components: "),
                            react_1.default.createElement(antd_1.Radio.Group, { defaultValue: locale, onChange: changeLocale },
                                react_1.default.createElement(antd_1.Radio.Button, { key: "en", value: en_US_1.default }, "EN"),
                                react_1.default.createElement(antd_1.Radio.Button, { key: "fa", value: fa_IR_1.default }, "FA_IR")))),
                    react_1.default.createElement(antd_1.ConfigProvider, { locale: locale, direction: direction },
                        react_1.default.createElement(index_ts_1.JalaliLocaleListener, null),
                        react_1.default.createElement(antd_1.Space, { direction: "vertical", size: 12 },
                            "Gregorian: ",
                            react_1.default.createElement(antd_1.DatePicker, null),
                            "Jalali: ",
                            react_1.default.createElement(index_ts_1.DatePicker, { direction: "rtl" }),
                            "Jalali RangePicker: ",
                            react_1.default.createElement(index_ts_1.DatePicker.RangePicker, null),
                            react_1.default.createElement(index_ts_1.Calendar, null))))))));
};
exports.default = App;
