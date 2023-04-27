import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function PageTypography() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar
        title='Color Palette'
        description='Distinct, harmonious color theme.'
      />

      <section>
        <div className='row'>
          <div className='col'>
            <header className=''>
              <h4 className='text-blue'>Primary</h4>
              <p>
                This color should be displayed most frequently and be used for
                important actions
              </p>
            </header>
            <div className='items'>
              <div className='bg-blue-50'>
                <span>lightest: &quot;bg-blue-lightest&quot;</span>
              </div>
              <div className='bg-blue-100'></div>
              <div className='bg-blue-200'></div>
              <div className='bg-blue-300'></div>
              <div className='bg-blue-400'></div>
              <div className='bg-blue-500'></div>
              <div className='bg-blue-600'></div>
              <div className='bg-blue-700'>
                <span>default: &quot;bg-blue&quot;</span>
              </div>
              <div className='bg-blue-800'></div>
              <div className='bg-blue-900'></div>
              <div className='bg-blue-darkest'>
                <span>darkest: &quot;bg-blue-darkest&quot;</span>
              </div>
            </div>
          </div>
          <div className='col'>
            <header>
              <h4 className='text-maroon'>Secondary</h4>
              <p>
                This color should be applied sparingly to highlight information.
              </p>
            </header>
            <div className='items'>
              <div className='bg-maroon-50'>
                <span>lightest: &quot;bg-maroon-lightest&quot;</span>
              </div>
              <div className='bg-maroon-100'></div>
              <div className='bg-maroon-200'></div>
              <div className='bg-maroon-300'></div>
              <div className='bg-maroon-400'></div>
              <div className='bg-maroon-500'></div>
              <div className='bg-maroon-600'></div>
              <div className='bg-maroon-700'>
                <span>default: &quot;bg-maroon&quot;</span>
              </div>
              <div className='bg-maroon-800'></div>
              <div className='bg-maroon-900'></div>
              <div className='bg-maroon-darkest'>
                <span>darkest: &quot;bg-maroon-darkest&quot;</span>
              </div>
            </div>
          </div>
          <div className='col'>
            <header>
              <h4 className='text-gray'>Gray</h4>
              <p>
                This color should be applied sparingly to highlight information
              </p>
            </header>
            <div className='items'>
              <div className='bg-gray-50'>
                <span>lightest: &quot;bg-gray-lightest&quot;</span>
              </div>
              <div className='bg-gray-100'></div>
              <div className='bg-gray-200'></div>
              <div className='bg-gray-300'></div>
              <div className='bg-gray-400'></div>
              <div className='bg-gray-500'></div>
              <div className='bg-gray-600'></div>
              <div className='bg-gray-700'>
                <span>default: &quot;bg-gray&quot;</span>
              </div>
              <div className='bg-gray-800'></div>
              <div className='bg-gray-900'></div>
              <div className='bg-gray-darkest'>
                <span>darkest: &quot;bg-gray-darkest&quot;</span>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <header className=''>
              <h4 className='text-green'>Success</h4>
              <p>
                This color should be used to show positive feedback or status.
              </p>
            </header>
            <div className='items'>
              <div className='bg-green-50'>
                <span>lightest: &quot;bg-green-lightest&quot;</span>
              </div>
              <div className='bg-green-100'></div>
              <div className='bg-green-200'></div>
              <div className='bg-green-300'></div>
              <div className='bg-green-400'></div>
              <div className='bg-green-500'></div>
              <div className='bg-green-600'></div>
              <div className='bg-green-700'>
                <span>default: &quot;bg-green&quot;</span>
              </div>
              <div className='bg-green-800'></div>
              <div className='bg-green-900'></div>
              <div className='bg-green-darkest'>
                <span>darkest: &quot;bg-green-darkest&quot;</span>
              </div>
            </div>
          </div>
          <div className='col'>
            <header>
              <h4 className='text-yellow'>Warning</h4>
              <p>
                This color should be used to show warning feedback or status.
              </p>
            </header>
            <div className='items'>
              <div className='bg-yellow-50'>
                <span>lightest: &quot;bg-yellow-lightest&quot;</span>
              </div>
              <div className='bg-yellow-100'></div>
              <div className='bg-yellow-200'></div>
              <div className='bg-yellow-300'></div>
              <div className='bg-yellow-400'></div>
              <div className='bg-yellow-500'></div>
              <div className='bg-yellow-600'></div>
              <div className='bg-yellow-700'>
                <span>default: &quot;bg-yellow&quot;</span>
              </div>
              <div className='bg-yellow-800'></div>
              <div className='bg-yellow-900'></div>
              <div className='bg-yellow-darkest'>
                <span>darkest: &quot;bg-yellow-darkest&quot;</span>
              </div>
            </div>
          </div>
          <div className='col'>
            <header>
              <h4 className='text-red'>Error</h4>
              <p>
                This color should be used to show negative feedback or status.
              </p>
            </header>
            <div className='items'>
              <div className='bg-red-50'>
                <span>lightest: &quot;bg-red-lightest&quot;</span>
              </div>
              <div className='bg-red-100'></div>
              <div className='bg-red-200'></div>
              <div className='bg-red-300'></div>
              <div className='bg-red-400'></div>
              <div className='bg-red-500'></div>
              <div className='bg-red-600'></div>
              <div className='bg-red-700'>
                <span>default: &quot;bg-red&quot;</span>
              </div>
              <div className='bg-red-800'></div>
              <div className='bg-red-900'></div>
              <div className='bg-red-darkest'>
                <span>darkest: &quot;bg-red-darkest&quot;</span>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <header className=''>
              <span>Light Theme: Background</span>
              <p>These colors should be used for large surfaces.</p>
            </header>
            <div className='items border border-solid border-[#E0E0E0] bg-black'>
              <div className='bg-neutral-50'></div>
              <div className='bg-neutral-100'></div>
              <div className='bg-neutral-200'></div>
            </div>
          </div>
          <div className='col'>
            <header className=''>
              <span>Light Theme: Text</span>
              <p>
                These colors should be used for text and icons on top of a light
                background.
              </p>
            </header>
            <div className='items'>
              <div className='bg-black'></div>
              <div className='bg-neutral-400'></div>
              <div className='bg-neutral-300'></div>
            </div>
          </div>
          <div className='col'>
            <header className=''>
              <span>Light Theme: Other</span>
              <p>
                These colors should be used for lines & hover/selected states.
              </p>
            </header>
            <div className='items'>
              <div className='bg-[#E0E0E0]'></div>
              <div className='bg-[#EBEBEB]'></div>
              <div className='bg-[#F0F0F0]'></div>
              <div className='bg-[#EBEBEB]'></div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <header className=''>
              <span>Dark Theme: Background</span>
              <p>These colors should be used for large surfaces.</p>
            </header>
            <div className='items'>
              <div className='bg-dark-a'></div>
              <div className='bg-black'></div>
              <div className='bg-dark-b'></div>
              <div className='bg-dark-c'></div>
            </div>
          </div>
          <div className='col'>
            <header className=''>
              <span>Dark Theme: Text</span>
              <p>
                These colors should be used for text and icons on top of a light
                background.
              </p>
            </header>
            <div className='items border border-solid border-[#E0E0E0] bg-black'>
              <div className='bg-white'></div>
              <div className='bg-neutral-400'></div>
              <div className='bg-neutral-500'></div>
            </div>
          </div>
          <div className='col'>
            <header className=''>
              <span>Dark Theme: Other</span>
              <p>
                These colors should be used for lines & hover/selected states.
              </p>
            </header>
            <div className='items border border-solid border-neutral-300 bg-black'>
              <div className='bg-neutral-400'></div>
              <div className='bg-neutral-600'></div>
              <div className='bg-neutral-800'></div>
              <div className='bg-neutral-700'></div>
            </div>
          </div>
        </div>
      </section>
    </KitchenSinkLayout>
  );
}
