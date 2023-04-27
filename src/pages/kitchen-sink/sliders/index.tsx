import Container from '@/components/layouts/Container';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Slider from '@/components/Slider';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  return (
    <KitchenSinkLayout>
      <TitleBar title='Sliders' description='' />

      <Container>
        <section className='w-[500px]'>
          <h5 className='mb-4'>0, 50, 100, 200</h5>
          <Slider values={['$0', '$50', '$100', '$200']} className='mb-8' />
          <Slider
            className='mb-8'
            values={['$0', '$50', '$100', '$200']}
            showLabel
          />
        </section>

        <section className='w-[500px]'>
          <h5 className='mb-4 '>0 - 200</h5>
          <Slider
            className='mb-8'
            values={Array.from({ length: 201 }, (_, i) => `$${i}`)}
          />
          <Slider
            className='mb-8'
            values={Array.from({ length: 201 }, (_, i) => `$${i}`)}
            showLabel
          />
        </section>
      </Container>
    </KitchenSinkLayout>
  );
}
