import PageTitle from 'components/PageTitle';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return <PageTitle title={t('about-us')} />;
}
