import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';

/*
|--------------------------------------------------------------------------
| COLORS
|--------------------------------------------------------------------------
*/

const COLORS = {
  ink: '#0b1523',
  ink2: '#132237',
  paper: '#f7f8fa',
  white: '#ffffff',

  muted: '#7d8898',
  body: '#344154',

  line: '#dce2e9',

  cyan: '#00d7e7',
  cyanDark: '#00adbd',
  lime: '#c6ff00',
};

const URL_REGEX =
  /(https?:\/\/[^\s]+)/gi;

/*
|--------------------------------------------------------------------------
| PDF STYLES
|--------------------------------------------------------------------------
*/

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.paper,
    color: COLORS.ink,

    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 25,

    fontFamily: 'Helvetica',
    fontSize: 9,
  },

  /* ----------------------------------------------------------------------
     HERO
     ---------------------------------------------------------------------- */

  hero: {
    backgroundColor: COLORS.ink,

    borderRadius: 12,

    padding: 22,
  },

  heroTop: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 18,
  },

  /*
  |--------------------------------------------------------------------------
  | LOGO
  |--------------------------------------------------------------------------
  |
  | Your website logo inherits the system font and gets its character from
  | heavy weight + tight tracking.
  |
  | Helvetica Bold is the closest built-in PDF-safe equivalent without
  | requiring external font files.
  |--------------------------------------------------------------------------
  */

  brand: {
    color: COLORS.white,

    fontSize: 15,

    fontFamily: 'Helvetica-Bold',

    letterSpacing: -0.65,
  },

  brandDot: {
    color: COLORS.cyan,

    fontFamily: 'Helvetica-Bold',
  },

  /*
  |--------------------------------------------------------------------------
  | CREATIVE PRODUCTION BRIEF
  |--------------------------------------------------------------------------
  */

  eyebrow: {
    color: COLORS.lime,

    fontSize: 7.6,

    fontFamily: 'Helvetica-Bold',

    letterSpacing: 1.35,

    textTransform: 'uppercase',
  },

  title: {
    color: COLORS.white,

    fontSize: 24.8,

    fontFamily: 'Helvetica-Bold',

    lineHeight: 1.05,

    letterSpacing: -0.7,
  },

  heroMeta: {
    maxWidth: 440,

    marginTop: 8,

    color: '#92a0b2',

    fontSize: 8.8,

    lineHeight: 1.55,
  },

  /* ----------------------------------------------------------------------
     SHARED SECTION
     ---------------------------------------------------------------------- */

  section: {
    marginTop: 18,
  },

  sectionHeadingRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 8,
  },

  sectionIndex: {
    color: COLORS.cyanDark,

    fontSize: 7.5,

    fontFamily: 'Helvetica-Bold',

    marginRight: 7,
  },

  sectionTitle: {
    color: COLORS.ink,

    fontSize: 10.8,

    fontFamily: 'Helvetica-Bold',

    letterSpacing: -0.2,
  },

  /* ----------------------------------------------------------------------
     QUICK VIEW
     ---------------------------------------------------------------------- */

  quickGrid: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    gap: 6,
  },

  quickCard: {
    width: '32.5%',

    minHeight: 56,

    padding: 9,

    backgroundColor: COLORS.white,

    border: `1 solid ${COLORS.line}`,

    borderRadius: 7,
  },

  quickLabel: {
    marginBottom: 5,

    color: COLORS.muted,

    fontSize: 6.4,

    fontFamily: 'Helvetica-Bold',

    letterSpacing: 0.7,

    textTransform: 'uppercase',
  },

  quickValue: {
    color: '#172536',

    fontSize: 8.8,

    fontFamily: 'Helvetica-Bold',

    lineHeight: 1.35,

    letterSpacing: -0.1,
  },

  /* ----------------------------------------------------------------------
     CREATOR / EDITOR NOTES
     ---------------------------------------------------------------------- */

  notesGrid: {
    flexDirection: 'row',

    gap: 7,

    marginTop: 7,
  },

  notesCard: {
    flexGrow: 1,

    flexBasis: 0,

    minHeight: 86,

    padding: 10,

    backgroundColor: COLORS.white,

    border: `1 solid ${COLORS.line}`,

    borderRadius: 7,
  },

  notesText: {
    color: COLORS.body,

    fontSize: 7.8,

    lineHeight: 1.55,
  },

  link: {
    color: '#007f95',

    fontFamily: 'Helvetica-Bold',

    textDecoration: 'underline',
  },

  /* ----------------------------------------------------------------------
     AUDIENCE
     ---------------------------------------------------------------------- */

  audienceStrip: {
    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 7,

    paddingHorizontal: 9,

    marginBottom: 7,

    backgroundColor: COLORS.ink2,

    borderRadius: 6,
  },

  audienceLabel: {
    color: '#8090a4',

    fontSize: 6.2,

    fontFamily: 'Helvetica-Bold',

    letterSpacing: 0.7,

    textTransform: 'uppercase',

    marginRight: 8,
  },

  audienceValue: {
    color: COLORS.white,

    fontSize: 8,

    fontFamily: 'Helvetica-Bold',
  },

  /* ----------------------------------------------------------------------
     PRODUCTION TABLE
     ---------------------------------------------------------------------- */

  table: {
    width: '100%',

    overflow: 'hidden',

    backgroundColor: COLORS.white,

    border: `1 solid ${COLORS.line}`,

    borderRadius: 7,
  },

  tableHeader: {
    flexDirection: 'row',

    backgroundColor: COLORS.ink,
  },

  tableHeaderCell: {
    padding: 7,

    color: COLORS.white,

    fontSize: 6.4,

    fontFamily: 'Helvetica-Bold',

    letterSpacing: 0.6,

    textTransform: 'uppercase',

    borderRight: '1 solid #314159',
  },

  tableRow: {
    flexDirection: 'row',

    backgroundColor: COLORS.white,

    borderTop: `1 solid ${COLORS.line}`,
  },

  tableCell: {
    minHeight: 70,

    padding: 8,

    color: COLORS.body,

    fontSize: 7.5,

    lineHeight: 1.5,

    borderRight: `1 solid ${COLORS.line}`,
  },

  rowNumber: {
    marginBottom: 4,

    color: COLORS.cyanDark,

    fontSize: 6.2,

    fontFamily: 'Helvetica-Bold',
  },

  /* ----------------------------------------------------------------------
     FOOTER
     ---------------------------------------------------------------------- */

  footer: {
    marginTop: 18,

    paddingTop: 9,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    borderTop: `1 solid ${COLORS.line}`,
  },

  footerText: {
    color: '#8d98a7',

    fontSize: 5.8,

    fontFamily: 'Helvetica-Bold',

    letterSpacing: 0.4,
  },

  footerBrand: {
    color: COLORS.cyanDark,

    fontSize: 7.4,

    fontFamily: 'Helvetica-Bold',
  },
});

