import s from './page.module.scss';

import Avatar from '@/components/Avatar';
import Feed from '@/components/Feed';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Feed' />
      <Feed
        items={[
          {
            avatar: (
              <Avatar
                src='/images/mock/profile3.png'
                alt='profile3'
                size='xsmall'
                hasStatus
              />
            ),
            name: 'Michael Scott',
            action: 'commented on a post',
            dttm: 'Today at 10:20am',
          },
          {
            avatar: (
              <Avatar
                src='/images/mock/profile5.png'
                alt='profile3'
                size='xsmall'
                hasStatus
              />
            ),
            name: 'Pam Halpert',
            action: 'created a task',
            dttm: 'Yesterday at 1:45pm',
            hasLikeAction: true,
            isLiked: false,
          },
        ]}
      />
    </KitchenSinkLayout>
  );
}
