import dayjs from "dayjs";
declare const generateJalaliConfig: {
    getNow: () => dayjs.Dayjs;
    getFixedDate: (string: any) => dayjs.Dayjs;
    getEndDate: (date: any) => any;
    getWeekDay: (date: any) => any;
    getYear: (date: any) => any;
    getMonth: (date: any) => any;
    getDate: (date: any) => any;
    getHour: (date: any) => any;
    getMinute: (date: any) => any;
    getSecond: (date: any) => any;
    addYear: (date: any, diff: any) => any;
    addMonth: (date: any, diff: any) => any;
    addDate: (date: any, diff: any) => any;
    setYear: (date: any, year: any) => any;
    setMonth: (date: any, month: any) => any;
    setDate: (date: any, num: any) => any;
    setHour: (date: any, hour: any) => any;
    setMinute: (date: any, minute: any) => any;
    setSecond: (date: any, second: any) => any;
    getMillisecond: (date: any) => any;
    setMillisecond: (date: any, second: any) => any;
    isAfter: (date1: any, date2: any) => any;
    isValidate: (date: any) => any;
    locale: {
        getWeekFirstDate: (locale: any, date: any) => any;
        getWeekFirstDay: (locale: any) => number;
        getWeek: (locale: any, date: any) => any;
        getShortWeekDays: (locale: any) => dayjs.WeekdayNames;
        getShortMonths: (locale: any) => dayjs.MonthNames;
        format: (locale: any, date: any, format: any) => any;
        parse: (locale: any, text: any, formats: any) => dayjs.Dayjs | null;
    };
};
export default generateJalaliConfig;
//# sourceMappingURL=generateJalaliConfig.d.ts.map