/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

const safeValue = (
  value,
  fallback = '—'
) => {
  const trimmed =
    String(
      value || ''
    ).trim();

  return (
    trimmed ||
    fallback
  );
};

/*
|--------------------------------------------------------------------------
| QUICK VIEW FIELDS
|--------------------------------------------------------------------------
*/

const QUICK_FIELDS = [
  [
    'Persona',
    'persona',
  ],

  [
    'Sub-Persona',
    'subPersona',
  ],

  [
    'Awareness Level',
    'awarenessLevel',
  ],

  [
    'Angle',
    'angle',
  ],

  [
    'Estimated Duration',
    'estimatedDuration',
  ],

  [
    'Hook',
    'hook',
  ],
];

/*
|--------------------------------------------------------------------------
| NOTES LABELS
|--------------------------------------------------------------------------
*/

const getCreatorNotesLabel = (
  data
) => {
  const name =
    String(
      data.creatorName ||
        ''
    ).trim();

  return name
    ? `Notes for ${name}`
    : 'Creator Notes';
};

const getEditorNotesLabel = (
  data
) => {
  const name =
    String(
      data.editorName ||
        ''
    ).trim();

  return name
    ? `Notes for ${name}`
    : 'Editor Notes';
};

/*
|--------------------------------------------------------------------------
| CLICKABLE PDF TEXT
|--------------------------------------------------------------------------
*/

