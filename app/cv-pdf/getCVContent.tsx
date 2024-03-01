import { headers } from 'next/headers'
import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import colors from 'tailwindcss/colors'

import { careerSteps } from '@/app/(home)/_home/experience/experienceData'
import { projects as allProjects } from '@/app/(home)/_home/projects/projectsData'

const loadFonts = () => {
  // read headers to get the host and protocol
  // this is needed to load the fonts from the correct absolute location
  // because Next.js cannot be loaded as regular import
  const headersList = headers()
  const host = headersList.get('host')
  const protocol = headersList.get('x-forwarded-proto')

  Font.register({
    family: 'Inter',
    fonts: [
      { src: `${protocol}://${host}/fonts/Inter/Inter-Thin.ttf`, fontWeight: 100 },
      { src: `${protocol}://${host}/fonts/Inter/Inter-ExtraLight.ttf`, fontWeight: 200 },
      { src: `${protocol}://${host}/fonts/Inter/Inter-Light.ttf`, fontWeight: 300 },
      { src: `${protocol}://${host}/fonts/Inter/Inter-Regular.ttf`, fontWeight: 400 },
      { src: `${protocol}://${host}/fonts/Inter/Inter-Medium.ttf`, fontWeight: 500 },
      { src: `${protocol}://${host}/fonts/Inter/Inter-SemiBold.ttf`, fontWeight: 600 },
      { src: `${protocol}://${host}/fonts/Inter/Inter-Bold.ttf`, fontWeight: 700 },
      { src: `${protocol}://${host}/fonts/Inter/Inter-ExtraBold.ttf`, fontWeight: 800 },
      { src: `${protocol}://${host}/fonts/Inter/Inter-Black.ttf`, fontWeight: 900 }
    ]
  })

  // disables hyphenation
  // Docs: https://v3.react-pdf.org/advanced#hyphenation
  Font.registerHyphenationCallback(word => [word])
}

