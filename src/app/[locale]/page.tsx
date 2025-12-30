import Header from "@/components/Header";
import SectionDivider from "@/components/SectionDivider";
import JobEntry from "@/components/JobEntry";
import SchoolEntry from "@/components/SchoolEntry";
import SkillsList from "@/components/SkillsList";
import ContactInfo from "@/components/ContactInfo";
import KeyAchievements from "@/components/KeyAchievements";
import Projects from "@/components/Projects";
import { getI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();
  const profilePicture: string = "juan-daniel-profile_xbskaf";
  const name: string = "Juan Daniel";
  const lastName: string = "Sanchez Ramirez";
  const email: string = "juan.sanchez@stallionstudios.net";
  const phoneNumber: string = "+52 388 102 4353";
  const address: string = "Valle Dorado, Bahia de Banderas, Nay";
  const linkedIn: string = "https://linkedin.com/in/juan-sanchez-ramirez";
  const gitHub: string = "https://github.com/StallionStudios";
  const aboutMe: string = t("aboutMeText", {
    years: new Date().getFullYear() - 2021,
  });

  const keyAchievements = [
    t("phpToNuxtMigration"),
    t("awsMigration"),
    t("cicdImplementation"),
    t("juniorDeveloperMentorship"),
    t("websiteManagement"),
    t("modularUiSystem"),
  ];

  const projects = [
    {
      title: t("vidantaWebsiteTitle"),
      technologies: [
        "Next.js",
        "Contentstack",
        "Vercel",
        "TypeScript",
        "Tailwindcss",
        "GraphQL",
      ],
      description: t("project1Description"),
    },
    {
      title: t("hotelQuoteCalculatorTitle"),
      technologies: ["PHP", "Vue.js", "REST API", "Bootstrap"],
      description: t("project2Description"),
    },
    {
      title: t("taferMultiBrandWebsitesTitle"),
      technologies: ["PHP", "Bootstrap", "Vue.js", "Laravel", "AWS"],
      description: t("project3Description"),
    },
    {
      title: t("acceleratedDevWorkflowTitle"),
      technologies: ["Docker", "CI/CD", "Bitbucket Pipelines"],
      description: t("project4Description"),
    },
  ];
  const jobs = [
    {
      jobTitle: t("vidantaJobTitle"),
      employer: t("vidantaEmployer"),
      startDate: t("vidantaStartDate"),
      endDate: t("presentDate"),
      achievements: [
        t("vidantaAchievement1"),
        t("vidantaAchievement2"),
        t("vidantaAchievement3"),
        t("vidantaAchievement4"),
        t("vidantaAchievement5"),
        t("vidantaAchievement6"),
        t("vidantaAchievement7"),
      ],
    },
    {
      jobTitle: t("taferSeniorJobTitle"),
      employer: t("taferSeniorEmployer"),
      startDate: t("taferSeniorStartDate"),
      endDate: t("taferSeniorEndDate"),
      achievements: [
        t("taferSeniorAchievement1"),
        t("taferSeniorAchievement2"),
        t("taferSeniorAchievement3"),
        t("taferSeniorAchievement4"),
        t("taferSeniorAchievement5"),
        t("taferSeniorAchievement6"),
        t("taferSeniorAchievement7"),
        t("taferSeniorAchievement8"),
      ],
    },
    {
      jobTitle: t("taferJuniorJobTitle"),
      employer: t("taferJuniorEmployer"),
      startDate: t("taferJuniorStartDate"),
      endDate: t("taferJuniorEndDate"),
      achievements: [
        t("taferJuniorAchievement1"),
        t("taferJuniorAchievement2"),
        t("taferJuniorAchievement3"),
        t("taferJuniorAchievement4"),
        t("taferJuniorAchievement5"),
        t("taferJuniorAchievement6"),
      ],
    },
    {
      jobTitle: t("freelanceJobTitle"),
      employer: t("freelanceEmployer"),
      startDate: t("freelanceStartDate"),
      endDate: t("freelanceEndDate"),
      achievements: [
        t("freelanceAchievement1"),
        t("freelanceAchievement2"),
        t("freelanceAchievement3"),
        t("freelanceAchievement4"),
      ],
    },
  ];
  const education = [
    {
      title: t("multimediaEngineeringTitle"),
      school: t("centroUniversitarioCosta"),
      startDate: t("multimediaEngineeringStartDate"),
      endDate: t("multimediaEngineeringEndDate"),
    },
    {
      title: t("videoGameDiplomaTitle"),
      school: t("centroUniversitarioValles"),
      startDate: t("videoGameDiplomaStartDate"),
      endDate: t("videoGameDiplomaEndDate"),
    },
  ];
  const technicalSkills = [
    {
      title: t("programLang"),
      list: ["C#", "Bash", "Java", "Javascript", "PHP", "Python", "Typescript"],
    },
    {
      title: t("frameworks"),
      list: ["Alpine.js", "Laravel", "Next.js", "Nuxt.js", "React", "Vue.js"],
    },
    {
      title: t("css"),
      list: ["Bootstrap", "Foundation", "SCSS", "Tailwindcss"],
    },
    {
      title: t("devTools"),
      list: [
        "Adobe XD",
        "AWS",
        "Bitbucket",
        "Contentstack",
        "DockerDesktop",
        "Figma",
        "Firebase",
        "GitHub",
        "HubSpot",
        "Mamp",
        "n8n",
        "Netlify",
        "Postman",
        "Vercel",
        "Wordpress",
        "Xamp",
      ],
    },
    {
      title: t("misc"),
      list: [
        "Apollo Client",
        "Axios",
        "Bash",
        "Composer",
        "in18n",
        "MySQL",
        "Bitbucket Pipelines",
        "Bun",
        "Docker",
        "Git",
        "GitHub Actions",
        "GitLab",
        "Grunt",
        "Node.js",
        "Npm",
        "Pnpm",
        "Vite",
        "Webpack",
        "Yarn",
        "Perch CMS",
        "Pinia",
        "SQLite",
        "GraphQL",
        "Docker Compose",
        "Strapi",
        "Vue Router",
        "Vuex",
      ],
    },
  ];

  const softSkills = [
    {
      title: t("communication"),
      list: [t("activeListening"), t("mentorship"), t("teamCollaboration")],
    },
    {
      title: t("personalEffectiveness"),
      list: [
        t("adaptability"),
        t("attentionToDetail"),
        t("fastLearning"),
        t("criticalThinking"),
        t("problemSolving"),
        t("timeManagement"),
      ],
    },
    {
      title: t("leadership"),
      list: [
        t("conflictResolution"),
        t("decisionMaking"),
        t("negotiation"),
        t("projectManagement"),
        t("technicalDirection"),
      ],
    },
  ];
  return (
    <main className="relative w-full shadow">
      <Header
        name={name}
        lastName={lastName}
        profilePicture={profilePicture}
        contactInfo={{
          email: email,
          phoneNumber: phoneNumber,
          address: address,
          linkedIn: linkedIn,
          gitHub: gitHub,
        }}
      />
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="p-4 pt-[calc(var(--header-height)+1rem)] lg:w-3/5 lg:pt-[var(--header-height)]">
          <SectionDivider sectionTitle={t("aboutMeTitle")} />
          <p className="mb-4">{aboutMe}</p>
          <KeyAchievements achievements={keyAchievements} />
          <Projects projects={projects} />
          <SectionDivider sectionTitle={t("experienceTitle")} />
          {jobs.map((item, index) => {
            return (
              <JobEntry
                key={index}
                jobTitle={item.jobTitle}
                employer={item.employer}
                startDate={item.startDate}
                endDate={item.endDate}
                achievements={item.achievements}
              />
            );
          })}
        </div>
        <div className="bg-zinc-800 p-4 text-white lg:w-2/5 lg:pt-[var(--header-height)]">
          <SectionDivider sectionTitle={t("educationTitle")} />
          {education.map((item, index) => {
            return (
              <SchoolEntry
                key={index}
                title={item.title}
                school={item.school}
                startDate={item.startDate}
                endDate={item.endDate}
              />
            );
          })}
          <SectionDivider sectionTitle={t("languagesTitle")} />
          <SkillsList
            skillTitle={t("languagesTitle")}
            skills={[t("english"), t("spanish")]}
          />
          <SectionDivider sectionTitle={t("technicalSkillsTitle")} />
          {technicalSkills.map((item, index) => {
            return (
              <SkillsList
                key={index}
                skillTitle={item.title}
                skills={item.list}
              />
            );
          })}
          <SectionDivider sectionTitle={t("softSkillsTitle")} />
          {softSkills.map((item, index) => {
            return (
              <SkillsList
                key={index}
                skillTitle={item.title}
                skills={item.list}
              />
            );
          })}
          <div className="lg:hidden">
            <SectionDivider sectionTitle={t("contactInformationTitle")} />
            <ContactInfo
              email={email}
              phoneNumber={phoneNumber}
              address={address}
              linkedIn={linkedIn}
              gitHub={gitHub}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
