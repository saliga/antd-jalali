import { generateJalaliConfig } from '../jalali';
import generatePicker from 'antd/es/date-picker/generatePicker';
// remove styles when building for commonJs
import 'antd/lib/date-picker/style';
var DatePicker = generatePicker(generateJalaliConfig);
export default DatePicker;
