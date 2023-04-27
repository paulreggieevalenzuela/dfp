import { CaretDown, CaretSort, CaretUp } from '@carbon/icons-react';
import ChevronDown from '@carbon/icons-react/lib/ChevronDown';
import clsx from 'clsx';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

import s from './Table.module.scss';

import Elevations from '@/components/Elevations';
import Menu from '@/components/Menu';
import Pagination from '@/components/Pagination';

import { useOnClickOutside } from '@/utils/customHooks';

type colDefinition = {
  label: string;
  field: string;
  customCell?: boolean;
  icon?: string | React.ReactElement | React.ReactNode;
  hasCheckbox?: boolean;
  hasIcon?: boolean;
  type?: string;
  hasPerRowIcon?: boolean;
  isFilled?: boolean;
  alignment?: 'center' | string;
};

type Props = {
  data?: React.ReactNode[] | any[];
  colDefs: colDefinition[];
  rowHeight?: 'relaxed' | 'regular' | 'condensed';
  title?: React.ReactNode;
  minWidth?: boolean;
  width?: string;
  hasBorder?: boolean;
  hasFullBorder?: boolean;
  fullWidth?: boolean;
  paginationType?: 1 | 2;
  className?: string;
  rowTypeStyle?: 'default' | 'alternate';
  headerStyle?: 'default' | 'plain';
  headerCustomStyle?: React.ReactNode;
  customAction?: React.ReactNode | React.ReactElement;
  extraRowActionHeader?: React.ReactNode;
  extraRowActions?: any[];
  defaultItemsPerPage?: 'all' | number;
  actionRowClick?: (action: string, rowData: any) => void;
};

const sortByType = (key: string, type: string, data: any[]) => {
  switch (type) {
    case 'ascending':
      return data.slice().sort((a: any, b: any) => {
        if (a instanceof Object && b instanceof Object) {
          if (typeof a[key] === 'string' && typeof b[key] === 'string') {
            return a[key].localeCompare(b[key], 'en', { numeric: true });
          } else if (
            typeof a[key].props.children === 'string' &&
            typeof b[key].props.children === 'string'
          ) {
            return a[key].props.children.localeCompare(
              b[key].props.children,
              'en',
              { numeric: true }
            );
          } else {
            return a[key].props.children[0].props.children.localeCompare(
              b[key].props.children[0].props.children,
              'en',
              { numeric: true }
            );
          }
        } else if (typeof a[key] === 'string' && typeof b[key] === 'string') {
          return a[key].localeCompare(b[key], 'en', { numeric: true });
        }
      });
    case 'descending':
      return data.slice().sort((a: any, b: any) => {
        if (a instanceof Object && b instanceof Object) {
          if (typeof b[key] === 'string' && typeof a[key] === 'string') {
            return b[key].localeCompare(a[key], 'en', { numeric: true });
          } else if (
            typeof b[key].props.children === 'string' &&
            typeof a[key].props.children === 'string'
          ) {
            return b[key].props.children.localeCompare(
              a[key].props.children,
              'en',
              { numeric: true }
            );
          } else {
            return b[key].props.children[0].props.children.localeCompare(
              a[key].props.children[0].props.children,
              'en',
              { numeric: true }
            );
          }
        } else if (typeof b[key] === 'string' && typeof a[key] === 'string') {
          return b[key].localeCompare(a[key], 'en', { numeric: true });
        }
      });
    default:
      return data;
  }
};