export const getCVContent = () => {
  loadFonts()

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      padding: 40,
      gap: 20,
      fontSize: 8,
      color: colors.slate[600],
      lineHeight: 1.3,
      letterSpacing: 0.1,
      fontFamily: 'Inter'
    },
    left: {
      flexBasis: '60%'
    },
    right: {
      flexBasis: '40%'
    },
    section: {
      marginBottom: 20
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: colors.slate[700],
      letterSpacing: -1
    },
    subTitle: {
      marginTop: 5,
      maxWidth: 250
    },
    sectionTitle: {
      fontSize: 11,
      fontWeight: 'semibold',
      color: colors.teal[500],
      marginBottom: 8
    },
    contactLink: {
      color: colors.slate[700],
      textDecoration: 'none',
      fontSize: 8,
      marginTop: 2
    }
  })

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <Text style={styles.sectionTitle}>{children}</Text>
  )

  const intro = (
    <>
      <Text style={styles.title}>
        Bartosz Podgruszecki
        <Text style={{ color: colors.teal[400] }}>.</Text>
      </Text>
      <Text style={styles.subTitle}>
        Experienced Front-End/Full-Stack Developer working mostly in web development with React and TypeScript.
      </Text>
    </>
  )

  const experience = (
    <>
      <SectionTitle>Experience</SectionTitle>
      {careerSteps.map(({ time, company, descriptionBullets, title }, index) => (
        <View key={time} style={{ marginTop: index ? 15 : 0 }}>
          <View style={{ flexDirection: 'row', gap: 5, marginBottom: 6, fontSize: 10 }}>
            <Text>{title}</Text>
            <Text style={{ color: colors.teal[500] }}>•</Text>
            <Text style={{ fontWeight: 'extrabold' }}>{company}</Text>
            <Text style={{ color: colors.slate[400] }}>{time}</Text>
          </View>
          {descriptionBullets.map((bullet, index) => (
            <View key={index} style={{ marginTop: 3, marginLeft: 5, flexDirection: 'row', gap: 4 }}>
              <Text>•</Text>
              <Text>{bullet}</Text>
            </View>
          ))}
        </View>
      ))}
    </>
  )

  const contact = (
    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
      {/* <Image
        src="https://avatars.githubusercontent.com/u/6414011?v=4"
        style={{ width: 30, height: 30, borderRadius: 50 }}
      /> */}
      <View>
        <Link style={styles.contactLink} href="mailto:bartosz.podgruszecki@gmail.com">
          bartosz.podgruszecki@gmail.com
        </Link>
        <Link style={styles.contactLink} href="https://github.com/barthicus">
          github.com/barthicus
        </Link>
        <Link style={styles.contactLink} href="https://barthicus.github.io">
          barthicus.github.io
        </Link>
        <Link style={styles.contactLink} href="https://www.linkedin.com/in/bartosz-podgruszecki">
          linkedin.com/in/bartosz-podgruszecki
        </Link>
      </View>
    </View>
  )

  const skills = (
    <>
      <SectionTitle>Skills</SectionTitle>

      <Text style={{ fontWeight: 'bold', marginBottom: 3 }}>Programming Languages</Text>
      <Text>JavaScript (ES2015+), TypeScript, HTML, CSS, GraphQL, MySQL, PHP</Text>

      <Text style={{ fontWeight: 'bold', marginTop: 10, marginBottom: 3 }}>Libraries & Frameworks</Text>
      <Text>
        React, Next.js, Node.js, Expo/React Native, Tailwind CSS, Styled Components, ThreeJS, WordPress, Firebase
      </Text>

      <Text style={{ fontWeight: 'bold', marginTop: 10, marginBottom: 3 }}>Tools & Platforms</Text>
      <Text>Git, Vercel, AWS, PlanetScale, Mapbox, Sanity.io, Firebase, Figma, Sendgrid, Stripe</Text>
    </>
  )

  const projects = (
    <>
      <SectionTitle>Featured projects</SectionTitle>
      {allProjects
        .filter(({ isFeatured, isVisible }) => isFeatured && isVisible)
        .toSorted((a, b) => {
          // sort by year and month
          // date format: "MM/YYYY"
          const aDate = a.date.split('/') as [string, string]
          const bDate = b.date.split('/') as [string, string]

          if (aDate.length !== 2 || bDate.length !== 2) return 0

          return Number(bDate[1]) - Number(aDate[1]) || Number(bDate[0]) - Number(aDate[0])
        })
        .map(({ intro, title }, index) => (
          <View key={title} style={{ marginTop: index ? 10 : 0 }}>
            <View style={{ flexDirection: 'row', gap: 5, marginBottom: 3 }}>
              <Text style={{ fontWeight: 'semibold' }}>{title}</Text>
              {/* <Text style={{ color: colors.teal[500] }}>•</Text>
            <Text style={{ color: colors.slate[400] }}>{time}</Text> */}
            </View>
            <Text>{intro}</Text>
          </View>
        ))}
    </>
  )

  const education = (
    <>
      <SectionTitle>Education</SectionTitle>
      <Text style={{ fontWeight: 'bold', marginBottom: 3 }}>Wroclaw University of Economics</Text>
      <Text>Master&apos;s degree in Informatics and Econometrics</Text>
    </>
  )

  const languages = (
    <>
      <SectionTitle>Spoken languages</SectionTitle>

      <Text style={{ marginBottom: 3 }}>
        <Text style={{ fontWeight: 'semibold' }}>English</Text> - Intermediate-level proficiency
      </Text>

      <Text style={{ marginBottom: 3 }}>
        <Text style={{ fontWeight: 'semibold' }}>Polish</Text> - Native proficiency
      </Text>
    </>
  )

  const freeTime = (
    <>
      <SectionTitle>Free time</SectionTitle>
      <Text>
        I spend most of my free time with my two kids and my lovely wife. Outside of that, I really enjoy cooking,
        running and calisthenics.
      </Text>
      <Text style={{ marginTop: 5 }}>
        If I can I really like watching esports matches while cheering for my favorite teams and playing video games
        (D2R and POE).
      </Text>
    </>
  )

  return (
    <Document producer="Bartosz Podgruszecki" creator="Bartosz Podgruszecki" title="Bartosz Podgruszecki CV">
      <Page size="A4" style={styles.page}>
        <View style={styles.left}>
          <View style={styles.section}>{intro}</View>
          <View style={styles.section}>{experience}</View>
        </View>
        <View style={styles.right}>
          <View style={styles.section}>{contact}</View>
          <View style={styles.section}>{skills}</View>
          <View style={styles.section}>{projects}</View>
          <View style={styles.section}>{education}</View>
          <View style={styles.section}>{languages}</View>
          <View style={styles.section}>{freeTime}</View>
        </View>
      </Page>
    </Document>
  )
}
