// src/components/roadmap/brief-builder/briefDocx.js

import {
  AlignmentType,
  Document,
  ExternalHyperlink,
  PageOrientation,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';

/*
|--------------------------------------------------------------------------
| CONSTANTS
|--------------------------------------------------------------------------
*/

const URL_REGEX =
  /(https?:\/\/[^\s]+)/gi;

/*
|--------------------------------------------------------------------------
| A4 DIMENSIONS IN TWIPS
|--------------------------------------------------------------------------
|
| Word/DOCX table-grid widths use DXA / twips.
|
| A4 portrait:
| 11906 x 16838 twips
|
| A4 landscape:
| 16838 x 11906 twips
|
*/

const A4_PORTRAIT_WIDTH =
  11906;

const A4_PORTRAIT_HEIGHT =
  16838;

const A4_LANDSCAPE_WIDTH =
  16838;

const A4_LANDSCAPE_HEIGHT =
  11906;

/*
|--------------------------------------------------------------------------
| PAGE MARGINS
|--------------------------------------------------------------------------
*/

const PAGE_MARGIN_LEFT =
  480;

const PAGE_MARGIN_RIGHT =
  480;

const PAGE_MARGIN_TOP =
  600;

const PAGE_MARGIN_BOTTOM =
  600;

/*
|--------------------------------------------------------------------------
| BASIC HELPERS
|--------------------------------------------------------------------------
*/

const clean = (
  value,
  fallback = '—'
) => {
  const text =
    String(
      value ?? ''
    ).trim();

  return (
    text ||
    fallback
  );
};

const getAudienceLabel = (
  briefFor
) => {
  if (
    briefFor ===
    'creator'
  ) {
    return 'Creator';
  }

  if (
    briefFor ===
    'editor'
  ) {
    return 'Editor';
  }

  return 'Creator + Editor';
};

/*
|--------------------------------------------------------------------------
| PAGE WIDTH
|--------------------------------------------------------------------------
*/

function getUsablePageWidth(
  briefFor
) {
  const pageWidth =
    briefFor ===
    'both'
      ? A4_LANDSCAPE_WIDTH
      : A4_PORTRAIT_WIDTH;

  return (
    pageWidth -
    PAGE_MARGIN_LEFT -
    PAGE_MARGIN_RIGHT
  );
}

/*
|--------------------------------------------------------------------------
| PRODUCTION COLUMN RATIOS
|--------------------------------------------------------------------------
*/

function getColumns(
  briefFor,
  tableWidth
) {
  /*
  |--------------------------------------------------------------------------
  | CREATOR ONLY
  | 50 / 50
  |--------------------------------------------------------------------------
  */

  if (
    briefFor ===
    'creator'
  ) {
    const half =
      Math.floor(
        tableWidth /
          2
      );

    return [
      {
        key:
          'creatorVO',

        label:
          'VO',

        width:
          half,
      },

      {
        key:
          'creatorBrief',

        label:
          'Creator Brief',

        width:
          tableWidth -
          half,
      },
    ];
  }

  /*
  |--------------------------------------------------------------------------
  | EDITOR ONLY
  | 50 / 50
  |--------------------------------------------------------------------------
  */

  if (
    briefFor ===
    'editor'
  ) {
    const half =
      Math.floor(
        tableWidth /
          2
      );

    return [
      {
        key:
          'editorVO',

        label:
          'VO',

        width:
          half,
      },

      {
        key:
          'editorBrief',

        label:
          'Editor Brief',

        width:
          tableWidth -
          half,
      },
    ];
  }

  /*
  |--------------------------------------------------------------------------
  | CREATOR + EDITOR
  | 25 / 25 / 25 / 25
  |--------------------------------------------------------------------------
  */

  const quarter =
    Math.floor(
      tableWidth /
        4
    );

  return [
    {
      key:
        'creatorVO',

      label:
        'Creator VO',

      width:
        quarter,
    },

    {
      key:
        'creatorBrief',

      label:
        'Creator Brief',

      width:
        quarter,
    },

    {
      key:
        'editorVO',

      label:
        'Editor VO',

      width:
        quarter,
    },

    {
      key:
        'editorBrief',

      label:
        'Editor Brief',

      width:
        tableWidth -
        quarter * 3,
    },
  ];
}

/*
|--------------------------------------------------------------------------
| CLICKABLE LINKS
|--------------------------------------------------------------------------
*/

function createLinkedRuns(
  value,
  options = {}
) {
  const text =
    clean(
      value
    );

  const parts =
    text.split(
      URL_REGEX
    );

  return parts.map(
    (
      part
    ) => {
      if (
        /^https?:\/\//i.test(
          part
        )
      ) {
        return new ExternalHyperlink({
          link:
            part,

          children: [
            new TextRun({
              text:
                part,

              style:
                'Hyperlink',

              color:
                '007B91',

              underline:
                {},

              size:
                options.size ??
                18,
            }),
          ],
        });
      }

      return new TextRun({
        text:
          part,

        size:
          options.size ??
          18,

        color:
          options.color ??
          '334154',

        bold:
          options.bold ??
          false,
      });
    }
  );
}

