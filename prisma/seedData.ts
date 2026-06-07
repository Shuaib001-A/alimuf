import { Prisma } from '@prisma/client';

export const settingsData: Prisma.SettingsCreateInput[] = [
  {
    key: 'organization_name',
    value: 'Alamatul Istijabah Muslim International Foundation',
    description: 'Official organization name'
  },
  {
    key: 'organization_location',
    value: '92 Odunfa Street, Lagos Island, Lagos, Nigeria',
    description: 'Physical office address'
  },
  {
    key: 'contact_email',
    value: 'admin@alimuf.org',
    description: 'Primary contact email'
  },
  {
    key: 'contact_phone',
    value: '+234-XXX-XXX-XXXX',
    description: 'Primary contact phone'
  },
  {
    key: 'website_url',
    value: 'https://alimuf.org',
    description: 'Official website URL'
  },
  {
    key: 'vision',
    value: 'To establish a vibrant Islamic center of learning and community development that promotes Islamic knowledge, spiritual growth, and socio-economic empowerment.',
    description: 'Organization vision'
  },
  {
    key: 'mission',
    value: 'To provide quality Islamic education, promote Islamic values, engage in dawah activities, and contribute meaningfully to the development of society.',
    description: 'Organization mission'
  },
];
