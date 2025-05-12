import { translationTable } from '@/locales/config';
import TranslationTable from './TranslationTable';

function UserSettingLocale() {
  return (
    <TranslationTable
      data={translationTable}
      languages={[
        'English',
        'Arabic',
      ]}
    />
  );
}

export default UserSettingLocale;