/*
|--------------------------------------------------------------------------
| SECTION HEADING
|--------------------------------------------------------------------------
*/

function createSectionHeading(
  number,
  title
) {
  return new Paragraph({
    spacing: {
      before:
        180,

      after:
        150,
    },

    children: [
      new TextRun({
        text:
          `${number}  `,

        bold:
          true,

        size:
          16,

        color:
          '00AFC0',
      }),

      new TextRun({
        text:
          title,

        bold:
          true,

        size:
          24,

        color:
          '0B1523',
      }),
    ],
  });
}

/*
|--------------------------------------------------------------------------
| QUICK VIEW
|--------------------------------------------------------------------------
|
| EXACT DOCX WIDTH:
|
| 20% LABEL
| 80% VALUE
|
*/

function createQuickViewTable(
  data,
  tableWidth
) {
  const labelWidth =
    Math.round(
      tableWidth *
        0.2
    );

  const valueWidth =
    tableWidth -
    labelWidth;

  const fields = [
    [
      'Persona',
      data.persona,
    ],

    [
      'Sub-Persona',
      data.subPersona,
    ],

    [
      'Awareness Level',
      data.awarenessLevel,
    ],

    [
      'Angle',
      data.angle,
    ],

    [
      'Estimated Duration',
      data.estimatedDuration,
    ],

    [
      'Hook',
      data.hook,
    ],

    [
      'Creative Notes',
      data.creativeNotes,
    ],
  ];

  const createLabelCell =
    (
      label
    ) =>
      new TableCell({
        width: {
          size:
            labelWidth,

          type:
            WidthType.DXA,
        },

        shading: {
          fill:
            'EEF2F6',
        },

        margins: {
          top:
            100,

          bottom:
            100,

          left:
            110,

          right:
            110,
        },

        children: [
          new Paragraph({
            children: [
              new TextRun({
                text:
                  label.toUpperCase(),

                bold:
                  true,

                size:
                  14,

                color:
                  '68758A',
              }),
            ],
          }),
        ],
      });

  const createValueCell =
    (
      value
    ) =>
      new TableCell({
        width: {
          size:
            valueWidth,

          type:
            WidthType.DXA,
        },

        margins: {
          top:
            100,

          bottom:
            100,

          left:
            120,

          right:
            120,
        },

        children: [
          new Paragraph({
            children:
              createLinkedRuns(
                value,
                {
                  size:
                    17,

                  color:
                    '172536',
                }
              ),
          }),
        ],
      });

  return new Table({
    width: {
      size:
        tableWidth,

      type:
        WidthType.DXA,
    },

    layout:
      TableLayoutType.FIXED,

    /*
    |--------------------------------------------------------------------------
    | IMPORTANT
    |--------------------------------------------------------------------------
    |
    | These are REAL Word grid widths in twips.
    | NOT percentages.
    |
    */

    columnWidths: [
      labelWidth,
      valueWidth,
    ],

    rows:
      fields.map(
        ([
          label,
          value,
        ]) =>
          new TableRow({
            children: [
              createLabelCell(
                label
              ),

              createValueCell(
                value
              ),
            ],
          })
      ),
  });
}

