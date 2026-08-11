import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';

const COLORS = {
  ink: '#0b1523',
  ink2: '#132237',
  paper: '#f7f8fa',
  white: '#ffffff',
  muted: '#68758a',
  line: '#dce2e9',
  cyan: '#00d7e7',
  lime: '#c6ff00',
};

const URL_REGEX = /(https?:\/\/[^\s]+)/gi;

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.paper,
    color: COLORS.ink,
    paddingTop: 34,
    paddingBottom: 34,
    paddingHorizontal: 34,
    fontFamily: 'Helvetica',
    fontSize: 9,
  },

  hero: {
    backgroundColor: COLORS.ink,
    borderRadius: 14,
    padding: 24,
    marginBottom: 18,
  },

  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },

  brand: {
    color: COLORS.white,
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
  },

  eyebrow: {
    color: COLORS.lime,
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },

  title: {
    color: COLORS.white,
    fontSize: 25,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.05,
    marginBottom: 8,
  },

  heroMeta: {
    color: '#91a0b4',
    fontSize: 8,
    lineHeight: 1.4,
  },

  section: {
    marginBottom: 16,
  },

  sectionHeadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },

  sectionIndex: {
    color: COLORS.cyan,
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    marginRight: 8,
  },

  sectionTitle: {
    color: COLORS.ink,
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
  },

  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  quickCard: {
    width: '31.8%',
    minHeight: 48,
    backgroundColor: COLORS.white,
    border: `1 solid ${COLORS.line}`,
    borderRadius: 8,
    padding: 8,
  },

  quickLabel: {
    color: COLORS.muted,
    fontSize: 6.5,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 5,
  },

  quickValue: {
    color: COLORS.ink,
    fontSize: 8.3,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.35,
  },

  notesGrid: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },

  notesCard: {
    flexGrow: 1,
    flexBasis: 0,
    backgroundColor: COLORS.white,
    border: `1 solid ${COLORS.line}`,
    borderRadius: 8,
    padding: 11,
  },

  notesText: {
    color: '#334154',
    fontSize: 8.3,
    lineHeight: 1.5,
  },

  link: {
    color: '#007b91',
    textDecoration: 'underline',
  },

  audienceStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.ink2,
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 11,
    marginBottom: 14,
  },

  audienceLabel: {
    color: '#8795a9',
    fontSize: 6.5,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginRight: 8,
  },

  audienceValue: {
    color: COLORS.white,
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
  },

  table: {
    width: '100%',
    border: `1 solid ${COLORS.line}`,
    borderRadius: 8,
    overflow: 'hidden',
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: COLORS.ink,
  },

  tableHeaderCell: {
    color: COLORS.white,
    fontSize: 6.5,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.65,
    textTransform: 'uppercase',
    padding: 8,
    borderRight: '1 solid #314159',
  },

  tableRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderTop: `1 solid ${COLORS.line}`,
  },

  tableCell: {
    color: '#334154',
    fontSize: 8,
    lineHeight: 1.45,
    padding: 9,
    borderRight: `1 solid ${COLORS.line}`,
  },

  rowNumber: {
    color: COLORS.cyan,
    fontSize: 6.5,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },

  footer: {
    position: 'absolute',
    left: 34,
    right: 34,
    bottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#8d98a7',
    fontSize: 6.5,
  },

  footerAccent: {
    color: COLORS.cyan,
    fontFamily: 'Helvetica-Bold',
  },
});

const safeValue = (value, fallback = '—') => {
  const trimmed = String(value || '').trim();
  return trimmed || fallback;
};

const QUICK_FIELDS = [
  ['Persona', 'persona'],
  ['Sub-Persona', 'subPersona'],
  ['Awareness Level', 'awarenessLevel'],
  ['Angle', 'angle'],
  ['Estimated Duration', 'estimatedDuration'],
  ['Hook', 'hook'],
];

const getCreatorNotesLabel = (data) => {
  const name = String(data.creatorName || '').trim();

  return name
    ? `Notes for ${name}`
    : 'Creator Notes';
};

const getEditorNotesLabel = (data) => {
  const name = String(data.editorName || '').trim();

  return name
    ? `Notes for ${name}`
    : 'Editor Notes';
};

function LinkedPdfText({ text }) {
  const value = String(text || '').trim();

  if (!value) {
    return <Text>—</Text>;
  }

  const parts = value.split(URL_REGEX);

  return (
    <Text>
      {parts.map((part, index) => {
        if (/^https?:\/\//i.test(part)) {
          return (
            <Link
              key={`${part}-${index}`}
              src={part}
              style={styles.link}
            >
              {part}
            </Link>
          );
        }

        return (
          <Text key={`${part}-${index}`}>
            {part}
          </Text>
        );
      })}
    </Text>
  );
}