export default function Table({
  data = [],
  colDefs = [],
  rowHeight = 'relaxed',
  minWidth = false,
  fullWidth = false,
  width,
  hasBorder = false,
  hasFullBorder = false,
  rowTypeStyle = 'default',
  paginationType,
  customAction,
  headerStyle = 'default',
  headerCustomStyle,
  className,
  title,
  extraRowActions = [],
  extraRowActionHeader,
  defaultItemsPerPage = 10,
  actionRowClick,
}: Props) {
  const [selections, setSelections] = useState<any[]>(
    new Array(data.length).fill(false)
  );
  const router = useRouter();
  const [tableData, setTableData] = useState(data);
  const [splicedData, setSplicedData] = useState(data);
  const [page, setPage] = useState(router.query.page ? +router.query.page : 1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [isHeaderChecked, setHeaderChecked] = useState(false);
  const [sortedBy, setSortedBy] = useState<{
    column: string;
    type: 'ascending' | 'descending' | 'default';
  }>({ column: '', type: 'default' });
  const [selectedRowAction, setSelectedRowAction] = useState(-1);
  const [selectedRowData, setSelectedRowData] = useState({});
  const rowActionRef = useRef(null);  

  const handleChange = (pos: number) => {
    const updatedSelections = selections.map((item, i) =>
      i === pos ? !item : item
    );

    setSelections(updatedSelections);
  };

  const tableWrapperStyles = clsx(
    s.TableWrapper,
    `w-[${width}px]`,
    hasBorder && s.TableWrapperHasBorder,
    fullWidth && s.TableWrapperFullWidth,
    className
  );

  const tableStyles = clsx('table', {
    '--min-width': minWidth,
    '--relaxed': rowHeight === 'relaxed',
    '--regular': rowHeight === 'regular',
    '--condensed': rowHeight === 'condensed',
  });

  useEffect(() => {
    if (itemsPerPage === 'all') {
      if (sortedBy.column !== '') {
        setSplicedData(sortByType(sortedBy.column, sortedBy.type, tableData));
      } else {
        setSplicedData(tableData);
      }
    } else {
      const data = tableData.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
      );
      if (sortedBy.column !== '') {
        setSplicedData(sortByType(sortedBy.column, sortedBy.type, data));
      } else {
        setSplicedData(data);
      }
    }
  }, [tableData, page, itemsPerPage, sortedBy.column, sortedBy.type]);

  useEffect(() => {
    router.push( router.pathname + '?page=' + page, undefined, { shallow: true });
  }, [page])

  const handleCheck = () => {
    setHeaderChecked(!isHeaderChecked);
    setSelections(Array(data.length).fill(!isHeaderChecked));
  };

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const sortDataSet = (key: string) => {
    if (sortedBy.type === 'default') {
      setSortedBy({ column: key, type: 'descending' });
      setSplicedData(sortByType(key, 'descending', splicedData));
    } else if (sortedBy.type === 'descending') {
      setSortedBy({ column: key, type: 'ascending' });
      setSplicedData(sortByType(key, 'ascending', splicedData));
    } else {
      setSortedBy({ column: '', type: 'default' });
      if (itemsPerPage === 'all') {
        setSplicedData(tableData);
      } else {
        const data = tableData.slice(
          (page - 1) * itemsPerPage,
          page * itemsPerPage
        );
        setSplicedData(data);
      }
    }
  };

  const closeActions = useCallback(() => {
    setSelectedRowAction(-1);
  }, []);

  useOnClickOutside(rowActionRef, closeActions);

  const onClickRowActions = (data: any, idx: number) => {
    if (selectedRowAction == idx) {
      setSelectedRowAction(-1);
      setSelectedRowData([]);
    } else {
      setSelectedRowAction(idx);
      setSelectedRowData(data);
    }
  };

  const rowOnClickAction = (action: string, rowData: any) => {
    if (actionRowClick && !_.isEmpty(rowData)) {
      return actionRowClick(action, rowData);
    }
  };

  const actions = extraRowActions.map((values: any) => ({
    ...values,
    link: rowOnClickAction(values.label, selectedRowData),
  }));

  return (
    <div className={tableWrapperStyles}>
      {title && (
        <div className={s.TableWrapperHeader}>
          {typeof title === 'string' ? <h4>{title}</h4> : <div>{title}</div>}
          {customAction}
        </div>
      )}
      <table className={tableStyles}>
        {colDefs.length && (
          <thead
            className={clsx(
              headerStyle == 'plain' ? 'plain' : '',
              headerCustomStyle
            )}
          >
            <tr>
              {colDefs.map((colHeader, i) => {
                const tableHeaderStyles = clsx('table-header__item', {
                  '--is-number': colHeader.type === 'number',
                  '--is-centered': colHeader.alignment === 'center',
                });
                return (
                  <th key={i} className={hasFullBorder ? 'bordered' : ''}>
                    <div className={tableHeaderStyles}>
                      <div className='table-header__content'>
                        {colHeader.hasCheckbox && (
                          <input
                            type='checkbox'
                            id={`checkbox-${i}`}
                            onChange={handleCheck}
                            checked={isHeaderChecked}
                          />
                        )}
                        <p>{colHeader.label}</p>
                      </div>
                      {colHeader.hasIcon &&
                      !_.isEqual(sortedBy.column, colHeader.field) ? (
                        <CaretSort
                          size='16'
                          onClick={() => sortDataSet(colHeader.field)}
                        />
                      ) : sortedBy.type === 'descending' &&
                        _.isEqual(sortedBy.column, colHeader.field) ? (
                        <CaretDown
                          size='16'
                          onClick={() => sortDataSet(colHeader.field)}
                        />
                      ) : sortedBy.type === 'ascending' &&
                        _.isEqual(sortedBy.column, colHeader.field) ? (
                        <CaretUp
                          size='16'
                          onClick={() => sortDataSet(colHeader.field)}
                        />
                      ) : null}
                    </div>
                  </th>
                );
              })}
              {extraRowActions && extraRowActions.length > 0 && (
                <th>
                  <div className='relative top-1 mr-3 flex'>
                    {extraRowActionHeader ? (
                      extraRowActionHeader
                    ) : (
                      <IoEllipsisHorizontalSharp />
                    )}
                  </div>
                </th>
              )}
            </tr>
          </thead>
        )}
        <tbody ref={rowActionRef}>
          {splicedData.length ? (
            <Fragment>
              {splicedData.map((d: any, dataIndex: number) => {
                const tableBodyRowStyles = clsx({
                  '--alternate':
                    !selections[dataIndex] && rowTypeStyle === 'alternate',
                  '--active': selections[dataIndex],
                  '--total-row': d.isTotalRow, // To set the style of the total row
                });

                return (
                  <tr key={dataIndex} className={tableBodyRowStyles}>
                    {colDefs.map((col, colIdx) => {
                      const tableContentRowCellStyle = clsx('table-col__item', {
                        '--is-number': col.type === 'number',
                        '--is-centered': col.alignment === 'center',
                      });
                      return (
                        <td
                          key={colIdx}
                          className={clsx(
                            col.isFilled && d.fillType,
                            hasFullBorder && 'bordered'
                          )}
                        >
                          <div className={tableContentRowCellStyle}>
                            <div className='table-col__content'>
                              {col.hasCheckbox && (
                                <input
                                  type='checkbox'
                                  id={`table-col__checkbox-${dataIndex}`}
                                  checked={
                                    !!selections[dataIndex] || isHeaderChecked
                                  }
                                  onChange={(e) => handleChange(dataIndex)}
                                />
                              )}
                              {col.customCell ? (
                                d[col.field]
                              ) : (
                                <span className='text-sm'>{d[col.field]}</span>
                              )}
                            </div>
                            {(d.hasIcon || col.hasPerRowIcon) && (
                              <ChevronDown size='16' />
                            )}
                          </div>
                        </td>
                      );
                    })}
                    {extraRowActions && extraRowActions.length > 0 && (
                      <td id='row'>
                        <div className='relative mr-3 flex text-gray-400'>
                          <IoEllipsisHorizontalSharp
                            onClick={() => onClickRowActions(d, dataIndex)}
                          />
                          {selectedRowAction == dataIndex && (
                            <Elevations dp='00' className={s.popupContainer}>
                              <Menu items={actions} />
                            </Elevations>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </Fragment>
          ) : (
            <tr>
              <td>No Available data.</td>
            </tr>
          )}
        </tbody>
      </table>
      {paginationType && (
        <div className='px-[16px] py-[20px]'>
          {paginationType === 1 ? (
            <Pagination
              type='button'
              numItems={data.length}
              itemsPerPage={itemsPerPage === 'all' ? data.length : itemsPerPage}
              page={page}
              onPageSelect={setPage}
              className={s.paginationStyle}
            />
          ) : (
            <Pagination
              type='icon'
              numItems={data.length}
              itemsPerPage={itemsPerPage === 'all' ? data.length : itemsPerPage}
              page={page}
              onPageSelect={setPage}
              onItemsPerPageSelect={setItemsPerPage}
              className={s.paginationStyle}
            />
          )}
        </div>
      )}
    </div>
  );
}
