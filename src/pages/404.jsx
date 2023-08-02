import PageTitle from 'components/PageTitle';
import SubTitle from 'components/SubTitle';
import { useTranslation } from 'react-i18next';

export default function errorPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <PageTitle title={t('about-us')} />
      <SubTitle subTitle={t('sub-about-us')} />
      <p className="text-xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        voluptate optio consequatur obcaecati, eum ipsam dolores tempore
        similique, voluptatum autem iusto quod? Dolor, necessitatibus corrupti.
        Nisi error numquam soluta sequi.
      </p>
    </div>
  );
}
