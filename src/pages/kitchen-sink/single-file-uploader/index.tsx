import { GrAlert as WarningAlert } from 'react-icons/gr';
import { IoDocumentTextOutline as DocumentIcon } from 'react-icons/io5';

import s from './page.module.scss';

import FileUpload from '@/components/Dropzone';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  /* objects to demo success / error states of file upload (for demo purposes only to simulate existing files uploaded) */
  const successDemoObj = (
    <li key={Math.random()}>
      <div className='mb-2 flex items-center gap-3 break-all rounded p-2 pr-24 outline outline-1 outline-gray-200'>
        <div>
          <DocumentIcon size={15} />
        </div>
        <div>
          <h4 className='text-[16px]'> Demo-success.pdf</h4>
        </div>
        <div className='font-light text-gray-600'>
          {Math.round(10000 / 1024)}KB
        </div>
      </div>
    </li>
  );

  const rejectDemoObj = (
    <li
      key={Math.random()}
      className='mb-2 flex items-center gap-3 break-all rounded p-2 pr-24 outline outline-1 outline-red-300'
    >
      <div>
        <WarningAlert size={15} />
      </div>
      <div>
        <h4 className='text-[16px]'>Demo-fail.zip</h4>
      </div>
      <div className='font-light text-gray-600'>
        {Math.round(1000 / 1024)}KB
      </div>
    </li>
  );

  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar
        title='Single File Uploader'
        description='Upload component allows users to upload single file only to the app.'
      />

      <div className='grid grid-cols-1 sm:m-auto sm:w-[900px] sm:grid-cols-2 sm:place-content-center'>
        <section>
          <h6> Default </h6>
          <FileUpload />
        </section>

        <section>
          <h6> Uploading </h6>
          <FileUpload state='uploading' timeout={3000} />
        </section>

        <section>
          <h6> Error </h6>
          <FileUpload state='error' existingRejectedFiles={rejectDemoObj} />
        </section>

        <section>
          <h6> Success </h6>
          <FileUpload state='success' existingAcceptedFiles={successDemoObj} />
        </section>
      </div>
    </KitchenSinkLayout>
  );
}
