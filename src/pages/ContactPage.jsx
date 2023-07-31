import PageTitle from 'components/PageTitle';
import { useTranslation } from 'react-i18next';
export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <PageTitle title={t('contacts')} />
      <p className="text-xl text-center">Contacts will be here</p>
      <p className="text-xl text-center text-black dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quo
        maiores? Eveniet, fugit non ab corporis laudantium a nobis aspernatur
        qui, illum, cum officiis sunt debitis nihil fuga minima expedita.
      </p>
    </div>
  );
}
