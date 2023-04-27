import { AddAlt, ArrowRight, Search, WarningFilled } from '@carbon/icons-react';
import _ from 'lodash';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';

import s from './ProjectsTable.module.scss';

import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Counter from '@/components/Counter';
import Elevations from '@/components/Elevations';
import { Input } from '@/components/Input';
import Menu from '@/components/Menu';
import Table from '@/components/Table';
import TableRowAvatar from '@/components/TableRowAvatar';

import { useOnClickOutside } from '@/utils/customHooks';

type ColumnProps = {
  label: string;
  field: string;
  hasCheckbox?: boolean;
  alignment?: string;
};

type RowActionProps = {
  label: string;
};

type Props = {
  data: any[];
  columns: ColumnProps[];
  rowActions?: RowActionProps[];
  filterByColumns?: string[];
  sortByColumns?: string[];
};

const ProjectTable = ({
  data,
  columns,
  rowActions = [],
  filterByColumns = [],
  sortByColumns = [],
}: Props) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [selectedFilterObj, setSelectedFilterObj ] = useState<{column: string, value: string}[]>([]);
  const [filterObj, setFilterObj] = useState<{[k: string]: any}>({});
  const [activeFilter, setActiveFilter] = useState(false);
  const [filterSelection, setFilterSelection] = useState<
    { label: string; withArrow: boolean; linkDisabled: boolean }[]
  >([]);
  const [activeSort, setActiveSort] = useState(false);
  const [sortSelection, setSortSelection] = useState<
    { label: string; linkDisabled: boolean }[]
  >([]);
  const [ filteredData, setFilteredData ] = useState(data);

  const originalDataSet = data;
  const [tableData, setTableData] = useState(data);
  const [displayData, setDisplayData] = useState(
    data.map((values: any) => ({
      ...values,
      client: <span className={s.rowText}>{values.client}</span>,
      dueDate: <span className={s.rowText}>{values.dueDate}</span>,
      estimatedHours: (
        <span className={s.rowText}>{values.estimatedHours}</span>
      ),
      progress:
        values.progress == 'Complete' ? (
          <Badge label={values.progress} type='success' size='small' />
        ) : values.progress == 'For Review' ? (
          <Badge label={values.progress} type='primary' size='small' />
        ) : values.progress == 'In Progress' ? (
          <Badge label={values.progress} type='warning' size='small' />
        ) : (
          <Badge label={values.progress} type='disabled' size='small' />
        ),
      priority: values.priority ? (
        <WarningFilled className='text-gray-200' />
      ) : null,
      pm: <TableRowAvatar items={values.pm} />,
      project: (
        <div className={s.projectDiv}>
          <div>{values.project}</div>
          <div className={s.counter}>
            <span>{values.count}</span>
          </div>
        </div>
      ),
    }))
  );

  useEffect(() => {
    setDisplayData(
      tableData.map((values: any) => ({
        ...values,
        client: <span className={s.rowText}>{values.client}</span>,
        dueDate: <span className={s.rowText}>{values.dueDate}</span>,
        estimatedHours: (
          <span className={s.rowText}>{values.estimatedHours}</span>
        ),
        progress:
          values.progress == 'Complete' ? (
            <Badge label={values.progress} type='success' size='small' />
          ) : values.progress == 'For Review' ? (
            <Badge label={values.progress} type='primary' size='small' />
          ) : values.progress == 'In Progress' ? (
            <Badge label={values.progress} type='warning' size='small' />
          ) : (
            <Badge label={values.progress} type='disabled' size='small' />
          ),
        priority: values.priority ? (
          <WarningFilled className='text-gray-200' />
        ) : null,
        pm: <TableRowAvatar items={values.pm} />,
        project: (
          <div className={s.projectDiv}>
            <div>{values.project}</div>
            <Counter count={values.count} />
          </div>
        ),
      }))
    );
  }, [tableData]);

  const SearchBar = () => {
    const ref = useRef(null);

    const onSearch = () => {
      setActiveSearch(!activeSearch);
    };

    function onChange(e: any) {
      const inputValue = e.target.value;
      
      if(inputValue === "") {
        setTableData(filteredData)
      } else {
        setTableData(
          filteredData.filter((set: any) =>
            set.project.toLowerCase().includes(e.target.value.toLowerCase())
          ));
      }
      
      
      setSearchString(inputValue);
    }

    return (
      <div ref={ref} className={s.SearchBar}>
        <Button style='lite' size='sm' widthSizing='hug' onClick={onSearch}>
          Search &nbsp; <ArrowRight />
        </Button>
        {activeSearch && (
          <div className={s.searchInput}>
            <Input
              id='search'
              onChange={onChange}
              value={searchString}
              iconRight={<Search />}
              autoFocus={true}
            />
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    setFilterSelection(generateFilterSelection());
  }, [selectedFilterObj]);

  useEffect(() => {
    setFilteredData((prevState) => prevState);
  }, [tableData])

  const generateFilterSelection = () => {
    const definition: {
      label: string;
      withArrow: boolean;
      linkDisabled: boolean;
    }[] = [];

    filterByColumns.map((column: string) => {
      const columnValues = originalDataSet
        .map((set: any) => set[column as keyof typeof data])
        .filter((x, i, a) => a.indexOf(x) == i);
      const subItems: { label: string }[] = [];

      //create sub items based on unique column values
      columnValues.map((value: any) => {
        if (value instanceof Array) {
          value.map((val) => {
            const subItemsList: {
              label: string;
              hasCheckbox: boolean;
              isChecked: boolean;
              onClick: ChangeEventHandler;
              className: string;
            } = {
              label: val.name,
              hasCheckbox: true,
              isChecked: selectedFilterObj.some((x) => x.value === val.name), //selectedFilters.indexOf(val.name) > -1,
              onClick: (e) => onFilterCheck(e, val.name, column),
              className: s.menuStyle,
            };
            subItems.push(subItemsList);
          });
        } else {
          const subItemsList: {
            label: string;
            hasCheckbox: boolean;
            isChecked: boolean;
            onClick: ChangeEventHandler;
            className: string;
          } = {
            label: value,
            hasCheckbox: true,
            isChecked: selectedFilterObj.some((x) => x.value === value), //selectedFilters.indexOf(value) > -1,
            onClick: (e) => onFilterCheck(e, value, column),
            className: s.menuStyle,
          };
          subItems.push(subItemsList);
        }
      });

      //format column key (camelCase / lowercase) to uppercase
      const formatLabel = column
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (str: string) {
          return str.toUpperCase();
        });

      //build json object for menu
      const jsonObj = {
        label: formatLabel.toUpperCase(),
        withArrow: true,
        linkDisabled: true,
        subItems: subItems.filter(
          (val, index, arr) =>
            arr.findIndex((data) => data.label === val.label) === index
        ),
      };

      definition.push(jsonObj);
    });
    return definition;
  };

  const onFilterCheck = (e: any, value: string, column: string) => {

    if (e.target.checked) {
      const clone = _.cloneDeep(selectedFilterObj);
      const objectList = clone.map((data) => {
        return data;
      });

      setSelectedFilterObj([...objectList, { column: column, value: value}]);


      const currentFilter = [...selectedFilterObj, { column: column, value: value}];

      const out = currentFilter.reduce((a:any, v:any) => {
        if(a[v.column]) {
          a[v.column].value = [a[v.column].value, v.value].join(',').split(",")
        } else {
          a[v.column] = v
        }
        return a
      }, {})

      const obj:any = {};

      Object.values(out).map((f:any) => {
        obj[f.column] = f.value;
      });

      setFilterObj(obj);

      setTableData(originalDataSet.filter(function(item) {
        for (const key in obj) {
          if(item[key] instanceof Array && !item[key].some((item: any) => obj[key].includes(item.name))) {
            return false
          } else if (!(item[key] instanceof Array) && (item[key] === undefined || !obj[key].includes(item[key]))) {
            return false;
          }
        }
        return true;
      }));
    } else {
      setSelectedFilterObj(selectedFilterObj.filter((data:any) => data instanceof Array ? !data.includes(value) : data.value != value));

      const modCurrentFilter = filterObj;
      if(filterObj[column] instanceof Array) {
        modCurrentFilter[column] = _.uniq(filterObj[column].filter((data:any) => data != value));
        if(modCurrentFilter[column].length == 0) {
          delete modCurrentFilter[column];
        }
      } else {
        delete modCurrentFilter[column];
      }

      setFilterObj(modCurrentFilter);

      selectedFilterObj.length == 0 ? setTableData(originalDataSet) : 
      setTableData(originalDataSet.filter(function(item) {
        for (const key in modCurrentFilter) {
          if(item[key] instanceof Array && !item[key].some((item: any) => modCurrentFilter[key].includes(item.name))) {
            return false
          } else if (!(item[key] instanceof Array) && (item[key] === undefined || !modCurrentFilter[key].includes(item[key]))) {
            return false;
          }
        }
        return true;
      }));
    }
  };

  const FilterBar = () => {
    
    const ref = useRef(null);

    const onFilter = () => {
      setActiveFilter(!activeFilter);
      setFilterSelection(generateFilterSelection());
    };

    useOnClickOutside(ref, () => setActiveFilter(false));

    return (
      <div ref={ref}>
        <Button style='lite' size='sm' widthSizing='hug' onClick={onFilter}>
          Filter &nbsp; <ArrowRight />
        </Button>
        {activeFilter && filterSelection.length > 0 && (
          <Elevations dp='00' className={s.FilterBar}>
            <Menu items={filterSelection} />
          </Elevations>
        )}
      </div>
    );
  };

  const onSortClick = (type: string, column: string) => {

    setTableData(
      type == 'ascending'
        ? tableData
            .slice()
            .sort((a: any, b: any) => {
              if(a[column] instanceof Array) {
                return a[column][a[column].length - 1].name.localeCompare(b[column][b[column].length - 1].name, 'en', { numeric: true })
              } else {
                return a[column].localeCompare(b[column], 'en', { numeric: true })
              }
            })
        : tableData
            .slice()
            .sort((a: any, b: any) => {
              if(a[column] instanceof Array) {
                return b[column][b[column].length -1].name.localeCompare(a[column][a[column].length -1].name, 'en', { numeric: true })
              } else {
                return b[column].localeCompare(a[column], 'en', { numeric: true })
              }
            })
    );
  };

  const generateSortSelection = () => {
    const definition: {
      label: string;
      linkDisabled: boolean;
      withArrow: boolean;
    }[] = [];

    sortByColumns.map((column: string) => {
      const formatLabel = column
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (str: string) {
          return str.toUpperCase();
        });

      const jsonObj = {
        label: formatLabel.toUpperCase(),
        linkDisabled: true,
        withArrow: true,
        subItems: [
          { label: 'Ascending', onClick: () => onSortClick('ascending', column) },
          {
            label: 'Descending',
            onClick: () => onSortClick('descending', column),
          },
        ],
      };

      definition.push(jsonObj);
    });

    return definition;
  };

  const SortBar = () => {
    const ref = useRef(null);

    const onSort = () => {
      setActiveSort(!activeSort);
      setSortSelection(generateSortSelection());
    };

    useOnClickOutside(ref, () => setActiveSort(false));

    return (
      <div ref={ref}>
        <Button style='lite' size='sm' widthSizing='hug' onClick={onSort}>
          Sort &nbsp; <ArrowRight />
        </Button>
        {activeSort && (
          <Elevations dp='00' className={s.SortBar}>
            <Menu items={sortSelection} />
          </Elevations>
        )}
      </div>
    );
  };

  const GroupBar = () => {
    return (
      <Button style='lite' size='sm' widthSizing='hug'>
        Group By: None &nbsp; <ArrowRight />
      </Button>
    );
  };

  const Filters = () => {
    return (
      <div className='flex flex-row gap-1'>
        <SearchBar />
        <FilterBar />
        <SortBar />
        <GroupBar />
      </div>
    );
  };

  return (
    <div className={s.ProjectsTable}>
      <Filters />
      <Table
        fullWidth
        data={displayData}
        colDefs={columns}
        rowHeight='relaxed'
        headerStyle='plain'
        headerCustomStyle={s.customHeader}
        extraRowActions={rowActions}
        defaultItemsPerPage='all'
        extraRowActionHeader={<AddAlt />}
      />
    </div>
  );
};

export default ProjectTable;
