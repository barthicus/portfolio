const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
    {children}
  </a>
)

export const About = () => {
  return (
    <section data-section id="about" className="mb-16 scroll-mt-16 space-y-10 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <p>
        I&apos;m Software Engineer from Krotoszyn, Poland, working mostly in <strong>web development</strong>. I enjoy
        turning complex problems into performant and beautiful applications. Recently, I&apos;ve been designing web
        applications for medical clinics from United States like <strong>video-call solutions</strong>,{' '}
        <strong>live events CRMs</strong>, and orders management applications.
      </p>
      <p>
        For my upcoming projects, I prefer to choose <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> with{' '}
        <ExternalLink href="https://www.typescriptlang.org/">TypeScript</ExternalLink> and{' '}
        <ExternalLink href="https://tailwindcss.com/">TailwindCSS</ExternalLink>. I also rely on{' '}
        <ExternalLink href="https://vercel.com">Vercel</ExternalLink> for hosting and{' '}
        <ExternalLink href="https://neon.tech">NeonDB</ExternalLink> for the database. When it comes to the UI,{' '}
        <ExternalLink href="https://figma.com">Figma</ExternalLink> is my choice for designing and prototyping.
      </p>
      <p>
        Family is everything to me so I spend most of my free time with my two kids and my lovely wife. Outside of that,
        I really enjoy cooking, running and calisthenics. If I can I really like watching esports matches while cheering
        for my favorite teams.
      </p>
      <p className="text-slate-600">
        When everyone is sleeping I definitely don&apos;t slain any 😈 in Diablo 2 or Path of Exile. Nope. Not at all.
      </p>
    </section>
  )
}
