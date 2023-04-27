import Link from 'next/link';
import * as React from 'react';

import Container from '@/components/layouts/Container';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import Seo from '@/components/Seo';

import components from "./kitchen-sink/links-components.json";
import pages from "./kitchen-sink/links-pages.json";
import testPages from "./kitchen-sink/links-pocs.json";
import styles from "./kitchen-sink/links-styles.json";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <KitchenSinkLayout>
      <Seo />

      <main className='align grid h-auto content-center justify-center gap-8 py-10 px-8'>
        <h3 className='trackin-wide mb-10 tracking-wide leading-none'>
          Design Force Client Portal: Kitchen Sink <br />{' '}
        </h3>

        <Container>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-5'>
              <h3 className='mb-3'>Styles:</h3>
              {
                styles.styles.map((style) => {
                  return <Link key={style.label} href={style.link}>{style.label}</Link>
                })
              }
              <hr />
              <h3 className='mb-3'>Pages:</h3>
              {
                pages.pages.map((page) => {
                  return <Link key={page.label} href={page.link}>{page.label}</Link>
                })
              }
              <hr />
              <h3 className='mb-3'>Test Pages:</h3>
              {
                testPages.pages.map((page) => {
                  return <Link key={page.label} href={page.link}>{page.label}</Link>
                })
              }
            </div>

            <div className='flex flex-col gap-5'>
              <h3 className='mb-3'>Components:</h3>
              {
                components.components.map((component) => {
                  return <Link key={component.label} href={component.link}>{component.label}</Link>
                })
              }
            </div>
          </div>
        </Container>
      </main>
    </KitchenSinkLayout>
  );
}
