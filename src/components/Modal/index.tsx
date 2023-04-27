import { CheckmarkOutline, Information, WarningAlt } from "@carbon/icons-react";
import { Modal as CarbonModal, ModalBody, ModalHeader } from "carbon-components-react";
import clsx from 'clsx';
import { Fragment } from 'react';

import s from './Modal.module.scss';

import Button from '@/components/Button';

export interface ModalProps {
  children?: React.ReactNode | string,
  className?: string,
  title?: string,
  customHeader?: React.ReactNode | React.ReactElement | string,
  open: boolean,
  actions?: any[],
  size?: 'sm' | 'lg' | 'xl',
  orientation?: 'default' | 'center',
  verticalOverflow?: 'hidden' | 'scroll',
  type?: 'info' | 'error' | 'success',
  hasBorderTop?: boolean;
  onClick?: () => void,
  onClose?: () => void,
};

export default function Modal({
  children,
  title,
  open = false,
  className,
  actions = [],
  size = 'lg',
  orientation,
  type = 'info',
  customHeader,
  verticalOverflow,
  hasBorderTop = false,
  onClose
}: ModalProps) {

  const modalContainerStyle = clsx(
    className,
    s.Modal,
    size === 'sm' && s.SmallModal,
    size === 'xl' && s.XLModal,
    orientation === 'center' && s.CenterModal
  );

  const modalIconStyle = clsx('modal__icon', {
    '--info': type === 'info',
    '--error': type === 'error',
    '--success': type === 'success',
  });

  const modalActionStyle = clsx('modal__footer', {
    '--with-border-top': hasBorderTop,
  });

  const ActionsBox = () => (
    <div className={modalActionStyle}>
      {actions.map((btn, i) => (
        <Button
          key={i}
          kind={btn.kind}
          size={size}
          style={btn.style}
          {...btn}
        >
          {btn.icon && (btn.icon)}
          {btn.children}
        </Button>
      ))}
    </div>
  )

  return (
    <div className={`${modalContainerStyle} y-${verticalOverflow}`}>
      <CarbonModal
        open={open}
        passiveModal={true}
        onRequestClose={onClose}
        aria-label='modal'
        modalHeading={
          <Fragment>
            {title && (
              <ModalHeader>
                <div className={modalIconStyle}>
                  {type === 'info' && (
                    <Information size={orientation === 'center' ? 32 : 16} />
                  )}
                  {type === 'error' && (
                    <WarningAlt size={orientation === 'center' ? 32 : 16} />
                  )}
                  {type === 'success' && (
                    <CheckmarkOutline size={orientation === 'center' ? 32 : 16} />
                  )}
                </div>
                <h4>{title}</h4>
              </ModalHeader>
            )}
            {customHeader && (
              <ModalHeader>
                {customHeader}
              </ModalHeader>
            )}
          </Fragment>
        }
      >
        {children && <ModalBody>{children}</ModalBody>}
        {actions.length ? <ActionsBox /> : ''}
      </CarbonModal>
    </div>
  );
}
