import ArrowRight from '@carbon/icons-react/lib/ArrowRight';
import Close from '@carbon/icons-react/lib/Close';
import Draggable from '@carbon/icons-react/lib/Draggable';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import s from './DesignRequestForm.module.scss';

import Button from '@/components/Button';
import DropdownInput from '@/components/DropdownInput';
import { Input } from '@/components/Input';
import TextEditor from '@/components/TextEditor';
import TriStateCheckBox from '@/components/TriStateCheckbox';
import Deliverables, { DeliverableItem } from '@/components/Deliverables';
import Link from 'next/link';

import { useAppSelector } from '@/app/hooks';
import { selectDesignRequest, toggleOpenFormDeliverables, toggleShowBrandAssets, toggleShowDeliverables } from '@/features/designRequestSlice';
import { setModal } from '@/features/modalSlice';

import data from './deliverables.json';

type FormValues = {
  referenceLinkTitle?: string;
  referenceUrl?: string;
};

const InputRef = forwardRef((props: any, ref: any) => {
  return (
    <div ref={ref}>
      <Input {...props} />
    </div>
  );
});

export default function DesignRequestForm() {
  const dispatch = useDispatch();
  const { showDeliverables, showBrandAssets, openFormDeliverables } = useAppSelector(selectDesignRequest).value;
  const { formData, isFormValid } = useAppSelector(selectDesignRequest).value;

  const requiredMessage = 'This field is required';

  const validation = yup.object().shape({
    referenceLinkTitle: yup.string().required(requiredMessage),
    referenceUrl: yup.string().required(requiredMessage),
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
      referenceLinkTitle: '',
      referenceUrl: ''
    },
  });

  const [referenceItems, setReferenceItems] = useState<any>([]);
  const [brandAssets, setBrandAssets] = useState<any>([]);
  const [hasNoBrandAssets, setSelectionBrandAssets] = useState<boolean>(false);

  const handleSelectBrandAssets = (brandAsset: string) => {
    const existingBrandAsset = brandAssets.find((ba: string) => ba === brandAsset);
    if (existingBrandAsset) {
      const filterBrandAssets = brandAssets.filter((ba: string) => ba !== brandAsset);
      setBrandAssets([...filterBrandAssets]);
    } else {
      setBrandAssets([...brandAssets, brandAsset])
    }
  };

  const handleAddReferenceItems = () => {
    if (brandAssets.length === 0) {
      setSelectionBrandAssets(true);
    } else {
      setSelectionBrandAssets(false);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setReferenceItems([...referenceItems, { ...data, brandAssets: brandAssets }]);
    console.log(data);
  };

  return (
    <form className={`crfForm ${s.DesignRequestForm}`} onSubmit={handleSubmit(onSubmit)}>
      <p className="text-[18px] mb-2">Category</p>
      <div className="select-wrapper">
        <DropdownInput
          dropdownItems={[
            {
              label: 'Option 1'
            },
            {
              label: 'Option 2'
            }
          ]}
          placeholder='Choose an option'
        />
      </div>
      <p className="text-[18px] mt-8 mb-4">Project Details</p>
      <TextEditor placeholderText="Tell us what you need us to do..." hasMarginTop={false} />
      <div className="mt-8" />
      {showDeliverables && (
        <div className="deliverables">
          <p className="text-[18px] mt-8 mb-4">Deliverables</p>
          {data.deliverables.map((d: string) =>
            <Button key={d} style='outline' kind='primary' widthSizing='hug' size="sm">
              {d}
            </Button>
          )}
        </div>
      )}
      {openFormDeliverables && (
        <Deliverables
          hasForm
          items={data.deliverablesList}
          onCancel={() => dispatch(toggleOpenFormDeliverables(!openFormDeliverables))}
          onSave={() => dispatch(toggleOpenFormDeliverables(!openFormDeliverables))}
        />
      )}
      <div className="crfUpload">
        {showDeliverables && !openFormDeliverables && (
          <Button
            style='link'
            kind='tertiary'
            widthSizing='hug'
            onClick={() => {
              dispatch(toggleOpenFormDeliverables(!openFormDeliverables))
            }}
          >
            <ArrowRight />
            &nbsp;&nbsp;
            Add a Deliverable
          </Button>
        )}
        {!showDeliverables && (
          <Button
            style='link'
            kind='tertiary'
            widthSizing='hug'
            onClick={() => {
              dispatch(toggleShowDeliverables(!showDeliverables))
            }}
          >
            <ArrowRight />
          &nbsp;&nbsp;
          Multiple Deliverables
          </Button>
        )}
        <p className="text-[18px] mt-8 mb-4">
          References
        </p>
        <Button
          style='link'
          kind='tertiary'
          widthSizing='hug'
          onClick={() => dispatch(toggleShowBrandAssets(!showBrandAssets))}
        >
          <ArrowRight />
          &nbsp;&nbsp;
          Import From Brand Assets
        </Button>
        {showBrandAssets && (
          <ul className="brand-assets">
            {data.references.map(d =>
              <li key={`brand-assets-items-${d}`}>
                <input
                  type="checkbox"
                  id={`checkbox-${d}`}
                  onChange={() => handleSelectBrandAssets(d)}
                />
                <p>{d}</p>
              </li>
            )}
          </ul>
        )}
        {hasNoBrandAssets && (<p className="brand-assets--no-selection">You need to select brand assets.</p>)}
      </div>
      <div className="crfFormField">
        <div className="crfFormFieldContainer">
          <InputRef
            label='Reference Link Title'
            placeholder="Enter link title"
            {...register('referenceLinkTitle')}
            messageType={errors.referenceLinkTitle && 'error'}
            messageText={errors.referenceLinkTitle && errors.referenceLinkTitle.message}
          />
          <InputRef
            label='Reference URL'
            placeholder="Enter URL"
            {...register('referenceUrl')}
            messageType={errors.referenceUrl && 'error'}
            messageText={errors.referenceUrl && errors.referenceUrl.message}
          />
        </div>
        <Button kind='primary' widthSizing='hug' onClick={(e) => {
          handleAddReferenceItems();
          handleSubmit(onSubmit)(e);
        }}>
          <ArrowRight />
          &nbsp;&nbsp;
          Add Link
        </Button>
      </div>
      {referenceItems.length ? (
        <ul className="referencesItems">
          {referenceItems.map((item: any, i: number) =>
            <li key={i}>
              <p><Draggable /> {item.brandAssets[0]}</p>
              <div className="referenceLinkLabel">
                <Link href={item.referenceUrl}>{item.referenceLinkTitle}</Link>
                <Close size="24" onClick={() => {
                  const filteredReferenceItems = referenceItems.filter((refItem: any) => refItem.referenceUrl !== item.referenceUrl);
                  setReferenceItems(filteredReferenceItems);
                }} />
              </div>
            </li>
          )}
        </ul>
      ) : null}
    </form>
  );
}
