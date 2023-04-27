import Add from '@carbon/icons-react/lib/Add';
import ArrowLeft from '@carbon/icons-react/lib/ArrowLeft';
import ArrowRight from '@carbon/icons-react/lib/ArrowRight';
import React from 'react';

import Button from '@/components/Button';
import ComboButton from '@/components/Button/ComboButton';
import RoundedButton from '@/components/Button/RoundedButton';
import Container from '@/components/layouts/Container';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

type SizeSelector = (size: 'sm' | 'lg') => React.ReactNode;

const buttonContents: {
  buttonType?: 'combo' | 'rounded';
  children: React.ReactNode | SizeSelector;
  iconelement?: React.ReactNode;
}[] = [
    {
      children: 'Button',
    },
    {
      children: (
        <>
          <ArrowLeft />
          &nbsp;&nbsp;Button
        </>
      ),
    },
    {
      children: (
        <>
          Button&nbsp;&nbsp;
          <ArrowRight />
        </>
      ),
    },
    {
      children: (
        <>
          <ArrowLeft />
          &nbsp;&nbsp;Button&nbsp;&nbsp;
          <ArrowRight />
        </>
      ),
    },
    {
      buttonType: 'combo',
      children: 'Button',
      iconelement: <ArrowRight />,
    },
    {
      buttonType: 'rounded',
      children: (size) => <Add size={size === 'sm' ? 16 : 20} />,
    },
  ];

const buttonKinds: ('primary' | 'danger')[] = ['primary', 'danger'];

const buttonSizes: ('sm' | 'lg')[] = ['lg', 'sm'];

const buttonWidthSizings: ('hug' | 'fixed')[] = ['hug', 'fixed'];

const buttonStyles: ('filled' | 'outline' | 'link' | 'lite')[] = [
  'filled',
  'outline',
  'link',
  'lite',
];

const buttonProps = [
  {
    selected: false,
    disabled: false,
  },
  {
    selected: true,
    disabled: false,
  },
  {
    selected: false,
    disabled: true,
  },
];

export default function Page() {
  return (
    <KitchenSinkLayout>
      <TitleBar title='Button' description='' />
      <Container>
        {buttonKinds.map((kind, idx6) =>
          buttonStyles.map((style, idx5) =>
            buttonWidthSizings.map((widthSizing, idx4) =>
              buttonSizes.map((size, idx3) => (
                <React.Fragment
                  key={`div-light-${idx3}-${idx4}-${idx5}-${idx6}`}
                >
                  <h5 className='mb-4'>
                    {style} / {kind} / {size} / {widthSizing}
                  </h5>
                  <div className='mb-[48px] flex flex-wrap'>
                    {buttonContents.map(
                      ({ children, buttonType, iconelement }, idx2) => {
                        const ButtonTag =
                          buttonType === 'combo'
                            ? ComboButton
                            : buttonType === 'rounded'
                              ? RoundedButton
                              : Button;

                        return (
                          !(ButtonTag === ComboButton && style === 'link') && (
                            <section
                              key={`section-light-${idx2}-${idx3}-${idx4}-${idx5}-${idx6}`}
                              className='grid flex-auto grid-rows-4 gap-3 text-center'
                            >
                              {buttonProps.map((props, idx1) => (
                                <>
                                  <ButtonTag
                                    key={`button-${idx1}-${idx2}-${idx3}-${idx4}-${idx5}-${idx6}`}
                                    kind={kind}
                                    size={size}
                                    widthSizing={widthSizing}
                                    style={style}
                                    iconelement={iconelement}
                                    {...props}
                                  >
                                    {typeof children === 'function' &&
                                      (children as SizeSelector)(size)}
                                    {typeof children !== 'function' &&
                                      (children as React.ReactNode)}
                                  </ButtonTag>
                                </>
                              ))}
                            </section>
                          )
                        );
                      }
                    )}
                  </div>
                </React.Fragment>
              ))
            )
          )
        )}
      </Container>
      <Container className='bg-[#111727] pt-5'>
        {buttonStyles
          .filter((style) => style !== 'lite')
          .map((style, idx5) =>
            buttonWidthSizings.map((widthSizing, idx4) =>
              buttonSizes.map((size, idx3) => (
                <React.Fragment key={`div-dark-${idx3}-${idx4}-${idx5}-`}>
                  <h5 className='mb-4 text-white'>
                    {style} / dark / {size} / {widthSizing}
                  </h5>
                  <div className='mb-[48px] flex flex-wrap'>
                    {buttonContents.map(
                      ({ children, buttonType, iconelement }, idx2) => {
                        const ButtonTag =
                          buttonType === 'combo'
                            ? ComboButton
                            : buttonType === 'rounded'
                              ? RoundedButton
                              : Button;

                        return (
                          !(ButtonTag === ComboButton && style === 'link') && (
                            <section
                              key={`section-dark-${idx2}-${idx3}-${idx4}-${idx5}-`}
                              className='grid flex-auto grid-rows-4 gap-3 text-center'
                            >
                              {buttonProps.map((props, idx1) => (
                                <>
                                  <ButtonTag
                                    key={`button-${idx1}-${idx2}-${idx3}-${idx4}-${idx5}`}
                                    kind='primary'
                                    size={size}
                                    widthSizing={widthSizing}
                                    style={style}
                                    darkMode={true}
                                    iconelement={iconelement}
                                    {...props}
                                  >
                                    {typeof children === 'function' &&
                                      (children as SizeSelector)(size)}
                                    {typeof children !== 'function' &&
                                      (children as React.ReactNode)}
                                  </ButtonTag>
                                </>
                              ))}
                            </section>
                          )
                        );
                      }
                    )}
                  </div>
                </React.Fragment>
              ))
            )
          )}
      </Container>
    </KitchenSinkLayout>
  );
}
