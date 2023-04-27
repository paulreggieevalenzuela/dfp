import Logout from '@carbon/icons-react/lib/Logout';
import PanelLeft from '@carbon/icons-react/lib/OpenPanelLeft';
import Receipt from '@carbon/icons-react/lib/Receipt';
import Settings from '@carbon/icons-react/lib/Settings';
import User from '@carbon/icons-react/lib/User';
import UserMultiple from '@carbon/icons-react/lib/UserMultiple';
import clsx from 'clsx';
import { signOut } from 'next-auth/react';
import React, { ReactNode } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

import s from './Menu.module.scss';

import Avatar from '@/components/Avatar';
import Elevations from '@/components/Elevations';

export type ItemProp = {
  label: ReactNode;
  icon?: string;
  action?: string;
  subtext?: string;
  withArrow?: boolean;
  avatar?: string;
  className?: string;
  labelStyle?: string;
  iconStyle?: string;
  isSeparated?: boolean;
  subItems?: SubItemProps[];
  link?: string;
  linkDisabled?: boolean;
  onItemClick?: () => void;
};

type SubItemProps = {
  label: ReactNode;
  isChecked?: boolean;
  hasCheckbox?: boolean;
  className?: string;
  onClick?: () => void;
};

export type MenuProps = {
  items: ItemProp[];
  className?: string;
};

type IconProps = {
  icon: string;
  style?: string;
};

const Icon = ({ icon: name, style }: IconProps) => {
  switch (name) {
    case 'star':
      return <AiFillStar className={`${style}`} />;
    case 'settings':
      return <Settings className={`${style}`} />;
    case 'receipt':
      return <Receipt className={`${style}`} />;
    case 'logout':
      return <Logout className={`${style}`} />;
    case 'panel-left':
      return <PanelLeft className={`${style}`} />;
    case 'user':
      return <User className={`${style}`} />;
    case 'user-multiple':
      return <UserMultiple className={`${style}`} />;
    default:
      return <div className="h-[1rem] w-[1rem]" />;
  }
};

export default function Menu({ items }: MenuProps) {
  return (
    <ul className={s.Dropdown}>
      {items.map((item, key) => {
        let finalClassName =
          'relative h-[42px] content-center py-2.5 pr-3 pl-4 gap-3 justify-between ' +
          `${item.className ? item.className : ''}` +
          `${item.isSeparated ? s.isSeparated : ''}`;
        let labelClassName = `${item.labelStyle ? item.labelStyle : ''}`;
        if (item.subtext || item.avatar) {
          finalClassName = 'block ' + finalClassName;
          labelClassName = labelClassName + ' -mt-1.5 flex items-center';
        } else {
          finalClassName = 'flex flex-row ' + finalClassName;
          labelClassName = labelClassName + ' ml-3 -mt-0.5';
        }
        let itemAction = item.onItemClick ? item.onItemClick : undefined;

        if (item.action === 'logout') {
          itemAction = () => signOut();
        }

        return (
          <a
            key={key}
            href={item.linkDisabled ? void 0 : item.link ? item.link : void 0}
            className={finalClassName}
            onClick={itemAction}
          >
            {item.avatar ? (
              <div className='float-left mr-2.5 -mt-1.5'>
                {' '}
                <Avatar src={item.avatar} />{' '}
              </div>
            ) : (
              ''
            )}
            {item.icon ? (
              <div className='flex items-center'>
                {' '}
                <Icon icon={item.icon} style={item.iconStyle} />{' '}
                <div className={labelClassName}> {item.label} </div>
              </div>
            ) : (
              <div className='flex items-center'>
                <div className={labelClassName}> {item.label} </div>
              </div>
            )}
            {item.withArrow ? (
              <div className='flex items-center justify-end'>
                <IoIosArrowForward />
              </div>
            ) : (
              ''
            )}
            {item.withArrow && item.subItems ? (
              <div className={s.subMenuContainer}>
                <Elevations dp='00' className='py-2.5'>
                  <ul>
                    {item.subItems.map((sub, key) => {
                      return (
                        <li
                          className={clsx(s.subMenuStyle, sub.className)}
                          key={key}
                          onClick={sub.hasCheckbox ? void 0 : sub.onClick}
                        >
                          {' '}
                          {sub.hasCheckbox ? (
                            <>
                              <input
                                type='checkbox'
                                checked={sub.isChecked}
                                onChange={sub.onClick}
                              />
                              &nbsp;{sub.label}{' '}
                            </>
                          ) : (
                            sub.label
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </Elevations>
              </div>
            ) : null}
            {item.subtext ? (
              <div className='mt-0.5 font-[350] text-gray-300'>
                {' '}
                {item.subtext}{' '}
              </div>
            ) : (
              ''
            )}
          </a>
        );
      })}
    </ul>
  );
}
