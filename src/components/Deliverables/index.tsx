import { Fragment } from 'react';
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

import Button from '@/components/Button';
import Counter from "@/components/Counter";
import TextEditor from '@/components/TextEditor';

export type DeliverableItem = {
  title: string;
  date: string;
  priority?: number
  actions?: [
    {
      label?: string
    }
  ]
}

type DeliverableProps = {
  items: DeliverableItem[];
  hasForm?: boolean;
  onCancel?: () => void;
  onSave?: () => void;
}

export default function Deliverables({ items, onCancel, onSave, hasForm }: DeliverableProps) {

  // TO DO: confirm with designers if the numbers/colors on the deliverables list is a representation of hierarchy/priority
  const colorPicker = (index: number | undefined) => {
    switch (index) {
      case 1:
        return 'success'
      case 2:
        return 'primary'
      case 3:
        return 'warning'
      default:
        return 'neutral'
    }
  }

  const actions = [
    {
      children: 'Cancel',
      kind: 'tertiary',
      style: 'outline',
      onClick: onCancel,
    },
    {
      children: 'Save',
      kind: 'primary',
      style: 'primary',
      onClick: onSave,
    }
  ];

  return <div className='flex flex-col space-y-2 mt-4'>
    {
      items.map((item, index) => (
        <div key={index} className='flex flex-row items-center'>
          <Counter count={index + 1} size="lg" color={colorPicker(item.priority)} />
          <div className='flex w-full h-10 p-3 items-center justify-between border border-solid rounded border-[#000000]/[.08] ml-3'>
            <div className='text-sm font-medium text-gray-darkest'>{item.title}</div>
            <div className='text-sm text-gray-400 items-center flex'>{item.date} {item.actions ? <IoEllipsisHorizontalSharp size={16} className='ml-3 cursor-pointer' /> : <div className='ml-7'></div>}</div>
          </div>
        </div>
      ))
    }
    {hasForm && (
      <Fragment>
        <div className="flex flex-row items-start">
          <div className="h-6 w-7 mr-3" />
          <TextEditor placeholderText="Describe your deliverable..." hasMarginTop={false} />
        </div>
        <div className="actions">
          {actions.map((btn, i) => (
            <Button
              key={i}
              {...btn as any}
            >
              {btn.children}
            </Button>
          ))}
        </div>
      </Fragment>
    )}
  </div>
}