import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

type ItemProps = {
  avatar: React.ReactElement;
  name: string;
  action: string;
  dttm: string;
  hasLikeAction?: boolean;
  isLiked?: boolean;
};

type FeedProps = {
  items: ItemProps[];
};

export default function Feed({ items }: FeedProps) {
  const [likeIcon, setLikeIcon] = useState(false);

  const onClickAction = () => {
    setLikeIcon(!likeIcon);
  };

  return (
    <ul>
      {items.map((item, key) => {
        return (
          <li key={key} className='p-5'>
            <div className='flex flex-row'>
              <div className='mr-3'>{item.avatar}</div>
              <div className='text-base font-bold tracking-tight text-gray-darkest'>
                {item.name}&nbsp;{item.action}
              </div>
              &nbsp;
              <span className='text-base tracking-tight text-neutral-400'>
                {item.dttm}
              </span>
            </div>
            {item.hasLikeAction ? (
              <div className='flex pl-10'>
                {' '}
                <span>
                  {item.isLiked || likeIcon ? (
                    <FaHeart size={7.5} />
                  ) : (
                    <FaRegHeart size={7.5} />
                  )}
                </span>
                <span
                  className='ml-2 cursor-pointer text-base text-neutral-400 hover:text-blue-600'
                  onClick={onClickAction}
                >
                  {' '}
                  {likeIcon ? 'Unlike' : 'Like'}{' '}
                </span>
              </div>
            ) : (
              ''
            )}
          </li>
        );
      })}
    </ul>
  );
}
