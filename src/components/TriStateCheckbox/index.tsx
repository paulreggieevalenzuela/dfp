import { Checkbox, CheckboxProps } from 'carbon-components-react';
import { useState } from 'react';

import { CheckBoxValues } from '@/lib/types';

type TriStateCheckBoxProps = Omit<
  CheckboxProps,
  'defaultValue' | 'defaultChecked'
> & {
  defaultValue?: CheckBoxValues;
};

const values: CheckBoxValues[] = [true, 'indeterminate', false];

export default function TriStateCheckBox({
  defaultValue = false,
  ...rest
}: TriStateCheckBoxProps) {
  const [value, setValue] = useState(defaultValue);

  const updateValue = () => {
    const currentValueIndex = values.indexOf(value);
    const nextValueIndex =
      currentValueIndex === values.length - 1 ? 0 : currentValueIndex + 1;
    setValue(values[nextValueIndex]);
  };

  return (
    <Checkbox
      indeterminate={value === 'indeterminate'}
      checked={!!value}
      onChange={updateValue}
      {...rest}
    />
  );
}
