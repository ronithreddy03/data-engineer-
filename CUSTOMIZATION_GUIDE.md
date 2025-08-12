# 🎨 Portfolio Customization Guide

Welcome! I've set up your portfolio website with template files that you can easily customize. Here's how to add your personal information:

## 📝 Quick Start Checklist

### 1. Contact Information (`src/data/contact.ts`)
Update your social media and contact links:
- **GitHub**: Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
- **LinkedIn**: Replace `YOUR_LINKEDIN_USERNAME` with your LinkedIn profile
- **Email**: Replace `YOUR_EMAIL@example.com` with your email address
- **Optional**: Uncomment and add Twitter, Instagram, or other social media

### 2. About Page (`src/data/about.ts`)
Replace the placeholder text with your personal information:
- **Intro**: Your name, profession, current role, and what drives you
- **Some History**: Key milestones in your career or education
- **I Like**: Your interests, hobbies, and favorite technologies
- **Travel/Geography**: Where you're from and places you've lived/visited
- **Fun Facts**: Interesting facts about yourself
- **I Dream Of**: Your goals and aspirations
- **Websites from People I Admire**: People who inspire you

### 3. Work Experience (`src/data/resume/work.ts`)
Add your job history:
- **Company name**: Your employer
- **Position**: Your job title
- **URL**: Company website
- **Dates**: Start and end dates (format: YYYY-MM-DD)
- **Summary**: Brief description of your role
- **Highlights**: Key achievements and projects (3-5 bullet points)

### 4. Education (`src/data/resume/degrees.ts`)
Add your educational background:
- **School**: University/college name
- **Degree**: Your degree and major
- **Link**: School website
- **Year**: Graduation year

### 5. Skills (`src/data/resume/skills.ts`)
List your technical skills:
- **Title**: Skill name (e.g., "JavaScript", "Python")
- **Competency**: 1-5 scale (1=Beginner, 5=Expert)
- **Category**: Skill categories (e.g., "Web Development", "Languages")

### 6. Projects (`src/data/projects.ts`)
Showcase your work:
- **Title**: Project name
- **Subtitle**: Contest won, hackathon, etc.
- **Link**: Project URL (if available)
- **Image**: Project screenshot (place in `public/images/projects/`)
- **Date**: Project completion date
- **Description**: What the project does and technologies used

## 🖼️ Adding Images

1. **Profile Picture**: Replace `public/images/me.jpg` with your photo
2. **Project Images**: Add project screenshots to `public/images/projects/`
3. **Favicon**: Replace favicon files in `public/images/favicon/` with your own

## 🎯 Example Customizations

### Contact Information Example:
```typescript
{
  link: 'https://github.com/johndoe',
  label: 'Github',
  icon: faGithub,
},
{
  link: 'https://www.linkedin.com/in/johndoe',
  label: 'LinkedIn',
  icon: faLinkedinIn,
},
{
  link: 'mailto:john.doe@email.com',
  label: 'Email',
  icon: faEnvelope,
},
```

### Work Experience Example:
```typescript
{
  name: 'Tech Company Inc.',
  position: 'Senior Software Engineer',
  url: 'https://techcompany.com',
  startDate: '2022-01-15',
  endDate: '2024-03-01',
  summary: 'Led development of web applications using React and Node.js',
  highlights: [
    'Built and deployed 5+ production applications',
    'Mentored 3 junior developers',
    'Improved application performance by 40%',
  ],
},
```

## 🚀 Next Steps

1. **Start with contact info** - This is the easiest to customize
2. **Add your work experience** - Most important for your resume
3. **Update the about page** - Make it personal and engaging
4. **Add your projects** - Showcase your best work
5. **Customize skills** - Highlight your technical expertise
6. **Add your photo** - Make it personal

## 💡 Tips

- **Be specific**: Instead of "Built websites," say "Built responsive e-commerce site using React"
- **Use metrics**: "Improved performance by 50%" is better than "Improved performance"
- **Keep it current**: Update regularly with new projects and experiences
- **Be authentic**: Let your personality shine through in the about section

## 🔧 Testing Your Changes

After making changes, your development server will automatically reload. Visit `http://localhost:3000` to see your updates!

## 📚 Need Help?

- Check the original README.md for more technical details
- Look at the existing code structure for examples
- The website uses Next.js, TypeScript, and SCSS

Happy customizing! 🎉


