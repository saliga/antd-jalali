import { generateJalaliConfig } from '../jalali';
import generateCalendar from 'antd/es/calendar/generateCalendar';
// remove styles when building for commonJs
import 'antd/lib/calendar/style';
var Calendar = generateCalendar(generateJalaliConfig);
export default Calendar;
