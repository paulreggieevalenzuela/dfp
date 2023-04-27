import Close from '@carbon/icons-react/lib/Close';

import clsx from 'clsx';
import { useState } from 'react';
import { ReactMultiEmail } from 'react-multi-email';

import 'react-multi-email/style.css';
import s from './MultiEmail.module.scss';

import { Label, Message } from '@/components/Input';

type EmailProps = {
  value?: string[];
  id?: string;
  label?: string;
  hint?: string;
  width?: string | number;
  placeholder?: string;
  messageType?: 'error' | 'warning' | 'success' | string;
  messageText?: string;
  setValue?: (name: string, contents: string[]) => void;
  className?: string;
};

const MultiEmail = ({
  id,
  value,
  label,
  hint,
  width = 'w-[350px]',
  placeholder,
  messageText,
  messageType,
  setValue,
  className
}: EmailProps) => {
  const [emails, setEmails] = useState<string[] | undefined>(value);

  const onChange = (_emails: string[]) => {
    setEmails(_emails);
    if (id && setValue) {
      setValue(id, _emails);
    }
  };

  return (
    <div className={clsx(s.wrapper, width, className)}>
      {label && <Label label={label} hint={hint} />}
      <ReactMultiEmail
        placeholder={placeholder}
        emails={emails}
        onChange={onChange}
        getLabel={(
          email: string,
          index: number,
          removeEmail: (index: number) => void
        ) => {
          return (
            <div data-tag key={index}>
              {email}
              <span data-tag-handle onClick={() => removeEmail(index)}>
                <Close size={20} />
              </span>
            </div>
          );
        }}
      />
      {messageType ? (
        <Message messageType={messageType} messageText={messageText} />
      ) : null}
    </div>
  );
};

export default MultiEmail;
