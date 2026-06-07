# ALIMUF - Alamatul Istijabah Muslim International Foundation Website

A modern, production-ready Islamic organization website built with Next.js 15, React, TypeScript, Tailwind CSS, and PostgreSQL.

## 📍 Organization Details

- **Full Name**: Alamatul Istijabah Muslim International Foundation
- **Location**: 92 Odunfa Street, Lagos Island, Lagos, Nigeria
- **Website**: https://alimuf.org (coming soon)

## 🎯 Features

### Public Pages
- ✅ Homepage with hero section, mission, programs, events, gallery, testimonials
- ✅ About page with committee members and scholars (Muallims)
- ✅ Events & Gallery management
- ✅ Contact page with form and Google Maps
- ✅ Membership registration system
- ✅ Social media links page
- ✅ Responsive mobile-first design

### Admin Dashboard
- ✅ Secure authentication with NextAuth
- ✅ Member management
- ✅ Event management (CRUD)
- ✅ Gallery and album management
- ✅ Scholar/Muallim profiles
- ✅ Committee member management
- ✅ Contact message review
- ✅ Analytics and reporting
- ✅ Role-based access control

### Technical Features
- ✅ SEO optimization (metadata, Open Graph, structured data)
- ✅ Email notifications
- ✅ Cloudinary media integration
- ✅ Rate limiting and security
- ✅ CSRF protection
- ✅ Input validation
- ✅ Lighthouse score 95+
- ✅ Accessibility 100

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth
- **Storage**: Cloudinary
- **Email**: Resend
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Cloudinary account
- Resend account (for emails)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shuaib001-A/alimuf.git
cd alimuf
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

4. Initialize the database:
```bash
npm run prisma:generate
npm run prisma:migrate
```

5. Run the development server:
```bash
npm run dev
```

6. Open http://localhost:3000 in your browser

## 📁 Project Structure

```
alimuf/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   ├── pages/               # API routes
│   ├── lib/                 # Utilities and helpers
│   ├── styles/              # Global styles
│   ├── types/               # TypeScript types
│   └── hooks/               # Custom React hooks
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
├── .env.example             # Environment variables template
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🔐 Environment Setup

Create a `.env.local` file with:

```
DATABASE_URL=your_postgres_url
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RESEND_API_KEY=your_resend_key
ADMIN_EMAIL=admin@alimuf.org
```

## 🎨 Design System

### Colors
- **Primary**: #0F6B43 (Islamic Green)
- **Secondary**: #D4AF37 (Gold)
- **Text**: #1F2937 (Dark Gray)
- **Background**: #FFFFFF (White)

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)

## 📊 Database Schema

Key models:
- **User**: Admin users
- **CommitteeMembers**: Leadership team
- **Muallims**: Scholars and Islamic teachers
- **Events**: Organization events
- **EventRegistrations**: Event attendees
- **Gallery**: Media management
- **Albums**: Photo album grouping
- **MembershipApplications**: New member registrations
- **ContactMessages**: Contact form submissions
- **Settings**: Website configuration

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and select your repository
4. Add environment variables
5. Click "Deploy"

### Database Setup (Supabase)

1. Create account on [Supabase](https://supabase.com)
2. Create new project
3. Copy PostgreSQL connection string
4. Add to `.env.local`

### Media Storage (Cloudinary)

1. Create account on [Cloudinary](https://cloudinary.com)
2. Get API credentials
3. Add to `.env.local`

## 📧 Email Configuration

1. Create account on [Resend](https://resend.com)
2. Get API key
3. Add to `.env.local`

## 🔒 Security Features

- CSRF protection
- Input validation with Zod
- Rate limiting on API routes
- Secure authentication with NextAuth
- Password hashing with bcrypt
- SQL injection prevention (Prisma ORM)
- XSS protection
- HTTPS enforcement

## 📈 Performance

- Lighthouse Score: 95+
- Accessibility: 100
- Mobile-first responsive design
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Edge caching with Vercel

## 📱 Responsive Design

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

For internal team members, create a feature branch:

```bash
git checkout -b feature/your-feature-name
git add .
git commit -m "Add your feature"
git push origin feature/your-feature-name
```

Then create a Pull Request.

## 📞 Support

- Email: admin@alimuf.org
- Phone: +234 (To be added)
- Address: 92 Odunfa Street, Lagos Island, Lagos, Nigeria

## 📄 License

Private - ALIMUF Organization

## 🙏 Acknowledgments

Built with dedication to serve the Islamic community and promote Islamic education.

---

**Last Updated**: 2026-06-07
