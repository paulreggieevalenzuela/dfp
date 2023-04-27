import Calendar from '@carbon/icons-react/lib/Calendar';
import ChevronDown from '@carbon/icons-react/lib/ChevronDown';

import s from './page.module.scss';

import { Input } from '@/components/Input';
import {
  variant1,
  variant2,
  variant3,
  variant4,
} from '@/components/Input/inputVariants';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  const inputTypes: (
    | 'regular'
    | 'multi'
    | 'leftIcon'
    | 'rightIcon'
    | 'doubleIcon'
    | 'textarea'
  )[] = ['regular', 'multi', 'leftIcon', 'rightIcon', 'doubleIcon', 'textarea'];

  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Input' description='Input Variants' />

      {inputTypes.map((type, key) => (
        <div key={key}>
          <h4>{type}</h4>
          <section>
            {variant1.map((variant, varientKey) => {
              return (
                <Input
                  key={varientKey}
                  id={key + variant.id}
                  placeholder={
                    type === 'multi' && variant.isChip
                      ? ''
                      : variant.placeholder
                  }
                  label={variant.label}
                  hint={variant.hint}
                  value={
                    type === 'multi' && variant.isChip
                      ? ''
                      : type == 'textarea' && variant.value
                        ? 'Placeholder text'
                        : variant.value
                  }
                  disabled={variant.disabled}
                  iconRight={
                    type === 'rightIcon' || type === 'doubleIcon' ? (
                      <ChevronDown />
                    ) : undefined
                  }
                  iconLeft={
                    type === 'leftIcon' || type === 'doubleIcon' ? (
                      <Calendar />
                    ) : undefined
                  }
                  textArea={type === 'textarea' ? true : false}
                  chip={
                    type === 'multi' && variant.isChip == true
                      ? variant.chip
                      : undefined
                  }
                />
              );
            })}
          </section>
          <section>
            {variant2.map((variant, varientKey) => {
              return (
                <Input
                  key={varientKey}
                  id={key + variant.id}
                  placeholder={
                    type === 'multi' && variant.isChip
                      ? ''
                      : variant.placeholder
                  }
                  label={variant.label}
                  hint={variant.hint}
                  value={
                    type === 'multi' && variant.isChip
                      ? ''
                      : type == 'textarea' && variant.value
                        ? 'Placeholder text'
                        : variant.value
                  }
                  disabled={variant.disabled}
                  messageType={variant.messageType}
                  messageText={variant.messageText}
                  iconRight={
                    type === 'rightIcon' || type === 'doubleIcon' ? (
                      <ChevronDown />
                    ) : undefined
                  }
                  iconLeft={
                    type === 'leftIcon' || type === 'doubleIcon' ? (
                      <Calendar />
                    ) : undefined
                  }
                  textArea={type === 'textarea' ? true : false}
                  chip={
                    type === 'multi' && variant.isChip == true
                      ? variant.chip
                      : undefined
                  }
                />
              );
            })}
          </section>
          <section>
            {variant3.map((variant, varientKey) => {
              return (
                <Input
                  key={varientKey}
                  id={key + variant.id}
                  placeholder={
                    type === 'multi' && variant.isChip
                      ? ''
                      : variant.placeholder
                  }
                  label={variant.label}
                  hint={variant.hint}
                  value={
                    type === 'multi' && variant.isChip
                      ? ''
                      : type == 'textarea' && variant.value
                        ? 'Placeholder text'
                        : variant.value
                  }
                  disabled={variant.disabled}
                  messageType={variant.messageType}
                  messageText={variant.messageText}
                  iconRight={
                    type === 'rightIcon' || type === 'doubleIcon' ? (
                      <ChevronDown />
                    ) : undefined
                  }
                  iconLeft={
                    type === 'leftIcon' || type === 'doubleIcon' ? (
                      <Calendar />
                    ) : undefined
                  }
                  textArea={type === 'textarea' ? true : false}
                  chip={
                    type === 'multi' && variant.isChip == true
                      ? variant.chip
                      : undefined
                  }
                />
              );
            })}
          </section>
          <section>
            {variant4.map((variant, varientKey) => {
              return (
                <Input
                  key={varientKey}
                  id={key + variant.id}
                  placeholder={
                    type === 'multi' && variant.isChip
                      ? ''
                      : variant.placeholder
                  }
                  label={variant.label}
                  hint={variant.hint}
                  value={
                    type === 'multi' && variant.isChip
                      ? ''
                      : type == 'textarea' && variant.value
                        ? 'Placeholder text'
                        : variant.value
                  }
                  disabled={variant.disabled}
                  messageType={variant.messageType}
                  messageText={variant.messageText}
                  iconRight={
                    type === 'rightIcon' || type === 'doubleIcon' ? (
                      <ChevronDown />
                    ) : undefined
                  }
                  iconLeft={
                    type === 'leftIcon' || type === 'doubleIcon' ? (
                      <Calendar />
                    ) : undefined
                  }
                  textArea={type === 'textarea' ? true : false}
                  chip={
                    type === 'multi' && variant.isChip == true
                      ? variant.chip
                      : undefined
                  }
                />
              );
            })}
          </section>
        </div>
      ))}
    </KitchenSinkLayout>
  );
}
