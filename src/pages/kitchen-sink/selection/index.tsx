import { RadioButton, RadioButtonGroup } from 'carbon-components-react';

import s from './page.module.scss';

import { CheckBoxValues } from '@/lib/types';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Switch from '@/components/Switch';
import TitleBar from '@/components/TitleBar';
import TriStateCheckBox from '@/components/TriStateCheckbox';

const checkBoxDefaultValues: CheckBoxValues[] = [
  false,
  'indeterminate',
  true,
  false,
  'indeterminate',
  true,
];

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Selection' description='' />
      <section>
        <div className='w-100'>
          <div className='flex flex-wrap gap-[24px]'>
            <div className='flex-auto'>
              {[...Array(6)].map((_, idx) => (
                <TriStateCheckBox
                  key={`checkbox-${idx}`}
                  id={`checkbox-${idx}`}
                  labelText='Checkbox item'
                  disabled={idx > 2}
                  defaultValue={checkBoxDefaultValues[idx]}
                />
              ))}
            </div>
            <div className='mt-[6px] flex-auto'>
              <RadioButtonGroup
                name='group-1'
                orientation='vertical'
                className='flex-auto'
              >
                {[...Array(6)].map((_, idx) => (
                  <RadioButton
                    key={`radio-${idx}`}
                    id={`radio-${idx}`}
                    labelText='Radio button item'
                    disabled={idx > 2}
                  />
                ))}
              </RadioButtonGroup>
            </div>
            <div className='mt-[6px] flex-auto'>
              {[...Array(6)].map((_, idx) => (
                <Switch
                  key={`switch-left-${idx}`}
                  id={`switch-left-${idx}`}
                  labelA='Switch item'
                  labelB='Switch item'
                  defaultToggled={(idx + 1) % 2 === 0}
                  disabled={idx > 2}
                />
              ))}
            </div>

            <div className='mt-[6px] flex-auto'>
              {[...Array(6)].map((_, idx) => (
                <Switch
                  key={`switch-right-${idx}`}
                  id={`switch-right-${idx}`}
                  switchPosition='right'
                  labelA='Switch item'
                  labelB='Switch item'
                  defaultToggled={(idx + 1) % 2 === 0}
                  disabled={idx > 2}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </KitchenSinkLayout>
  );
}
