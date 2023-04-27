import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TextEditor from '@/components/TextEditor';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar
        title='Text Editor'
        description='Text editors are a type of input that includes different formatting options'
      />
      <div className='mt-10 grid grid-cols-1 md:grid md:grid-cols-3'>
        <section className={s.textEditors}>
          <div className={s.label}> Label + Hint </div>
          <TextEditor
            label='Label'
            hint='Hint/optional'
            placeholderText='Placeholder text'
          />
        </section>

        <section className={s.textEditors}>
          <div className={s.label}> Label </div>
          <TextEditor label='Label' placeholderText='Placeholder text' />
        </section>

        <section className={s.textEditors}>
          <div className={s.label}> None </div>
          <TextEditor placeholderText='Placeholder text' />
        </section>
      </div>
    </KitchenSinkLayout>
  );
}
