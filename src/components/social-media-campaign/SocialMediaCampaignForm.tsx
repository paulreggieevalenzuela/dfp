import ArrowRight from '@carbon/icons-react/lib/ArrowRight';
import EventSchedule from '@carbon/icons-react/lib/EventSchedule';
import Information from '@carbon/icons-react/lib/Information';
import LoadBalancer from '@carbon/icons-react/lib/LoadBalancerVpc';
import UserSettings from '@carbon/icons-react/lib/UserSettings';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import s from './socialMediaCampaignForm.module.scss';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Elevations from '@/components/Elevations';
import { Input } from '@/components/Input';

import { useAppSelector } from '@/app/hooks';
import { selectDesignRequest } from '@/features/designRequestSlice';

import data from './social-media-information.json';

type FormValues = {
  email?: string;
};

const InputRef = forwardRef((props: any, ref: any) => {
  return (
    <div ref={ref} className="w-full">
      <Input {...props} />
    </div>
  );
});

export default function SocialMediaCampaignForm() {
  const dispatch = useDispatch();
  const { showDeliverables, showBrandAssets, openFormDeliverables } = useAppSelector(selectDesignRequest).value;
  const { formData, isFormValid } = useAppSelector(selectDesignRequest).value;

  const requiredMessage = 'This field is required';

  const validation = yup.object().shape({
    email: yup.string().required(requiredMessage),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    setValue,
    watch,
    getValues
  } = useForm<FormValues>({
    resolver: yupResolver(validation),
    defaultValues: {
      email: '',
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);

  const hasEmailValue = watch('email');

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form className={s.smcForm} onSubmit={handleSubmit(onSubmit)}>
      <p className="text-[18px] mb-2 text-black">Request Summary</p>
      <ul>
        <li>
          <LoadBalancer />
          <div className={s.requestSummaryContent}>Social Media</div>
        </li>
        <li>
          <EventSchedule />
          <div className={s.requestSummaryContent}>Proposed Deadline: <span>{data.socialMediaCampaignForm.deadlineDate}</span></div>
        </li>
        <li>
          <UserSettings />
          <div className={s.requestSummaryContent}>Project Manager:
            <span> <Avatar src={data.socialMediaCampaignForm.src} /> {data.socialMediaCampaignForm.user}</span>
          </div>
        </li>
      </ul>
      <Elevations dp="03" className="p-3 my-5">
        <p className={s.noteTitle}>
          <span>
            <Information size={16} />
          </span>
          Note
        </p>
        <p className={s.noteDescription}>
          We will contact you within the &#60;period&#62; to verify your project needs.
          Your project will start once you confirm your project manager’s hour estimates.
        </p>
      </Elevations>

      <div className={s.inviteMembers}>
        <p className={s.inviteMembersTitle}>Invite Members</p>
        <div className={s.inviteMembersField}>
          <InputRef
            width="w-full"
            placeholder="Email address separated by comma"
            {...register('email')}
            messageType={errors.email && 'error'}
            messageText={errors.email && errors.email.message}
          />
          <Button kind="primary" size="sm" className="mt-6 ml-4" disabled={!hasEmailValue}>
            Send Invite
          </Button>
        </div>
      </div>
      <p className={s.share}>
        Or share invite link to join project
        <Button kind="primary" style="link" size="sm" className="ml-2">
          <ArrowRight />
          &nbsp;&nbsp;
          Copy Link
        </Button>
      </p>
    </form>
  );
}
