import s from './page.module.scss';

import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function Page() {
  return (
    <KitchenSinkLayout className={s.Page}>
      <TitleBar
        title='Typography'
        description='Typeface family, sizes, weights, and colors.'
      />
      <section className='intro'>
        <div className='row'>
          <div className='col'>
            <h1 className='!text-[140px]'>Aa</h1>
          </div>
          <div className='break-all'>
            <h1 className='mb-[24px] text-[80px]'>Neue Haas Unica Pro</h1>
            <p className='font-light text-neutral-400'>
              ABC&Ccaron;&Cacute;D&Dstrok;EFGHIJKLMNOPQRS&Scaron;TUVWXYZ&Zcaron;abc&ccaron;&cacute;d&dstrok;efghijklmnopqrs&scaron;tuvwxyz&zcaron;&Acy;&Bcy;&Vcy;&Gcy;&#x490;&Dcy;&DJcy;&IEcy;&IOcy;&Jukcy;&ZHcy;&Zcy;&DScy;&Icy;&Iukcy;&YIcy;&Jcy;&Jsercy;&Kcy;&Lcy;&LJcy;&Mcy;&Ncy;&NJcy;&Ocy;&Pcy;&Rcy;&Scy;&Tcy;&TSHcy;&Ucy;&Ubrcy;&Fcy;&KHcy;&TScy;&CHcy;&DZcy;&SHcy;&SHCHcy;&HARDcy;&Ycy;&SOFTcy;&Ecy;&YUcy;&YAcy;&acy;&bcy;&vcy;&gcy;&#x491;&dcy;&djcy;&iecy;&iocy;&jukcy;&zhcy;&zcy;&dscy;&icy;&iukcy;&yicy;&jcy;&jsercy;&kcy;&lcy;&ljcy;&mcy;&ncy;&njcy;&ocy;&pcy;&rcy;&scy;&tcy;&tshcy;&ucy;&ubrcy;&fcy;&khcy;&tscy;&chcy;&dzcy;&shcy;&shchcy;&hardcy;&ycy;&softcy;&ecy;&yucy;&yacy;&Alpha;&Beta;&Gamma;&Delta;&Epsilon;&Zeta;&Eta;&Theta;&Iota;&Kappa;&Lambda;&Mu;&Nu;&Xi;&Omicron;&Pi;&Rho;&Sigma;&Tau;&Upsilon;&Phi;&Chi;&Psi;&ohm;&alpha;&beta;&gamma;&delta;&epsi;&zeta;&eta;&theta;&iota;&kappa;&lambda;&mu;&nu;&xi;&omicron;&pi;&rho;&sigma;&tau;&upsi;&phi;&chi;&psi;&omega;&#x3AC;&#x386%;&#x3AD;&#x388%;&#x3AD;&#x389%;&#x3AF;&#x3CA;&#x390;&#x38A%;&#x3CC;&#x38C%;&#x3CD;&#x3B0;&#x3CB;&#x38E%;&#x3AB;&#x38F%;&Abreve;&Acirc;&Ecirc;&Ocirc;&#x1A0;&#x1AF;&abreve;&acirc;&ecirc;&ocirc;&#x1A1;&#x1B0;1234567890&lsquo;?&rsquo;&ldquo;!&rdquo;(%)/&amp;\&lt;-+&div;&times;=&gt;&reg;&copy;$&euro;&pound;&yen;&cent;:;,.*
            </p>

            <div className='states'>
              <div className='dark grid'>
                <span>Primary white</span>
                <span className='opacity-60'>Secondary white</span>
                <span className='opacity-[38%]'>Disabled white</span>
              </div>
              <div className='grid'>
                <span>Primary white</span>
                <span className='opacity-60'>Secondary white</span>
                <span className='opacity-[38%]'>Disabled white</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='row'>
          <div className='col'>
            <h1>Headline 1</h1>
          </div>
          <div className='col'>
            <h1>The spectacle before us was indeed sublime.</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h2>Headline 2</h2>
          </div>
          <div className='col'>
            <h2>The spectacle before us was indeed sublime.</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h3>Headline 3</h3>
          </div>
          <div className='col'>
            <h3>The spectacle before us was indeed sublime.</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h4>Headline 4</h4>
          </div>
          <div className='col'>
            <h4>The spectacle before us was indeed sublime.</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h5>Headline 5</h5>
          </div>
          <div className='col'>
            <h5>The spectacle before us was indeed sublime.</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h6>Headline 6</h6>
          </div>
          <div className='col'>
            <h6>The spectacle before us was indeed sublime.</h6>
          </div>
        </div>
      </section>

      <section>
        <div className='row'>
          <div className='col'>
            <h1>Body 1</h1>
          </div>
          <div className='col text-[22px]'>
            <p>The spectacle before us was indeed sublime.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h2>Body 2</h2>
          </div>
          <div className='col text-xl'>
            <p>The spectacle before us was indeed sublime.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h3>Body 3</h3>
          </div>
          <div className='col text-[18px] font-light'>
            <p>The spectacle before us was indeed sublime.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h4>Body 4</h4>
          </div>
          <div className='col'>
            <p>The spectacle before us was indeed sublime.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h5>Body 5</h5>
          </div>
          <div className='col font-medium'>
            <p>The spectacle before us was indeed sublime.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h6>Caption 1</h6>
          </div>
          <div className='col font-bold'>
            <p>The spectacle before us was indeed sublime.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h6>Caption 2</h6>
          </div>
          <div className='col font-light'>
            <p>The spectacle before us was indeed sublime.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h6>Caption 3</h6>
          </div>
          <div className='col text-sm'>
            <p>The spectacle before us was indeed sublime.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h6>Caption 4</h6>
          </div>
          <div className='col text-xs'>
            <p>The spectacle before us was indeed sublime.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h6>Caption 5</h6>
          </div>
          <div className='col text-xs font-medium'>
            <p>The spectacle before us was indeed sublime.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h6>Caption 6</h6>
          </div>
          <div className='col text-base'>
            <p className='font-serif'>
              The spectacle before us was indeed sublime.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h6>Caption 7</h6>
          </div>
          <div className='col text-xxs font-medium'>
            <p>The spectacle before us was indeed sublime.</p>
          </div>
        </div>
      </section>
    </KitchenSinkLayout>
  );
}
