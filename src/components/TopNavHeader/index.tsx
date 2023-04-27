import { useEffect } from 'react';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import s from './TopNavHeader.module.scss';

import CRFFormModal from '@/components/design-request/DesignRequestModal';

import { useAppSelector } from '@/app/hooks';
import { selectTopNav, setTopNav } from '@/features/topNavSlice';

type Props = {
  pageTitle: string;
  subscriptionHoursLeft: number;
  subscriptionId: string;
}

type TopNavProps = {
  value?: Props;
}

const TopNavHeader = ({ value }: TopNavProps) => {
  const dispatch = useDispatch();
  const { pageTitle, subscriptionHoursLeft, subscriptionId } = useAppSelector(selectTopNav).value

  useEffect(() => {

    const info = {
      pageTitle: value && value.pageTitle || pageTitle,
      subscriptionHoursLeft: value && value.subscriptionHoursLeft !== undefined ? value.subscriptionHoursLeft : subscriptionHoursLeft,
      subscriptionId: value && value.subscriptionId || subscriptionId
    }

    dispatch(setTopNav(info))

  }, [value, dispatch, pageTitle, subscriptionHoursLeft, subscriptionId])

  const onClick = () => {
    console.log(`${subscriptionId} page title clicked`);
  }

  return (
    <div className={s.container}>
      <div className='flex flex-row'>
        <span className={s.title}>{pageTitle}</span>
        <div className={s.ellipsis}><IoEllipsisHorizontalSharp onClick={onClick} /></div>
      </div>

      <div className='flex flex-row mr-3'>
        <div className={s.hourContainer}><span>{subscriptionHoursLeft}h</span></div>
        {
          subscriptionHoursLeft > 0 && <CRFFormModal />
        }

      </div>
    </div>
  )
}

export default TopNavHeader;