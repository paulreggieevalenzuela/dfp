import s from './page.module.scss';

import FileUpload from '@/components/Dropzone';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar title='Files Uploader' description='File Upload' />
      <FileUpload multiple={true} />
    </KitchenSinkLayout>
  );
}
