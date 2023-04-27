import s from './TableRowAvatar.module.scss';

import Avatar from '@/components/Avatar';
import Tooltip from '@/components/Tooltip';

type RowProps = {
  name: string;
  src: string;
};

type AvatarArray = {
  items: RowProps[];
  alignment?: 'top' | 'bottom'
};

const TableRowAvatar = ({ items, alignment }: AvatarArray) => {
  return (
    <div className={s.TableRowAvatar}>
      {items.map((item, key) => {
        return (
          <Tooltip key={key} align={alignment ? alignment: 'top'} label={item.name}>
            <Avatar src={item.src} />
          </Tooltip>
        );
      })}
    </div>
  );
};

export default TableRowAvatar;
