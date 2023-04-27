import moment from 'moment';

type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};
// !STARTERCONF This OG is just a dummy for making sure that tests run
// Please clone them and self-host if your site is going to be visited by many people.
// Then change the url and the default logo.
export function openGraph({
  siteName,
  templateTitle,
  description,
  // !STARTERCONF Or, you can use my server with your own logo.
  logo = 'https://og.<your-domain>/images/logo.jpg',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.<your-domain>/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

export const getNotificationDate = (date: Date) => {
  const compareDate = moment(date);
  const currentDate = moment(new Date());

  const notificationTime = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const differenceDays = currentDate.diff(compareDate, 'days');

  if (differenceDays === 0) {
    return `Today ${notificationTime}`;
  }
  if (differenceDays === 1) {
    return `Yesterday ${notificationTime}`;
  }
  if (differenceDays < 7) {
    return `${differenceDays} day${differenceDays === 1 ? '' : 's'} ago`;
  }

  const differenceWeeks = currentDate.diff(compareDate, 'weeks');
  if (differenceWeeks < 4) {
    return `${differenceWeeks} week${differenceWeeks === 1 ? '' : 's'} ago`;
  }

  const differenceMonths = currentDate.diff(compareDate, 'months');
  if (differenceMonths < 12) {
    return `${differenceMonths} month${differenceMonths === 1 ? '' : 's'} ago`;
  }

  const differenceYears = currentDate.diff(compareDate, 'years');
  return `${differenceYears} year${differenceYears === 1 ? '' : 's'} ago`;
};
