import {
  ChevronSortDown,
  ChevronSortUp,
  List,
  RadioButtonChecked,
  SendAlt,
  ThumbsUp,
  ThumbsUpFilled,
  View,
} from '@carbon/icons-react';
import { RadioButton, RadioButtonGroup } from 'carbon-components-react';
import { useEffect, useState } from 'react';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

import s from './socialMediaCampaign.module.scss';

import Avatar from '@/components/Avatar';
import Deliverables, { DeliverableItem } from '@/components/Deliverables';
import { Input } from '@/components/Input';

import data from './social-media-information.json';
import sidebar from './social-media-sidebar.json';

type LabelProps = {
  title: string;
  time: string;
  divider: string;
};

type InformationProps = {
  title: string;
  author: {
    name: string;
    src: string;
  };
  time: string;
  link: string;
  description: string;
  isLikedByUser: boolean;
  likeCount: number;
  watcherCount: number;
  deliverables: DeliverableItem[];
  thread: CommentProps[];
};

type CommentProps = {
  user: {
    name: string;
    src: string;
  };
  comment: string;
  time: string;
  likeCount: number;
  likedByUser: boolean;
  watchCount: number;
  replies?: ReplyProps[];
};

type ReplyProps = {
  user: {
    name: string;
    src: string;
  };
  comment: string;
  time: string;
  likeCount: number;
  likedByUser: boolean;
  watchCount: number;
};

const LabelText = ({ title, time, divider }: LabelProps) => {
  return (
    <div className={s.labelContainer}>
      <div className={s.labelTitle}>{title}</div>&nbsp;&nbsp;
      <div className={s.labelDivider}>{divider}</div> &nbsp;&nbsp;
      <div className={s.labelTime}>{time}</div>
    </div>
  );
};

export default function SocialMediaCampaignUpdates() {
  const [selectedContent, setSelectedContent] = useState<string>('Version 01');
  const [content, setContent] = useState<any>(data);
  const [readMore, toggleReadMore] = useState(true);
  const [information, setInformation] = useState<InformationProps>({
    title: 'Placeholder',
    author: {
      name: 'Jack Doe',
      src: '/images/mock/profile5.png',
    },
    time: '3d',
    link: '/',
    description: 'No information provided.',
    isLikedByUser: false,
    likeCount: 0,
    watcherCount: 1,
    deliverables: [],
    thread: [],
  });

  useEffect(() => {
    setInformation(content[selectedContent as keyof typeof data]);
  }, [selectedContent, content]);

  const SocialMediaSideBar = () => {
    return (
      <div className={s.SocialMediaSidebar}>
        <div className={s.contents}>
          <List />
          <RadioButtonGroup
            name='group-1'
            orientation='vertical'
            className='flex-auto'
            valueSelected={selectedContent}
          >
            {sidebar.content.map((item, idx) => {
              return (
                <RadioButton
                  key={`radio-${idx}`}
                  id={`radio-${idx}`}
                  labelText={
                    <LabelText
                      title={item.title}
                      divider='•'
                      time={item.time}
                    />
                  }
                  onClick={() => setSelectedContent(item.title)}
                  value={item.title}
                />
              );
            })}
          </RadioButtonGroup>
        </div>
      </div>
    );
  };

  const SocialMediaInformation = () => {
    return (
      <div className={s.SocialMediaInformation}>
        <section className={s.topRow}>
          <div className={s.topRowLeft}>
            <RadioButtonChecked size={24} /> &nbsp; {selectedContent}
          </div>
          <div className={s.topRowRight}>
            <div className={s.likes}>
              {information.likeCount}
              <ThumbsUpFilled />
              <span className={information.isLikedByUser ? 'liked' : ''}>
                {' '}
                Like{' '}
              </span>
            </div>
            <div className={s.watchers}>
              <View className={s.watch} />
              {information.watcherCount}
            </div>
            <div>
              <IoEllipsisHorizontalSharp className={s.more} />
            </div>
          </div>
        </section>

        <section className={s.descriptionHeader}>
          <Avatar src={information.author.src} size='xsmall' />
          <LabelText
            title={information.title}
            divider='•'
            time={information.time}
          />
        </section>

        <section className={s.descriptionBody}>
          <div>
            <a href={information.link}>{information.link}</a>
            <div className={s.body}>
              {information.description.substring(0, 180)}
              {!readMore &&
                information.description.substring(
                  180,
                  information.description.length
                )}
            </div>
            <div
              className={s.readMore}
              onClick={() => toggleReadMore(!readMore)}
            >
              {information.description.length > 180 && readMore ? (
                <div>
                  <ChevronSortDown size={20} />
                  Read more{' '}
                </div>
              ) : (
                information.description.length > 180 && (
                  <div className='flex justify-center'>
                    <ChevronSortUp size={20} className='pt-1' />
                    Show less{' '}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className={s.deliverables}>
          <h6> Deliverables </h6>

          <Deliverables items={information.deliverables} />
        </section>
      </div>
    );
  };

  const CommentBox = ({
    user,
    comment,
    time,
    likeCount,
    likedByUser,
    watchCount,
  }: CommentProps) => {
    return (
      <div className={s.CommentBox}>
        <div className='flex flex-row gap-x-2'>
          <Avatar src={user.src} />

          <div>
            <div className={s.commentContainer}>
              <div className='mb-3 flex flex-row justify-between'>
                <div className={s.name}>{user.name}</div>
                <div className={s.time}>{time}</div>
              </div>

              {/* // TO DO: eventually change implementation for comment styling depending on requirements (parse the string comment an return a react node / HTML element)*/}
              <div className={s.comment}><div dangerouslySetInnerHTML={{ __html: comment }} /></div>
            </div>

            <div className={s.actions}>
              <div>
                {likeCount}
                {likedByUser}&nbsp;
                {likedByUser ? (
                  <ThumbsUpFilled className={s.liked} />
                ) : (
                  <ThumbsUp className={s.like} />
                )}
              </div>
              <div>
                <View className={s.watch} />
                &nbsp;{watchCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SocialMediaThread = () => {
    return (
      <div className={s.SocialMediaThread}>
        <div className='mb-3 flex flex-row items-center justify-between gap-1'>
          <div className={s.labelTitle}>
            <RadioButtonChecked size={20} /> {information.title}
          </div>
          <div className={s.divider}></div>
          <div className={s.labelTime}>{information.time}</div>
        </div>

        <div className={s.threadContainer}>
          {information.thread.map((item, idx) => {
            return (
              <div key={idx}>
                <CommentBox
                  user={item.user}
                  comment={item.comment}
                  time={item.time}
                  likeCount={item.likeCount}
                  watchCount={item.watchCount}
                  likedByUser={item.likedByUser}
                />
                {item.replies &&
                  item.replies.length > 0 &&
                  item.replies.map((reply, i) => {
                    return (
                      <div key={i} className={s.replies}>
                        <CommentBox
                          user={reply.user}
                          comment={reply.comment}
                          time={reply.time}
                          likeCount={reply.likeCount}
                          watchCount={reply.watchCount}
                          likedByUser={reply.likedByUser}
                        />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>

        <div className={s.replyContainer}>
          <div>
            <Avatar src='/images/mock/profile3.png' />
          </div>
          <div className='-mt-6 w-full text-gray-400'>
            <Input placeholder='Reply' width='w-full' iconRight={<SendAlt />} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={s.SocialMediaContainer}>
      <SocialMediaSideBar />
      <div className={s.leftContainer}>
        <SocialMediaInformation />
      </div>
      <div className={s.rightContainer}>
        <SocialMediaThread />
      </div>
    </div>
  );
}
