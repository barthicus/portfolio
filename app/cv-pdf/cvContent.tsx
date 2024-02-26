import { Document, Page, renderToBuffer, StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

export const cvContent = (
  <Document producer="Bartosz Podgruszecki" creator="Bartosz Podgruszecki" title="Bartosz Podgruszecki CV">
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Bartosz Podgruszecki</Text>
        <Text>Freelance Software Engineer from Krotoszyn, Poland, working mostly in web development.</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
)
