import { PrismaClient, Position, Qualification } from '@prisma/client';
import { settingsData } from './seedData';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Seed Settings
  console.log('📝 Seeding settings...');
  for (const setting of settingsData) {
    await prisma.settings.upsert({
      where: { key: setting.key },
      update: setting,
      create: setting,
    });
  }

  // Seed Committee Members
  console.log('👥 Seeding committee members...');
  const committeeData = [
    {
      fullName: 'Amir',
      position: Position.PRESIDENT,
      biography: 'Amir is the President and founder of ALIMUF with over 20 years of Islamic scholarship and community leadership experience.',
      email: 'amir@alimuf.org',
      phoneNumber: '+234-XXX-XXX-XXXX',
      order: 1,
    },
    {
      fullName: 'Amirat',
      position: Position.VICE_PRESIDENT,
      biography: 'Amirat serves as Vice President, bringing expertise in Islamic education and women\'s development programs.',
      email: 'amirat@alimuf.org',
      phoneNumber: '+234-XXX-XXX-XXXX',
      order: 2,
    },
    {
      fullName: 'Dr. Fatima Ahmed',
      position: Position.GENERAL_SECRETARY,
      biography: 'Dr. Ahmed manages organizational operations and coordinates all administrative functions.',
      email: 'fatima@alimuf.org',
      phoneNumber: '+234-XXX-XXX-XXXX',
      order: 3,
    },
    {
      fullName: 'Ibrahim Hassan',
      position: Position.FINANCIAL_SECRETARY,
      biography: 'Ibrahim oversees financial management and ensures transparent fund utilization.',
      email: 'ibrahim@alimuf.org',
      phoneNumber: '+234-XXX-XXX-XXXX',
      order: 4,
    },
    {
      fullName: 'Zainab Muhammad',
      position: Position.WELFARE_OFFICER,
      biography: 'Zainab coordinates community welfare programs and member support services.',
      email: 'zainab@alimuf.org',
      phoneNumber: '+234-XXX-XXX-XXXX',
      order: 5,
    },
  ];

  for (const member of committeeData) {
    await prisma.committeeMembers.upsert({
      where: { fullName: member.fullName },
      update: member,
      create: member as any,
    });
  }

  // Seed Muallims (Scholars)
  console.log('🎓 Seeding muallims (scholars)...');
  const muallimData = [
    {
      fullName: 'Sheikh Amir',
      biography: 'Sheikh Amir specializes in Quranic exegesis and Islamic jurisprudence with a focus on practical Islamic living.',
      qualification: Qualification.ALIM,
      areaOfSpecialization: 'Quranic Studies & Islamic Law',
      email: 'sheikh.amir@alimuf.org',
      phoneNumber: '+234-XXX-XXX-XXXX',
      order: 1,
    },
    {
      fullName: 'Dr. Fatima Al-Azhar',
      biography: 'Dr. Al-Azhar holds a PhD in Islamic Studies and specializes in Islamic education methodology.',
      qualification: Qualification.PHD_ISLAMIC_STUDIES,
      areaOfSpecialization: 'Islamic Education & Women\'s Studies',
      email: 'dr.fatima@alimuf.org',
      phoneNumber: '+234-XXX-XXX-XXXX',
      order: 2,
    },
    {
      fullName: 'Ustadh Hassan Ibrahim',
      biography: 'Ustadh Ibrahim specializes in Arabic language and Islamic history, with expertise in teaching methodology.',
      qualification: Qualification.MASTERS_ISLAMIC_STUDIES,
      areaOfSpecialization: 'Arabic Language & Islamic History',
      email: 'hassan@alimuf.org',
      phoneNumber: '+234-XXX-XXX-XXXX',
      order: 3,
    },
  ];

  for (const muallim of muallimData) {
    await prisma.muallims.upsert({
      where: { fullName: muallim.fullName },
      update: muallim,
      create: muallim as any,
    });
  }

  // Seed Sample Events
  console.log('📅 Seeding sample events...');
  const eventsData = [
    {
      title: 'Weekly Quran Study Circle',
      description: 'Join us for weekly Quranic studies with Sheikh Amir. We explore the meanings and applications of the Quran in daily life.',
      location: '92 Odunfa Street, Lagos Island, Lagos',
      startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000),
      capacity: 100,
    },
    {
      title: 'Islamic Education Workshop',
      description: 'Learn modern approaches to Islamic education for children and youth.',
      location: '92 Odunfa Street, Lagos Island, Lagos',
      startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000),
      capacity: 50,
    },
    {
      title: 'Community Service Initiative',
      description: 'Monthly community outreach program focusing on social welfare and community development.',
      location: 'Various Locations, Lagos',
      startDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000),
      capacity: 150,
    },
  ];

  for (const event of eventsData) {
    await prisma.events.upsert({
      where: { title: event.title },
      update: event,
      create: event as any,
    });
  }

  // Seed Social Media
  console.log('📱 Seeding social media links...');
  const socialMediaData = [
    {
      platform: 'facebook',
      url: 'https://facebook.com/alimuf',
      handle: '@alimuf',
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/alimuf',
      handle: '@alimuf',
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/@alimuf',
      handle: '@alimuf',
    },
    {
      platform: 'tiktok',
      url: 'https://tiktok.com/@alimuf',
      handle: '@alimuf',
    },
    {
      platform: 'whatsapp',
      url: 'https://wa.me/234XXXXXXXXXX',
      handle: '+234-XXX-XXX-XXXX',
    },
  ];

  for (const social of socialMediaData) {
    await prisma.socialMedia.upsert({
      where: { platform: social.platform },
      update: social,
      create: social as any,
    });
  }

  console.log('✅ Database seed completed successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seed error:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