function getColumns(briefFor) {
  if (briefFor === 'creator') {
    return [
      { key: 'creatorVO', label: 'VO', width: '44%' },
      { key: 'creatorBrief', label: 'Creator Brief', width: '56%' },
    ];
  }

  if (briefFor === 'editor') {
    return [
      { key: 'editorVO', label: 'VO', width: '44%' },
      { key: 'editorBrief', label: 'Editor Brief', width: '56%' },
    ];
  }

  return [
    { key: 'creatorVO', label: 'Creator VO', width: '22%' },
    { key: 'creatorBrief', label: 'Creator Brief', width: '28%' },
    { key: 'editorVO', label: 'Editor VO', width: '22%' },
    { key: 'editorBrief', label: 'Editor Brief', width: '28%' },
  ];
}

function QuickView({ data }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeadingRow}>
        <Text style={styles.sectionIndex}>01</Text>
        <Text style={styles.sectionTitle}>Quick View</Text>
      </View>

      <View style={styles.quickGrid}>
        {QUICK_FIELDS.map(([label, key]) => (
          <View key={key} style={styles.quickCard}>
            <Text style={styles.quickLabel}>{label}</Text>
            <Text style={styles.quickValue}>
              {safeValue(data[key])}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.notesGrid}>
        {(
          data.briefFor === 'creator' ||
          data.briefFor === 'both'
        ) && (
          <View style={styles.notesCard}>
            <Text style={styles.quickLabel}>
              {getCreatorNotesLabel(data)}
            </Text>

            <View style={styles.notesText}>
              <LinkedPdfText text={data.creatorNotes} />
            </View>
          </View>
        )}

        {(
          data.briefFor === 'editor' ||
          data.briefFor === 'both'
        ) && (
          <View style={styles.notesCard}>
            <Text style={styles.quickLabel}>
              {getEditorNotesLabel(data)}
            </Text>

            <View style={styles.notesText}>
              <LinkedPdfText text={data.editorNotes} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

function ProductionTable({ data }) {
  const columns = getColumns(data.briefFor);

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeadingRow}>
        <Text style={styles.sectionIndex}>02</Text>
        <Text style={styles.sectionTitle}>Production Direction</Text>
      </View>

      <View style={styles.audienceStrip}>
        <Text style={styles.audienceLabel}>Brief For</Text>
        <Text style={styles.audienceValue}>
          {data.briefFor === 'both'
            ? 'Creator + Editor'
            : data.briefFor === 'creator'
              ? 'Creator'
              : 'Editor'}
        </Text>
      </View>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          {columns.map((column, index) => (
            <Text
              key={column.key}
              style={[
                styles.tableHeaderCell,
                {
                  width: column.width,
                  borderRight:
                    index === columns.length - 1
                      ? '0 solid transparent'
                      : '1 solid #314159',
                },
              ]}
            >
              {column.label}
            </Text>
          ))}
        </View>

        {data.rows.map((row, rowIndex) => (
          <View key={row.id || rowIndex} style={styles.tableRow} wrap={false}>
            {columns.map((column, columnIndex) => (
              <View
                key={column.key}
                style={[
                  styles.tableCell,
                  {
                    width: column.width,
                    borderRight:
                      columnIndex === columns.length - 1
                        ? '0 solid transparent'
                        : `1 solid ${COLORS.line}`,
                  },
                ]}
              >
                <Text style={styles.rowNumber}>
                  {String(rowIndex + 1).padStart(2, '0')}
                </Text>

                <LinkedPdfText text={row[column.key]} />
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

export default function BriefPDF({ data }) {
  const isBoth = data.briefFor === 'both';

  return (
    <Document
      title={safeValue(data.title, 'Creative Production Brief')}
      author="Fadel"
      subject="Creative Production Brief"
    >
      <Page
        size="A4"
        orientation={isBoth ? 'landscape' : 'portrait'}
        style={styles.page}
        wrap
      >
        <View style={styles.hero}>
          <View style={styles.heroTop}>
            <Text style={styles.brand}>Fadel.</Text>
            <Text style={styles.eyebrow}>Creative Production Brief</Text>
          </View>

          <Text style={styles.title}>
            {safeValue(data.title, 'Untitled Creative')}
          </Text>

          <Text style={styles.heroMeta}>
            Strategic direction translated into clear production instructions
            for the people responsible for creating the asset.
          </Text>
        </View>

        <QuickView data={data} />
        <ProductionTable data={data} />

        <View style={styles.footer} fixed>
          <Text>CREATIVE STRATEGY OP / BRIEFING SYSTEM</Text>

          <Text
            render={({ pageNumber, totalPages }) =>
              `PAGE ${pageNumber} / ${totalPages}`
            }
          />

          <Text style={styles.footerAccent}>FADEL.</Text>
        </View>
      </Page>
    </Document>
  );
}