/*
|--------------------------------------------------------------------------
| PRODUCTION HEADER CELL
|--------------------------------------------------------------------------
*/

function createHeaderCell(
  label,
  width
) {
  return new TableCell({
    width: {
      size:
        width,

      type:
        WidthType.DXA,
    },

    shading: {
      fill:
        '0B1523',
    },

    margins: {
      top:
        110,

      bottom:
        110,

      left:
        110,

      right:
        110,
    },

    children: [
      new Paragraph({
        children: [
          new TextRun({
            text:
              label,

            bold:
              true,

            size:
              15,

            color:
              'FFFFFF',
          }),
        ],
      }),
    ],
  });
}

/*
|--------------------------------------------------------------------------
| PRODUCTION BODY CELL
|--------------------------------------------------------------------------
*/

function createBodyCell(
  value,
  rowIndex,
  width
) {
  return new TableCell({
    width: {
      size:
        width,

      type:
        WidthType.DXA,
    },

    margins: {
      top:
        110,

      bottom:
        130,

      left:
        110,

      right:
        110,
    },

    children: [
      new Paragraph({
        spacing: {
          after:
            60,
        },

        children: [
          new TextRun({
            text:
              String(
                rowIndex +
                  1
              ).padStart(
                2,
                '0'
              ),

            bold:
              true,

            size:
              12,

            color:
              '00AFC0',
          }),
        ],
      }),

      new Paragraph({
        children:
          createLinkedRuns(
            value,
            {
              size:
                16,

              color:
                '334154',
            }
          ),
      }),
    ],
  });
}

/*
|--------------------------------------------------------------------------
| PRODUCTION TABLE
|--------------------------------------------------------------------------
*/

function createProductionTable(
  data,
  tableWidth
) {
  const columns =
    getColumns(
      data.briefFor,
      tableWidth
    );

  const rows =
    Array.isArray(
      data.rows
    ) &&
    data.rows.length >
      0
      ? data.rows
      : [
          {
            creatorVO:
              '',

            creatorBrief:
              '',

            editorVO:
              '',

            editorBrief:
              '',
          },
        ];

  const columnWidths =
    columns.map(
      (
        column
      ) =>
        column.width
    );

  return new Table({
    /*
    |--------------------------------------------------------------------------
    | FORCE FULL PAGE WIDTH
    |--------------------------------------------------------------------------
    */

    width: {
      size:
        tableWidth,

      type:
        WidthType.DXA,
    },

    layout:
      TableLayoutType.FIXED,

    /*
    |--------------------------------------------------------------------------
    | REAL TWIP WIDTHS
    |--------------------------------------------------------------------------
    */

    columnWidths,

    rows: [
      new TableRow({
        tableHeader:
          true,

        children:
          columns.map(
            (
              column
            ) =>
              createHeaderCell(
                column.label,
                column.width
              )
          ),
      }),

      ...rows.map(
        (
          row,
          rowIndex
        ) =>
          new TableRow({
            children:
              columns.map(
                (
                  column
                ) =>
                  createBodyCell(
                    row[
                      column.key
                    ],

                    rowIndex,

                    column.width
                  )
              ),
          })
      ),
    ],
  });
}

/*
|--------------------------------------------------------------------------
| GENERATE DOCX
|--------------------------------------------------------------------------
*/

