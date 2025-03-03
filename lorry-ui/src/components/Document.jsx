import { StyleSheet } from '@react-pdf/renderer';
import { Page, Text, View, Document } from '@react-pdf/renderer';


const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Date: 09/02/2025</Text>
          <Text>Lorry Number: 6050</Text>
          <Text>From: Guntur To: Chilakaluripet</Text>
          <Text>Mobile: 4654165422</Text>
          <Text>Goods: Iron</Text>
          <Text>Amount: 8000/-</Text>
        </View>
      </Page>
    </Document>
  );
  
  const styles = StyleSheet.create({
    page: { flexDirection: 'row', backgroundColor: '#E4E4E4' },
    section: { margin: 10, padding: 10, flexGrow: 1 }
  });

  export default MyDocument