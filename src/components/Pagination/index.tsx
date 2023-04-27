import ChevronDown from '@carbon/icons-react/lib/ChevronDown';
import ChevronLeft from '@carbon/icons-react/lib/ChevronLeft';
import ChevronRight from '@carbon/icons-react/lib/ChevronRight';

import clsx from 'clsx';
import { useState } from 'react';

import styles from './Pagination.module.scss';

import Button from '@/components/Button';
import Elevations from '@/components/Elevations';

const itemsPerPageSelections = [10, 20, 30, 40, 50];

type PaginationProps = {
  type: 'button' | 'icon';
  page: number;
  numItems: number;
  itemsPerPage: number;
  className?: string;
  onPageSelect?: (arg0: number) => void;
  onItemsPerPageSelect?: (arg0: number) => void;
};

const Pagination = ({
  type,
  page,
  numItems,
  itemsPerPage,
  className,
  onPageSelect = () => null,
  onItemsPerPageSelect = () => null,
}: PaginationProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const offset = (page - 1) * itemsPerPage;
  const firstItemNumber = offset + 1;
  const lastItemNumber = Math.min(offset + itemsPerPage, numItems);

  const totalPages = Math.ceil(numItems / itemsPerPage);

  const onItemsPerPageUpdate = (count: number) => {
    onItemsPerPageSelect(count);
    setShowDropdown(false);
  };

  return (
    <div
      className={clsx(
        styles.Pagination,
        {
          'pagination--button-type': type === 'button',
          'pagination--icon-type': type === 'icon',
        },
        className
      )}
    >
      {type === 'button' && (
        <>
          <div className='pagination--description'>
            Showing {firstItemNumber}-{lastItemNumber} of {numItems} items
          </div>
          <div className='pagination--page-selector'>
            {[...Array(totalPages)].map((_, idx) => (
              <Button
                key={`page-button-${idx + 1}`}
                selected={idx + 1 === page}
                onClick={() => onPageSelect(idx + 1)}
              >
                {idx + 1}
              </Button>
            ))}
          </div>
        </>
      )}
      {type === 'icon' && (
        <>
          <div className='pagination--num-selector'>
            Rows per page:&nbsp;&nbsp;{itemsPerPage}
            <div className='dropdown'>
              <button
                className='dropdown-icon'
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <ChevronDown />
              </button>
              {showDropdown && (
                <Elevations dp='00' className='dropdown-items'>
                  <ul>
                    {itemsPerPageSelections.map((ipp) => (
                      <li
                        key={`items-per-page-${ipp}`}
                        onClick={() => onItemsPerPageUpdate(ipp)}
                      >
                        {ipp}
                      </li>
                    ))}
                  </ul>
                </Elevations>
              )}
            </div>
          </div>
          <div className='pagination--description'>
            <div>
              {firstItemNumber}-{lastItemNumber} of {numItems} items
            </div>
            <div className='pagination--page-nav'>
              <Button
                size='sm'
                onClick={() => onPageSelect(page - 1)}
                disabled={page <= 1}
              >
                <ChevronLeft />
              </Button>
              <Button
                size='sm'
                onClick={() => onPageSelect(page + 1)}
                disabled={page >= totalPages}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
