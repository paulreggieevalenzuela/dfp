import s from './TitleBar.module.scss';

type Props = {
  title?: string;
  description?: string;
};

export default function TitleBar({
  title = 'Component Group Title',
  description,
}: Props) {
  return (
    <div className={s.TitleBar}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
