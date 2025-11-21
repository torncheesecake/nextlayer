import {
  Document,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: { padding: 30, backgroundColor: "#FFFFFF", fontFamily: "Helvetica" },
  header: {
    fontSize: 24,
    marginBottom: 10,
    color: "#000000",
    fontWeight: "bold",
  },
  subheader: { fontSize: 12, marginBottom: 30, color: "#666666" },
  section: { marginBottom: 25 },
  categoryHeader: {
    fontSize: 14,
    marginBottom: 10,
    color: "#000000",
    fontWeight: "bold",
    paddingLeft: 8,
    LeftWidth: 4,
    LeftColor: "#FF6B6B",
    paddingVertical: 5,
  },
  table: {
    display: "table",
    width: "auto",
    marginBottom: 15,
    Width: 1,
    Color: "#E5E7EB",
  },
  tableRow: { flexDirection: "row", BottomWidth: 1, Color: "#E5E7EB" },
  tableHeader: {
    backgroundColor: "#F3F4F6",
    color: "#374151",
    fontSize: 9,
    padding: 8,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  tableCell: { fontSize: 9, padding: 8, color: "#1F2937" },
  priceCell: { color: "#FF6B6B", fontWeight: "bold", fontSize: 10 },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 8,
    color: "#9CA3AF",
    TopWidth: 1,
    TopColor: "#E5E7EB",
    paddingTop: 10,
  },
  badge: {
    fontSize: 8,
    backgroundColor: "#F3F4F6",
    color: "#374151",
    padding: 4,
    marginRight: 5,
    Radius: 3,
  },
});
const PricingDocument = ({ pricingData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */} <Text style={styles.header}>Next Layer Consulting</Text>
      <Text style={styles.subheader}>
        Cybersecurity Penetration Testing - Pricing Guide{" "}
        {new Date().getFullYear()}
      </Text>
      {/* Badges */}
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Text style={styles.badge}>NCSC CHECK</Text>{" "}
        <Text style={styles.badge}>ISO 27001</Text>
        <Text style={styles.badge}>NPPV Level 3</Text>
      </View>
      {/* Pricing Tables */}
      {pricingData.map((service, index) => (
        <View key={index} style={styles.section} wrap={false}>
          <Text style={styles.categoryHeader}>{service.category}</Text>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableRow}>
              <Text style={[styles.tableHeader, { width: "18%" }]}>Tier</Text>
              <Text style={[styles.tableHeader, { width: "40%" }]}>Scope</Text>
              <Text style={[styles.tableHeader, { width: "18%" }]}>
                Duration
              </Text>
              <Text style={[styles.tableHeader, { width: "24%" }]}>
                Price Range
              </Text>
            </View>
            {/* Table Rows */}
            {service.tiers.map((tier, tIndex) => (
              <View key={tIndex} style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: "18%" }]}>
                  {tier.tier}
                </Text>
                <Text style={[styles.tableCell, { width: "40%" }]}>
                  {tier.scope}
                </Text>
                <Text style={[styles.tableCell, { width: "18%" }]}>
                  {tier.days}
                </Text>
                <Text
                  style={[styles.priceCell, styles.tableCell, { width: "24%" }]}
                >
                  {tier.priceRange}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ))}
      {/* Footer */}
      <View style={styles.footer} fixed>
        <Text>
          All prices are subject to final confirmation after free scoping call.
          Valid as of
          {new Date().toLocaleDateString("en-GB")}.
        </Text>
        <Text style={{ marginTop: 5 }}>
          Contact: www.nextlayerconsulting.com | Email:
          contact@nextlayerconsulting.com
        </Text>
      </View>
    </Page>
  </Document>
);
export default function PricingPDFDownload({ pricingData }) {
  return (
    <PDFDownloadLink
      document={<PricingDocument pricingData={pricingData} />}
      fileName={`NextLayerConsulting-Pricing-Guide-${new Date().getFullYear()}.pdf`}
      className="border-zinc-800 hover:border-bittersweet inline-block rounded-lg bg-zinc-900 border-2 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
    >
      {({ loading }) => (
        <>
          <i className="bi-download mr-2"></i>
          {loading ? "Preparing PDF..." : "Download Pricing Guide"}
        </>
      )}
    </PDFDownloadLink>
  );
}
