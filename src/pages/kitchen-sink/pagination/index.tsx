import { useState } from 'react';

import Container from '@/components/layouts/Container';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Pagination from '@/components/Pagination';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <KitchenSinkLayout>
      <TitleBar title='Pagination' description='' />

      <Container>
        <section className='mb-8 w-[500px]'>
          <Pagination
            type='button'
            numItems={30}
            itemsPerPage={itemsPerPage}
            page={page}
            onPageSelect={setPage}
          />
        </section>

        <section className='w-[500px]'>
          <Pagination
            type='icon'
            numItems={30}
            itemsPerPage={itemsPerPage}
            page={page}
            onPageSelect={setPage}
            onItemsPerPageSelect={setItemsPerPage}
          />
        </section>
      </Container>
    </KitchenSinkLayout>
  );
}
