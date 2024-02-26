import { Document, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import colors from 'tailwindcss/colors'

import { careerSteps } from '@/app/(home)/_home/experience/experienceData'
import { projects as allProjects } from '@/app/(home)/_home/projects/projectsData'

// Default fontFamily is 'Helvetica'
// The bold version is called 'Helvetica-Bold'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: 40,
    gap: 20,
    fontSize: 10,
    color: colors.slate[600],
    lineHeight: 1.25,
    letterSpacing: 0.1
  },
  left: {
    flexBasis: '60%'
  },
  right: {
    flexBasis: '40%'
  },
  section: {
    marginBottom: 20
  }
})

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Text
    style={{
      fontSize: 10,
      fontFamily: 'Helvetica-Bold',
      color: colors.teal[500],
      textTransform: 'uppercase',
      marginBottom: 8
    }}
  >
    {children}
  </Text>
)

const intro = (
  <>
    <Text style={{ fontSize: 26, fontFamily: 'Helvetica-Bold', color: colors.slate[700], letterSpacing: -1 }}>
      Bartosz Podgruszecki
      <Text style={{ color: colors.teal[400] }}>.</Text>
    </Text>
    <Text style={{ marginTop: 10, maxWidth: 250 }}>
      Freelance Software Engineer from Krotoszyn, Poland, working mostly in web development.
    </Text>
  </>
)

const experience = (
  <>
    <SectionTitle>Experience</SectionTitle>
    {careerSteps.map(({ time, description, descriptionBullets, title }, index) => (
      <View key={time} style={{ marginTop: index ? 15 : 0 }}>
        <View style={{ flexDirection: 'row', gap: 5, marginBottom: 3 }}>
          <Text style={{ fontFamily: 'Helvetica-Bold' }}>{title}</Text>
          <Text style={{ color: colors.teal[500] }}>•</Text>
          <Text style={{ color: colors.slate[400] }}>{time}</Text>
        </View>
        {/* <Text>{fullDescription || description}</Text> */}
        {descriptionBullets.map((bullet, index) => (
          <Text key={index} style={{ marginLeft: 0 }}>
            • {bullet}
          </Text>
        ))}
      </View>
    ))}
  </>
)

const contact = (
  <>
    <Text>
      <Link style={{ color: colors.slate[700] }} href="mailto:bartosz.podgruszecki@gmail.com">
        bartosz.podgruszecki@gmail.com
      </Link>
    </Text>
    <Text style={{ marginTop: 5 }}>
      <Link style={{ color: colors.slate[700] }} href="https://github.com/barthicus">
        github.com/barthicus
      </Link>
    </Text>
  </>
)

const skills = (
  <>
    <SectionTitle>Skills</SectionTitle>

    <Text style={{ fontFamily: 'Helvetica-Bold', marginBottom: 3 }}>Programming Languages</Text>
    <Text>JavaScript (ES2015+), TypeScript, HTML, CSS, GraphQL, MySQL, PHP</Text>

    <Text style={{ fontFamily: 'Helvetica-Bold', marginTop: 10, marginBottom: 3 }}>Libraries & Frameworks</Text>
    <Text>
      React, Next.js, Node.js, Expo/React Native, Tailwind CSS, Styled Components, ThreeJS, WordPress, Firebase
    </Text>

    <Text style={{ fontFamily: 'Helvetica-Bold', marginTop: 10, marginBottom: 3 }}>Tools & Platforms</Text>
    <Text>Git, Vercel, AWS, PlanetScale, Mapbox, Sanity.io, Firebase, Figma, Sendgrid, Stripe</Text>
  </>
)

const projects = (
  <>
    <SectionTitle>Featured projects</SectionTitle>
    {allProjects
      .filter(({ isFeatured }) => isFeatured)
      .map(({ intro, title }, index) => (
        <View key={title} style={{ marginTop: index ? 10 : 0 }}>
          <View style={{ flexDirection: 'row', gap: 5, marginBottom: 3 }}>
            <Text style={{ fontFamily: 'Helvetica-Bold' }}>{title}</Text>
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
    <Text style={{ fontFamily: 'Helvetica-Bold', marginBottom: 3 }}>Wroclaw University of Economics</Text>
    <Text>Master&apos;s degree in Informatics and Econometrics</Text>
  </>
)

const languages = (
  <>
    <SectionTitle>Spoken languages</SectionTitle>

    <Text style={{ marginBottom: 3 }}>
      <Text style={{ fontFamily: 'Helvetica-Bold' }}>English</Text> - Intermediate-level proficiency
    </Text>

    <Text style={{ marginBottom: 3 }}>
      <Text style={{ fontFamily: 'Helvetica-Bold' }}>Polish</Text> - Native proficiency
    </Text>
  </>
)

const hobby = (
  <>
    <SectionTitle>Hobby</SectionTitle>
    <Text>I spend most of my free time with my two kids and my lovely wife.</Text>
    <Text style={{ marginTop: 5 }}>
      Outside of that, I really enjoy cooking, running and calisthenics. If I can I really like watching esports matches
      while cheering for my favorite teams.
    </Text>
  </>
)

export const cvContent = (
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
        <View style={styles.section}>{hobby}</View>
      </View>
    </Page>
  </Document>
)
