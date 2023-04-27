import Avatar from '@/components/Avatar';
import Container from '@/components/layouts/Container';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Notification from '@/components/Notification';
import NotificationMenu from '@/components/Notification/NotificationMenu';
import TitleBar from '@/components/TitleBar';

const ONE_DAY_IN_MILLIS = 24 * 3600 * 1000;

export default function Page() {
  const currentDateTime = new Date();
  return (
    <KitchenSinkLayout>
      <TitleBar title='Notification' description='' />

      <Container>
        <NotificationMenu>
          <Notification
            avatar={<Avatar src='/images/mock/profile3.png' />}
            name='Michael Scott'
            action='mentioned you in a'
            actionItem='note'
            dateTime={currentDateTime}
            message='Michael Scott: “Lorem ipsum dolor sit amet”'
            unread
          />
          <Notification
            avatar={<Avatar src='/images/mock/profile3.png' />}
            name='Michael Scott'
            action='mentioned you in a'
            actionItem='note'
            dateTime={
              new Date(currentDateTime.getTime() - 1 * ONE_DAY_IN_MILLIS)
            }
            message='Michael Scott: “Lorem ipsum dolor sit amet”'
          />
          <Notification
            avatar={<Avatar src='/images/mock/profile3.png' />}
            name='Michael Scott'
            action='mentioned you in a'
            actionItem='note'
            dateTime={
              new Date(currentDateTime.getTime() - 5 * ONE_DAY_IN_MILLIS)
            }
            message='Michael Scott: “Lorem ipsum dolor sit amet”'
          />
          <Notification
            avatar={<Avatar src='/images/mock/profile3.png' />}
            name='Michael Scott'
            action='mentioned you in a'
            actionItem='note'
            dateTime={
              new Date(currentDateTime.getTime() - 15 * ONE_DAY_IN_MILLIS)
            }
            message='Michael Scott: “Lorem ipsum dolor sit amet”'
          />
          <Notification
            avatar={<Avatar src='/images/mock/profile3.png' />}
            name='Michael Scott'
            action='mentioned you in a'
            actionItem='note'
            dateTime={
              new Date(currentDateTime.getTime() - 80 * ONE_DAY_IN_MILLIS)
            }
            message='Michael Scott: “Lorem ipsum dolor sit amet”'
            unread
          />

          <Notification
            avatar={<Avatar src='/images/mock/profile3.png' />}
            name='Michael Scott'
            action='mentioned you in a'
            actionItem='note'
            dateTime={
              new Date(currentDateTime.getTime() - 400 * ONE_DAY_IN_MILLIS)
            }
            message='Michael Scott: “Lorem ipsum dolor sit amet”'
          />
        </NotificationMenu>
      </Container>
    </KitchenSinkLayout>
  );
}
