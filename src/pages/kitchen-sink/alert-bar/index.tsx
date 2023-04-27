import s from './page.module.scss';

import Alertbar from '@/components/AlertBar';
import KitchenSinkLayout from '@/components/layouts/KitchenSinkLayout';
import TitleBar from '@/components/TitleBar';

export default function PageAlertBar() {
  return (
    <main className={s.Page}>
      <div className="left-column">
        <h3>Log in to your account</h3>
        <div className="form-container">
          <label>Label</label>
          <input />
        </div>
        <div className="form-container">
          <label>Label <a>Forgot password?</a></label>
          <input />
        </div>
        <button className="submit">Log in</button>

        <p className="new-outstaffer">
          New to outstaffer?
          <a>Create your free account</a>
        </p>
      </div>
      <div className="right-column">
        <ul className="login-list">
          <li>
            <h4>Hire without hassle</h4>
            <p>Focus on the person and leave the recruitment and logistics to us.</p>
          </li>
          <li>
            <h4>HR Infrastructure as a service</h4>
            <p>Outstaffer owns local legal entities in all our covered countries</p>
          </li>
          <li>
            <h4>No lock-in contracts</h4>
            <p>Hire 1 employee or 100 for a few months or a lifetime.</p>
          </li>
          <li>
            <h4>Global talent pool</h4>
            <p>We make growing remote and international teams simple and easy.</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
