import ChevronDown from '@carbon/icons-react/lib/ChevronDown';
import { IconProps } from 'carbon-components-react';
import { ReactElement, useRef, useState } from 'react';
import { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

import styles from './DropdownInput.module.scss';

import { Input, InputProps } from '@/components/Input/input';
import Dropdown from '@/components/Menu';

import { useOnClickOutside } from '@/utils/customHooks';

interface DropdownInputProps {
  dropdownItems: {
    label: string;
    subText?: string;
    icon?: ReactElement<IconProps>;
  }[];
  inputProps?: Partial<InputProps>;
  placeholder?: string;
  label?: string;
  className?: string;
}

const DropdownInput = ({
  dropdownItems,
  inputProps: partialInputprops = {},
  placeholder,
  label,
  className,
}: DropdownInputProps) => {
  const dropdownInputRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState('');
  const [displayedItems, setDisplayedItems] = useState(dropdownItems);

  const openDropdown = () => setShowDropdown(true);
  const closeDropdown = useCallback(() => {
    setShowDropdown(false);
  }, []);
  const focusInput = () => {
    (dropdownInputRef.current as unknown as HTMLDivElement)
      ?.getElementsByTagName('input')[0]
      .focus();
  };

  useOnClickOutside(dropdownInputRef, closeDropdown);

  const onInputChange = ({
    target: { value },
  }: {
    target: HTMLInputElement;
  }) => {
    setValue(value);
    setDisplayedItems(
      dropdownItems.filter(
        ({ label, subText }) =>
          label.toLowerCase().includes(value.toLocaleLowerCase()) ||
          subText?.toLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  };

  const dropdownProps = {
    items: displayedItems.map(({ label, subText, icon }) => ({
      label: (
        <>
          {icon && icon}
          <span className={styles.label}>{label}</span>
          {subText && <span className={styles.subText}>{subText}</span>}
        </>
      ),
      linkDisabled: true,
      onItemClick: () => {
        setValue(label);
        closeDropdown();
      },
    })),
  };

  const inputProps = {
    ...partialInputprops,
    placeholder: placeholder,
    label: label,
    iconRight: <ChevronDown onClick={focusInput} className={styles.caret} />,
  };
  return (
    <div
      className={twMerge(styles.DropdownInput, className)}
      ref={dropdownInputRef}
    >
      <Input
        {...inputProps}
        onFocus={openDropdown}
        value={value}
        onChange={onInputChange}
        autoComplete='off'
      />
      {showDropdown && (
        <div className={styles.Dropdown}>
          <Dropdown {...dropdownProps} />
        </div>
      )}
    </div>
  );
};

export default DropdownInput;