function LinkedPdfText({
  text,
}) {
  const value =
    String(
      text || ''
    ).trim();

  if (!value) {
    return (
      <Text>
        —
      </Text>
    );
  }

  const parts =
    value.split(
      URL_REGEX
    );

  return (
    <Text>
      {parts.map(
        (
          part,
          index
        ) => {
          if (
            /^https?:\/\//i.test(
              part
            )
          ) {
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
            <Text
              key={`${part}-${index}`}
            >
              {part}
            </Text>
          );
        }
      )}
    </Text>
  );
}

/*
|--------------------------------------------------------------------------
| PRODUCTION COLUMNS
|--------------------------------------------------------------------------
*/

function getColumns(
  briefFor
) {
  if (
    briefFor ===
    'creator'
  ) {
    return [
      {
        key: 'creatorVO',
        label: 'VO',
        width: '44%',
      },

      {
        key: 'creatorBrief',
        label: 'Creator Brief',
        width: '56%',
      },
    ];
  }

  if (
    briefFor ===
    'editor'
  ) {
    return [
      {
        key: 'editorVO',
        label: 'VO',
        width: '44%',
      },

      {
        key: 'editorBrief',
        label: 'Editor Brief',
        width: '56%',
      },
    ];
  }

  return [
    {
      key: 'creatorVO',
      label: 'Creator VO',
      width: '22%',
    },

    {
      key: 'creatorBrief',
      label: 'Creator Brief',
      width: '28%',
    },

    {
      key: 'editorVO',
      label: 'Editor VO',
      width: '22%',
    },

    {
      key: 'editorBrief',
      label: 'Editor Brief',
      width: '28%',
    },
  ];
}

/*
|--------------------------------------------------------------------------
| QUICK VIEW
|--------------------------------------------------------------------------
*/

