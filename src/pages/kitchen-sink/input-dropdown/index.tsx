import StarFilled from '@carbon/icons-react/lib/StarFilled';

import DropdownInput from '@/components/DropdownInput';
import Container from '@/components/layouts/Container';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  return (
    <KitchenSinkLayout>
      <TitleBar title='Inputs (Dropdown)' description='' />

      <Container>
        <section className='mb-8 w-[300px]'>
          <DropdownInput
            dropdownItems={[
              { label: 'Chicago, IL' },
              { label: 'Boston, MA' },
              { label: 'New York, NY' },
              { label: 'San Francisco, CA' },
            ]}
            placeholder='Select city'
            label='City'
          />
        </section>

        <section className='mb-8 w-[400px]'>
          <DropdownInput
            dropdownItems={[
              {
                label: 'Michael Scott',
                subText: 'michael@company.com',
                icon: <StarFilled />,
              },
              {
                label: 'Pam Halpert',
                subText: 'pam@company.com',
                icon: <StarFilled />,
              },
              {
                label: 'Kelly Kapoor',
                subText: 'kelly@company.com',
                icon: <StarFilled />,
              },
              {
                label: 'Jim Halpert',
                subText: 'jim@company.com',
                icon: <StarFilled />,
              },
            ]}
            placeholder='Select team member'
            label='Team member'
          />
        </section>
      </Container>
    </KitchenSinkLayout>
  );
}
