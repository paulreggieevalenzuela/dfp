import Calendar from '@carbon/icons-react/lib/Calendar';
import ChevronDown from '@carbon/icons-react/lib/ChevronDown';

import s from './page.module.scss';

import Chip from '@/components/Chip';
import { Input, Label, Message } from '@/components/Input';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Input' description='Input Helpers' />

      <section>
        <h4 className='mb-4 pb-1 font-normal text-gray-darkest'> Bases </h4>

        <div className='grid gap-y-5'>
          <div>
            {' '}
            <h4 className='text-xl font-normal text-neutral-400'>
              {' '}
              Regular{' '}
            </h4>{' '}
          </div>
          <div>
            <Input
              id='regular'
              placeholder='Placeholder text'
              label='Label'
              hint='Hint/optional'
              messageType='error'
              messageText='Error message'
            />
          </div>

          <div>
            {' '}
            <h4 className='text-xl font-normal text-neutral-400'>
              {' '}
              Left icon{' '}
            </h4>{' '}
          </div>
          <div>
            <Input
              id='left-icon'
              placeholder='Placeholder text'
              label='Label'
              hint='Hint/optional'
              messageType='error'
              messageText='Error message'
              iconLeft={<Calendar />}
            />
          </div>

          <div>
            {' '}
            <h4 className='text-xl font-normal text-neutral-400'>
              {' '}
              Right icon{' '}
            </h4>{' '}
          </div>
          <Input
            id='left-icon'
            placeholder='Placeholder text'
            label='Label'
            hint='Hint/optional'
            messageType='error'
            messageText='Error message'
            iconRight={<ChevronDown />}
          />
          <div></div>

          <div>
            {' '}
            <h4 className='text-xl font-normal text-neutral-400'>
              {' '}
              Double icon{' '}
            </h4>{' '}
          </div>
          <Input
            id='left-icon'
            placeholder='Placeholder text'
            label='Label'
            hint='Hint/optional'
            messageType='error'
            messageText='Error message'
            iconLeft={<Calendar />}
            iconRight={<ChevronDown />}
          />
          <div></div>

          <div>
            {' '}
            <h4 className='text-xl font-normal text-neutral-400'>
              {' '}
              Multi-input{' '}
            </h4>{' '}
          </div>
          <Input
            id='left-icon'
            placeholder='Placeholder text'
            label='Label'
            hint='Hint/optional'
            messageType='error'
            messageText='Error message'
            chip={[
              { label: 'Chip text', value: 'chip1' },
              { label: 'Chip text', value: 'chip2' },
            ]}
          />
          <div></div>

          <div>
            {' '}
            <h4 className='text-xl font-normal text-neutral-400'>
              {' '}
              Text area{' '}
            </h4>{' '}
          </div>
          <Input
            id='left-icon'
            placeholder='Placeholder text'
            label='Label'
            hint='Hint/optional'
            messageType='error'
            messageText='Error message'
            textArea={true}
          />
          <div></div>
        </div>
      </section>

      <section className='mt-16 w-[250px] gap-1'>
        <h4 className='mb-4 pb-1 font-normal text-gray-darkest'> Atoms </h4>
        <div className='flex flex-col'>
          <div>
            <input
              type='text'
              className='h-[40px] w-[250px] rounded border-none font-sans text-base font-light placeholder:text-gray-300 focus:outline-none'
              placeholder='Placeholder text'
            />
          </div>
          <div>
            <input
              type='text'
              className='h-[40px] w-[250px] rounded border-none font-sans text-base font-light placeholder:text-gray-300 focus:outline-none'
              placeholder='Placeholder text'
            />
          </div>
          <div className='mb-2'>
            <span className='text-base font-normal text-gray-darkest'>
              {' '}
              Input text{' '}
            </span>
          </div>
          <div className='flex gap-1'>
            <Chip label='Chip text' type='default' />
            <Chip label='Chip text' type='default' />
          </div>
        </div>

        <div className='mb-4 mt-8'>
          <Message messageType='error' messageText='Error message' />
          <Message messageType='warning' messageText='Warning message' />
          <Message messageType='success' messageText='Success message' />
        </div>

        <div className='mt-4 mb-10 w-[250px]'>
          <Label label='Label' hint='Hint/optional' />
        </div>
      </section>
    </KitchenSinkLayout>
  );
}
