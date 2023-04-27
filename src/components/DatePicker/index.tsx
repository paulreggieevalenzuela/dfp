import { useState } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import s from './DatePicker.module.scss';

type Props = {
  label?: string;
  description?: string;
  onChange: any | undefined;
  noTextField?: boolean;
  isRange?: boolean;
};

const defaultProps = {
  onChange: undefined,
  noTextField: false,
};

export const CustomDatePicker = (props: ReactDatePickerProps & Props) => {
  const [startDate, setStartDate] = useState<Date | null | undefined>(
    undefined
  );
  const [endDate, setEndDate] = useState(null);

  const onRangeChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  let {
    open,
    inline,
    onChange = (date: Date) => setStartDate(date),
    placeholderText = 'Select Date',
  } = props;

  const {
    label = 'Label Lorem Ipsum',
    isRange = false,
    noTextField,
    selected = null,
  } = props;

  if (noTextField) {
    inline = true;
    open = true;
  }

  if (isRange) {
    onChange = (dates: any) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
  }

  if (selected) {
    placeholderText = '';
  }

  return (
    <div className={`${s.CustomDatePicker} ${open ? s.alwaysOpened : ''}`}>
      <span className='label'>{label}</span>
      <DatePicker
        {...props}
        selected={startDate || selected}
        placeholderText={placeholderText}
        onChange={onChange}
        open={open}
        inline={inline}
        startDate={startDate}
        endDate={endDate}
        selectsRange={isRange}
      />
    </div>
  );
};

CustomDatePicker.defaultProps = defaultProps;
export default CustomDatePicker;
