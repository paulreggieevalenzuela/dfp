import {
  ArrowLeft,
  Calendar,
  CheckmarkOutline,
  Close,
  Hourglass,
  Timer,
  UserFollow,
} from '@carbon/icons-react';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import s from './socialMediaCampaignHeader.module.scss';

import Avatar from '@/components/Avatar';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import RoundedButton from '@/components/Button/RoundedButton';
import TableRowAvatar from '@/components/TableRowAvatar';
import { ModalProps } from '@/components/Modal';
import SocialMediaCampaignForm from './SocialMediaCampaignForm';

import { useAppSelector } from '@/app/hooks';
import { selectModalContent, setModal } from '@/features/modalSlice';

type HeaderProps = {
  status: string;
  dueDates: string;
  estimatedHours: number | string;
  loggedHours: number | string;
  user: {
    name: string;
    src: string;
  };
  team: {
    name: string;
    src: string;
  }[];
};

type Props = {
  header: HeaderProps;
};

export default function SocialMediaCampaignHeader({ header }: Props) {
  const dispatch = useDispatch();
  const modal = useAppSelector(selectModalContent);

  const onClick = () => {
    // TODO: redirect to correct page (based on requirements) and remove console log after actual on click event is implemented
    console.log('Ellipsis page title clicked!');
  };

  const socialMediaCampaignForm: ModalProps = {
    open: true,
    size: 'xl',
    customHeader: <h4 className="text-[22px]">Social Media Campaign</h4>,
    verticalOverflow: 'scroll',
    children: <SocialMediaCampaignForm />,
    hasBorderTop: true,
    actions: [
      {
        children: 'View Project',
        kind: 'primary',
        style: 'primary',
        onClick: () => {
          // TODO: remove time out after implementing submit form success
          setTimeout(() => dispatch(setModal(null)), 5000);
        }
      }
    ]
  };

  const onClickInvite = () => {
    // TODO: implement action for invite button (based on requirements) and remove console log after actual on click event is implemented
    console.log('Invite clicked!');
    dispatch(setModal(socialMediaCampaignForm));
  };

  const onClickClose = () => {
    // TODO: redirect to another page (based on requirements) and remove console log after actual on click event is implemented
    console.log('Close X clicked!');
  };

  const onClickBack = () => {
    // TODO: redirect/load to another page (based on requirements) and remove console log after actual on click event is implemented
    console.log('Back clicked!');
  };

  const Divider = () => {
    return <div className={s.divider}></div>;
  };

  return (
    <div className={s.Header}>
      <div className='flex flex-row'>
        <div className={s.navBack}>
          <RoundedButton style='outline' onClick={onClickBack}>
            <ArrowLeft />
          </RoundedButton>
        </div>
        <Divider />
        <span className={s.title}> Social Media Campaign </span>
        <div className={s.ellipsis}>
          <IoEllipsisHorizontalSharp onClick={onClick} />
        </div>
      </div>

      <div className='my-auto mr-3 flex flex-row gap-5'>
        <div className={s.status}>
          <CheckmarkOutline size={24} />
          <Badge label={header.status} size='small' type='disabled' />
        </div>

        <Divider />

        <div className={s.tracker}>
          <div> Due Dates </div>
          <div>
            <Calendar /> &nbsp; {header.dueDates}{' '}
          </div>
        </div>

        <Divider />

        <div className={s.tracker}>
          <div> Estimated </div>
          <div>
            <Hourglass /> &nbsp; {header.estimatedHours} h
          </div>
        </div>

        <div className={s.tracker}>
          <div> Logged </div>
          <div>
            <Timer /> &nbsp; {header.loggedHours} h{' '}
          </div>
        </div>

        <Divider />

        <div>
          <Avatar src={header.user.src} />
        </div>

        <Divider />

        <div className='flex flex-row'>
          <TableRowAvatar items={header.team} alignment='bottom' />
        </div>

        <Button
          style='outline'
          widthSizing='hug'
          size='sm'
          onClick={onClickInvite}
        >
          {' '}
          <UserFollow /> &nbsp; Invite{' '}
        </Button>

        <div className={s.close}>
          <Close size={24} onClick={onClickClose} />
        </div>
      </div>
    </div>
  );
}
