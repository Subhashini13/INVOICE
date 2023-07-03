import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 12
    },
    reportTitle:{
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});


const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>Thank you for Choosing Us and Best Wishes ............................................
        Contact info : BMBC Forum, DLF Cyber City Rd, DLFPhase 3, Gurugram, Haryana 122002
            info@bookmybestclass.com
        </Text>
        
    </View>
);
  
export default InvoiceThankYouMsg