export async function generateBriefDocx(
  data
) {
  if (!data) {
    throw new Error(
      'No brief data was provided.'
    );
  }

  const both =
    data.briefFor ===
    'both';

  /*
  |--------------------------------------------------------------------------
  | REAL AVAILABLE WIDTH
  |--------------------------------------------------------------------------
  */

  const tableWidth =
    getUsablePageWidth(
      data.briefFor
    );

  const document =
    new Document({
      creator:
        'Fadel',

      title:
        clean(
          data.title,
          'Creative Production Brief'
        ),

      description:
        'Creative production brief generated from Creative Strategy OP.',

      styles: {
        default: {
          document: {
            run: {
              font:
                'Arial',

              size:
                18,

              color:
                '334154',
            },

            paragraph: {
              spacing: {
                line:
                  276,
              },
            },
          },
        },
      },

      sections: [
        {
          properties: {
            /*
            |--------------------------------------------------------------------------
            | EXPLICIT A4 PAGE SIZE
            |--------------------------------------------------------------------------
            */

            page: {
              size: {
                width:
                  both
                    ? A4_LANDSCAPE_WIDTH
                    : A4_PORTRAIT_WIDTH,

                height:
                  both
                    ? A4_LANDSCAPE_HEIGHT
                    : A4_PORTRAIT_HEIGHT,

                orientation:
                  both
                    ? PageOrientation.LANDSCAPE
                    : PageOrientation.PORTRAIT,
              },

              margin: {
                top:
                  PAGE_MARGIN_TOP,

                right:
                  PAGE_MARGIN_RIGHT,

                bottom:
                  PAGE_MARGIN_BOTTOM,

                left:
                  PAGE_MARGIN_LEFT,
              },
            },
          },

          children: [
            /*
            |--------------------------------------------------------------------------
            | BRAND
            |--------------------------------------------------------------------------
            */

            new Paragraph({
              alignment:
                AlignmentType.CENTER,

              spacing: {
                after:
                  70,
              },

              children: [
                new TextRun({
                  text:
                    'FADEL.',

                  bold:
                    true,

                  size:
                    26,

                  color:
                    '0B1523',
                }),
              ],
            }),

            /*
            |--------------------------------------------------------------------------
            | DOCUMENT TYPE
            |--------------------------------------------------------------------------
            */

            new Paragraph({
              alignment:
                AlignmentType.CENTER,

              spacing: {
                after:
                  80,
              },

              children: [
                new TextRun({
                  text:
                    'CREATIVE PRODUCTION BRIEF',

                  bold:
                    true,

                  size:
                    17,

                  color:
                    '00AFC0',
                }),
              ],
            }),

            /*
            |--------------------------------------------------------------------------
            | TITLE
            |--------------------------------------------------------------------------
            */

            new Paragraph({
              alignment:
                AlignmentType.CENTER,

              spacing: {
                after:
                  240,
              },

              children: [
                new TextRun({
                  text:
                    clean(
                      data.title,
                      'Untitled Creative'
                    ),

                  bold:
                    true,

                  size:
                    32,

                  color:
                    '0B1523',
                }),
              ],
            }),

            /*
            |--------------------------------------------------------------------------
            | QUICK VIEW
            |--------------------------------------------------------------------------
            */

            createSectionHeading(
              '01',
              'Quick View'
            ),

            createQuickViewTable(
              data,
              tableWidth
            ),

            /*
            |--------------------------------------------------------------------------
            | RECIPIENT
            |--------------------------------------------------------------------------
            */

            new Paragraph({
              spacing: {
                before:
                  160,

                after:
                  190,
              },

              children: [
                new TextRun({
                  text:
                    'BRIEF FOR  ',

                  bold:
                    true,

                  size:
                    14,

                  color:
                    '68758A',
                }),

                new TextRun({
                  text:
                    getAudienceLabel(
                      data.briefFor
                    ),

                  bold:
                    true,

                  size:
                    18,

                  color:
                    '0B1523',
                }),
              ],
            }),

            /*
            |--------------------------------------------------------------------------
            | PRODUCTION DIRECTION
            |--------------------------------------------------------------------------
            */

            createSectionHeading(
              '02',
              'Production Direction'
            ),

            createProductionTable(
              data,
              tableWidth
            ),

            /*
            |--------------------------------------------------------------------------
            | FOOTER
            |--------------------------------------------------------------------------
            */

            new Paragraph({
              alignment:
                AlignmentType.RIGHT,

              spacing: {
                before:
                  260,
              },

              children: [
                new TextRun({
                  text:
                    'CREATIVE STRATEGY OP / BRIEFING SYSTEM',

                  size:
                    12,

                  color:
                    '8D98A7',
                }),
              ],
            }),
          ],
        },
      ],
    });

  return Packer.toBlob(
    document
  );
}