function QuickView({
  data,
}) {
  return (
    <View style={styles.section}>
      <View
        style={
          styles.sectionHeadingRow
        }
      >
        <Text
          style={
            styles.sectionIndex
          }
        >
          01
        </Text>

        <Text
          style={
            styles.sectionTitle
          }
        >
          Quick View
        </Text>
      </View>

      <View
        style={
          styles.quickGrid
        }
      >
        {QUICK_FIELDS.map(
          ([
            label,
            key,
          ]) => (
            <View
              key={key}
              style={
                styles.quickCard
              }
            >
              <Text
                style={
                  styles.quickLabel
                }
              >
                {label}
              </Text>

              <Text
                style={
                  styles.quickValue
                }
              >
                {
                  safeValue(
                    data[key]
                  )
                }
              </Text>
            </View>
          )
        )}
      </View>

      <View
        style={
          styles.notesGrid
        }
      >
        {(
          data.briefFor ===
            'creator' ||
          data.briefFor ===
            'both'
        ) && (
          <View
            style={
              styles.notesCard
            }
          >
            <Text
              style={
                styles.quickLabel
              }
            >
              {
                getCreatorNotesLabel(
                  data
                )
              }
            </Text>

            <View
              style={
                styles.notesText
              }
            >
              <LinkedPdfText
                text={
                  data.creatorNotes
                }
              />
            </View>
          </View>
        )}

        {(
          data.briefFor ===
            'editor' ||
          data.briefFor ===
            'both'
        ) && (
          <View
            style={
              styles.notesCard
            }
          >
            <Text
              style={
                styles.quickLabel
              }
            >
              {
                getEditorNotesLabel(
                  data
                )
              }
            </Text>

            <View
              style={
                styles.notesText
              }
            >
              <LinkedPdfText
                text={
                  data.editorNotes
                }
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

/*
|--------------------------------------------------------------------------
| PRODUCTION TABLE
|--------------------------------------------------------------------------
*/

function ProductionTable({
  data,
}) {
  const columns =
    getColumns(
      data.briefFor
    );

  const audience =
    data.briefFor ===
    'both'
      ? 'Creator + Editor'
      : data.briefFor ===
          'creator'
        ? 'Creator'
        : 'Editor';

  return (
    <View style={styles.section}>
      <View
        style={
          styles.sectionHeadingRow
        }
      >
        <Text
          style={
            styles.sectionIndex
          }
        >
          02
        </Text>

        <Text
          style={
            styles.sectionTitle
          }
        >
          Production Direction
        </Text>
      </View>

      <View
        style={
          styles.audienceStrip
        }
      >
        <Text
          style={
            styles.audienceLabel
          }
        >
          BRIEF FOR
        </Text>

        <Text
          style={
            styles.audienceValue
          }
        >
          {audience}
        </Text>
      </View>

      <View
        style={
          styles.table
        }
      >
        <View
          style={
            styles.tableHeader
          }
        >
          {columns.map(
            (
              column,
              index
            ) => (
              <Text
                key={
                  column.key
                }
                style={[
                  styles.tableHeaderCell,

                  {
                    width:
                      column.width,

                    borderRight:
                      index ===
                      columns.length -
                        1
                        ? '0 solid transparent'
                        : '1 solid #314159',
                  },
                ]}
              >
                {
                  column.label
                }
              </Text>
            )
          )}
        </View>

        {data.rows.map(
          (
            row,
            rowIndex
          ) => (
            <View
              key={
                row.id ||
                rowIndex
              }
              style={
                styles.tableRow
              }
              wrap={false}
            >
              {columns.map(
                (
                  column,
                  columnIndex
                ) => (
                  <View
                    key={
                      column.key
                    }
                    style={[
                      styles.tableCell,

                      {
                        width:
                          column.width,

                        borderRight:
                          columnIndex ===
                          columns.length -
                            1
                            ? '0 solid transparent'
                            : `1 solid ${COLORS.line}`,
                      },
                    ]}
                  >
                    <Text
                      style={
                        styles.rowNumber
                      }
                    >
                      {String(
                        rowIndex +
                          1
                      ).padStart(
                        2,
                        '0'
                      )}
                    </Text>

                    <LinkedPdfText
                      text={
                        row[
                          column.key
                        ]
                      }
                    />
                  </View>
                )
              )}
            </View>
          )
        )}
      </View>
    </View>
  );
}

/*
|--------------------------------------------------------------------------
| DOCUMENT
|--------------------------------------------------------------------------
*/

export default function BriefPDF({
  data,
}) {
  const isBoth =
    data.briefFor ===
    'both';

  return (
    <Document
      title={
        safeValue(
          data.title,
          'Creative Production Brief'
        )
      }
      author="Fadel"
      subject="Creative Production Brief"
    >
      <Page
        size="A4"
        orientation={
          isBoth
            ? 'landscape'
            : 'portrait'
        }
        style={
          styles.page
        }
        wrap
      >
        {/* HERO */}

        <View
          style={
            styles.hero
          }
        >
          <View
            style={
              styles.heroTop
            }
          >
            <Text
              style={
                styles.brand
              }
            >
              Fadel
              <Text
                style={
                  styles.brandDot
                }
              >
                .
              </Text>
            </Text>

            <Text
              style={
                styles.eyebrow
              }
            >
              CREATIVE PRODUCTION BRIEF
            </Text>
          </View>

          <Text
            style={
              styles.title
            }
          >
            {
              safeValue(
                data.title,
                'Untitled Creative'
              )
            }
          </Text>

          <Text
            style={
              styles.heroMeta
            }
          >
            Strategic direction
            translated into clear
            production instructions.
          </Text>
        </View>

        {/* QUICK VIEW */}

        <QuickView
          data={data}
        />

        {/* PRODUCTION */}

        <ProductionTable
          data={data}
        />

        {/* FOOTER */}

        <View
          style={
            styles.footer
          }
        >
          <Text
            style={
              styles.footerText
            }
          >
            CREATIVE STRATEGY OP /
            BRIEFING SYSTEM
          </Text>

          <Text
            style={
              styles.footerBrand
            }
          >
            FADEL.
          </Text>
        </View>
      </Page>
    </Document>
  );
}