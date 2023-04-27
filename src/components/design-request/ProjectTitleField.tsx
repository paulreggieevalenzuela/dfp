import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/app/hooks';
import { FormDataProps, selectDesignRequest, setIsFormValid, updateDesignRequestFormData } from '@/features/designRequestSlice';
import { useDebounce } from '@/utils/customHooks';

export default function ProjectTitleField() {
  const dispatch = useDispatch();
  const { formData, isFormValid } = useAppSelector(selectDesignRequest).value;
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    // TODO: move this validation logic below somewhere ideal to be combined with DesignRequestForm form react hook form validity state 
    if (debouncedValue) {
      dispatch(updateDesignRequestFormData({ ...formData, projectName: debouncedValue } as FormDataProps));
      dispatch(setIsFormValid(true));
    } else {
      dispatch(setIsFormValid(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };


  return (
    <div className='w-full'>
      <input
        placeholder="Give your Project A Name"
        value={value}
        onChange={handleChange}
        required
        className='w-full border-none bg-transparent text-[18px] outline-none'
      />
    </div>
  )
}