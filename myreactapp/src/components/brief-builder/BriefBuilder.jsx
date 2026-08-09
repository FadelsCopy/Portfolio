import {
  Fragment,
  useMemo,
  useState,
} from 'react';

import {
  pdf,
} from '@react-pdf/renderer';

import BriefPDF from './BriefPDF';
import {
  generateBriefDocx,
} from './briefDocx';

/*
|--------------------------------------------------------------------------
| ROW FACTORY
|--------------------------------------------------------------------------
*/

const createRow = () => ({
  id: `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`,

  creatorVO: '',
  creatorBrief: '',
  editorVO: '',
  editorBrief: '',
});

/*
|--------------------------------------------------------------------------
| INITIAL DATA
|--------------------------------------------------------------------------
*/

const initialData = {
  title: '',

  persona: '',
  subPersona: '',
  awarenessLevel: '',
  angle: '',

  estimatedDuration: '',
  hook: '',

  creativeNotes: '',

  briefFor: 'both',

  output: 'pdf',

  rows: [
    createRow(),
  ],
};

/*
|--------------------------------------------------------------------------
| QUICK VIEW
|--------------------------------------------------------------------------
*/

const QUICK_FIELDS = [
  {
    key: 'persona',

    label:
      'Persona',

    placeholder:
      'Who is the core customer?',

    required: true,
  },

  {
    key:
      'subPersona',

    label:
      'Sub-Persona',

    placeholder:
      'Which specific segment?',

    required: false,
  },

  {
    key:
      'awarenessLevel',

    label:
      'Awareness Level',

    placeholder:
      'Unaware, problem-aware, solution-aware…',

    required: true,
  },

  {
    key:
      'angle',

    label:
      'Angle',

    placeholder:
      'What is the strategic angle?',

    required: true,
  },

  {
    key:
      'estimatedDuration',

    label:
      'Estimated Duration',

    placeholder:
      'e.g. 30–45 sec',

    required: true,
  },

  {
    key:
      'hook',

    label:
      'Hook',

    placeholder:
      'What is the opening hook?',

    required: true,
  },
];

/*
|--------------------------------------------------------------------------
| URL DETECTION
|--------------------------------------------------------------------------
*/

const URL_REGEX =
  /(https?:\/\/[^\s]+)/gi;

/*
|--------------------------------------------------------------------------
| FILE HELPERS
|--------------------------------------------------------------------------
*/

function slugify(
  value
) {
  return (
    String(
      value ||
        'creative-brief'
    )
      .trim()
      .toLowerCase()
      .replace(
        /[^a-z0-9]+/g,
        '-'
      )
      .replace(
        /^-+|-+$/g,
        ''
      ) ||
    'creative-brief'
  );
}

function downloadBlob(
  blob,
  fileName
) {
  const url =
    URL.createObjectURL(
      blob
    );

  const anchor =
    document.createElement(
      'a'
    );

  anchor.href =
    url;

  anchor.download =
    fileName;

  document.body.appendChild(
    anchor
  );

  anchor.click();

  anchor.remove();

  window.setTimeout(
    () => {
      URL.revokeObjectURL(
        url
      );
    },
    1000
  );
}

/*
|--------------------------------------------------------------------------
| PRODUCTION COLUMNS
|--------------------------------------------------------------------------
*/

function getVisibleColumns(
  briefFor
) {
  if (
    briefFor ===
    'creator'
  ) {
    return [
      [
        'creatorVO',
        'VO',
      ],

      [
        'creatorBrief',
        'Creator Brief',
      ],
    ];
  }

  if (
    briefFor ===
    'editor'
  ) {
    return [
      [
        'editorVO',
        'VO',
      ],

      [
        'editorBrief',
        'Editor Brief',
      ],
    ];
  }

  return [
    [
      'creatorVO',
      'Creator VO',
    ],

    [
      'creatorBrief',
      'Creator Brief',
    ],

    [
      'editorVO',
      'Editor VO',
    ],

    [
      'editorBrief',
      'Editor Brief',
    ],
  ];
}

/*
|--------------------------------------------------------------------------
| VALIDATION
|--------------------------------------------------------------------------
*/

const hasText = (
  value
) => {
  return Boolean(
    String(
      value ?? ''
    ).trim()
  );
};

function isCompleteRow(
  row,
  briefFor
) {
  if (
    briefFor ===
    'creator'
  ) {
    return (
      hasText(
        row.creatorVO
      ) &&
      hasText(
        row.creatorBrief
      )
    );
  }

  if (
    briefFor ===
    'editor'
  ) {
    return (
      hasText(
        row.editorVO
      ) &&
      hasText(
        row.editorBrief
      )
    );
  }

  return (
    hasText(
      row.creatorVO
    ) &&
    hasText(
      row.creatorBrief
    ) &&
    hasText(
      row.editorVO
    ) &&
    hasText(
      row.editorBrief
    )
  );
}

function getValidationErrors(
  data
) {
  const missing = [];

  if (
    !hasText(
      data.title
    )
  ) {
    missing.push(
      'Creative Title'
    );
  }

  if (
    !hasText(
      data.persona
    )
  ) {
    missing.push(
      'Persona'
    );
  }

  if (
    !hasText(
      data.awarenessLevel
    )
  ) {
    missing.push(
      'Awareness Level'
    );
  }

  if (
    !hasText(
      data.angle
    )
  ) {
    missing.push(
      'Angle'
    );
  }

  if (
    !hasText(
      data.estimatedDuration
    )
  ) {
    missing.push(
      'Estimated Duration'
    );
  }

  if (
    !hasText(
      data.hook
    )
  ) {
    missing.push(
      'Hook'
    );
  }

  if (
    !hasText(
      data.creativeNotes
    )
  ) {
    missing.push(
      'Creative Notes'
    );
  }

  const hasFullRow =
    Array.isArray(
      data.rows
    ) &&
    data.rows.some(
      (row) =>
        isCompleteRow(
          row,
          data.briefFor
        )
    );

  if (
    !hasFullRow
  ) {
    if (
      data.briefFor ===
      'creator'
    ) {
      missing.push(
        '1 complete row: VO + Creator Brief'
      );
    } else if (
      data.briefFor ===
      'editor'
    ) {
      missing.push(
        '1 complete row: VO + Editor Brief'
      );
    } else {
      missing.push(
        '1 complete row: Creator VO + Creator Brief + Editor VO + Editor Brief'
      );
    }
  }

  return missing;
}

/*
|--------------------------------------------------------------------------
| LINKED TEXT
|--------------------------------------------------------------------------
*/

function LinkedText({
  text,
}) {
  const value =
    String(
      text || ''
    );

  if (!value) {
    return '—';
  }

  const parts =
    value.split(
      URL_REGEX
    );

  return parts.map(
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
          <a
            key={`${part}-${index}`}
            href={part}
            target="_blank"
            rel="noreferrer"
            className="brief-builder-inline-link"
          >
            {part}
          </a>
        );
      }

      return (
        <Fragment
          key={`${part}-${index}`}
        >
          {part}
        </Fragment>
      );
    }
  );
}

/*
|--------------------------------------------------------------------------
| TITLE FIELD
|--------------------------------------------------------------------------
*/

function TitleField({
  value,
  onChange,
}) {
  return (
    <section className="brief-builder-panel brief-builder-title-panel">
      <div className="brief-builder-section-heading">
        <span>
          00
        </span>

        <div>
          <strong>
            Creative Title
          </strong>

          <p>
            Give this brief a
            clear name.
          </p>
        </div>
      </div>

      <label className="brief-builder-field brief-builder-title-field">
        <span>
          TITLE *
        </span>

        <input
          type="text"
          value={value}
          placeholder="e.g. Founder Mechanism VSL — Hook Test"
          onChange={(
            event
          ) =>
            onChange(
              event.target
                .value
            )
          }
        />
      </label>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| QUICK VIEW FORM
|--------------------------------------------------------------------------
*/

function QuickViewForm({
  data,
  setField,
}) {
  return (
    <section className="brief-builder-panel">
      <div className="brief-builder-section-heading">
        <span>
          01
        </span>

        <div>
          <strong>
            Quick View
          </strong>

          <p>
            Lock the strategic
            context before
            production.
          </p>
        </div>
      </div>

      <div className="brief-builder-field-grid">
        {QUICK_FIELDS.map(
          (
            field
          ) => (
            <label
              key={
                field.key
              }
              className="brief-builder-field"
            >
              <span>
                {
                  field.label
                }
                {
                  field.required
                    ? ' *'
                    : ''
                }
              </span>

              <input
                type="text"
                value={
                  data[
                    field.key
                  ]
                }
                placeholder={
                  field.placeholder
                }
                onChange={(
                  event
                ) =>
                  setField(
                    field.key,
                    event
                      .target
                      .value
                  )
                }
              />
            </label>
          )
        )}
      </div>

      <label className="brief-builder-field brief-builder-notes-field">
        <span>
          Creative Notes *
        </span>

        <textarea
          value={
            data.creativeNotes
          }
          placeholder="Add the concept context, execution notes, strategic reminders, references, or anything the team needs to understand before production…"
          onChange={(
            event
          ) =>
            setField(
              'creativeNotes',
              event.target
                .value
            )
          }
        />
      </label>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| RECIPIENT
|--------------------------------------------------------------------------
*/

function RecipientSelector({
  value,
  onChange,
}) {
  const options = [
    [
      'creator',
      'Creator',
    ],

    [
      'editor',
      'Editor',
    ],

    [
      'both',
      'Both',
    ],
  ];

  return (
    <section className="brief-builder-panel">
      <div className="brief-builder-section-heading">
        <span>
          02
        </span>

        <div>
          <strong>
            Who is this brief
            for?
          </strong>

          <p>
            The production table
            changes automatically.
          </p>
        </div>
      </div>

      <div className="brief-builder-segmented">
        {options.map(
          ([
            key,
            label,
          ]) => (
            <button
              key={
                key
              }
              type="button"
              className={
                value ===
                key
                  ? 'is-active'
                  : ''
              }
              onClick={() =>
                onChange(
                  key
                )
              }
            >
              {label}
            </button>
          )
        )}
      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| PRODUCTION ROWS
|--------------------------------------------------------------------------
*/

function ProductionRows({
  data,
  updateRow,
  addRow,
  removeRow,
}) {
  const columns =
    getVisibleColumns(
      data.briefFor
    );

  return (
    <section className="brief-builder-panel">
      <div className="brief-builder-section-heading">
        <span>
          03
        </span>

        <div>
          <strong>
            Production Direction
          </strong>

          <p>
            At least one complete
            row is required.
            Reference URLs can be
            pasted directly.
          </p>
        </div>
      </div>

      <div
        className={`brief-builder-production-table is-${data.briefFor}`}
      >
        <div
          className="brief-builder-production-header"
          style={{
            gridTemplateColumns:
              `repeat(${columns.length}, minmax(0, 1fr))`,
          }}
        >
          {columns.map(
            ([
              ,
              label,
            ]) => (
              <span
                key={
                  label
                }
              >
                {label} *
              </span>
            )
          )}
        </div>

        <div className="brief-builder-production-body">
          {data.rows.map(
            (
              row,
              rowIndex
            ) => (
              <div
                key={
                  row.id
                }
                className="brief-builder-production-row"
              >
                <div className="brief-builder-production-row-top">
                  <span>
                    ROW{' '}
                    {String(
                      rowIndex +
                        1
                    ).padStart(
                      2,
                      '0'
                    )}
                  </span>

                  {data
                    .rows
                    .length >
                    1 && (
                    <button
                      type="button"
                      onClick={() =>
                        removeRow(
                          row.id
                        )
                      }
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div
                  className="brief-builder-production-inputs"
                  style={{
                    gridTemplateColumns:
                      `repeat(${columns.length}, minmax(0, 1fr))`,
                  }}
                >
                  {columns.map(
                    ([
                      key,
                      label,
                    ]) => (
                      <label
                        key={
                          key
                        }
                      >
                        <span>
                          {
                            label
                          }{' '}
                          *
                        </span>

                        <textarea
                          value={
                            row[
                              key
                            ]
                          }
                          placeholder={`Write ${label.toLowerCase()}… You can paste reference URLs directly.`}
                          onChange={(
                            event
                          ) =>
                            updateRow(
                              row.id,
                              key,
                              event
                                .target
                                .value
                            )
                          }
                        />
                      </label>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>

        <button
          type="button"
          className="brief-builder-add-row"
          onClick={
            addRow
          }
        >
          <span>
            +
          </span>

          Add VO / Brief Row
        </button>
      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| PREVIEW
|--------------------------------------------------------------------------
*/

function Preview({
  data,
}) {
  const columns =
    getVisibleColumns(
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
    <div className="brief-builder-preview-shell">
      <div className="brief-builder-preview-toolbar">
        <div>
          <span>
            LIVE PREVIEW
          </span>

          <strong>
            {data.output ===
            'pdf'
              ? 'PDF'
              : 'DOCX'}
          </strong>
        </div>

        <span>
          {audience}
        </span>
      </div>

      <div
        className={`brief-builder-paper ${
          data.briefFor ===
          'both'
            ? 'is-wide'
            : ''
        }`}
      >
        <header className="brief-builder-paper-hero">
          <div>
            <strong>
              Fadel.
            </strong>

            <span>
              CREATIVE
              PRODUCTION BRIEF
            </span>
          </div>

          <h2>
            {data.title ||
              'Untitled Creative'}
          </h2>

          <p>
            Strategic direction
            translated into clear
            production
            instructions.
          </p>
        </header>

        <section className="brief-builder-paper-section">
          <div className="brief-builder-paper-heading">
            <span>
              01
            </span>

            <strong>
              Quick View
            </strong>
          </div>

          <div className="brief-builder-paper-grid">
            {QUICK_FIELDS.map(
              (
                field
              ) => (
                <div
                  key={
                    field.key
                  }
                  className="brief-builder-paper-card"
                >
                  <span>
                    {
                      field.label
                    }
                  </span>

                  <strong>
                    {data[
                      field.key
                    ] ||
                      '—'}
                  </strong>
                </div>
              )
            )}
          </div>

          <div className="brief-builder-paper-notes">
            <span>
              CREATIVE NOTES
            </span>

            <p>
              <LinkedText
                text={
                  data.creativeNotes
                }
              />
            </p>
          </div>
        </section>

        <section className="brief-builder-paper-section">
          <div className="brief-builder-paper-heading">
            <span>
              02
            </span>

            <strong>
              Production
              Direction
            </strong>
          </div>

          <div className="brief-builder-paper-audience">
            <span>
              BRIEF FOR
            </span>

            <strong>
              {audience}
            </strong>
          </div>

          <div
            className="brief-builder-paper-table"
            style={{
              '--brief-columns':
                columns.length,
            }}
          >
            <div className="brief-builder-paper-table-head">
              {columns.map(
                ([
                  ,
                  label,
                ]) => (
                  <span
                    key={
                      label
                    }
                  >
                    {label}
                  </span>
                )
              )}
            </div>

            {data.rows.map(
              (
                row,
                rowIndex
              ) => (
                <div
                  key={
                    row.id
                  }
                  className="brief-builder-paper-table-row"
                >
                  {columns.map(
                    ([
                      key,
                    ]) => (
                      <div
                        key={
                          key
                        }
                      >
                        <span>
                          {String(
                            rowIndex +
                              1
                          ).padStart(
                            2,
                            '0'
                          )}
                        </span>

                        <p>
                          <LinkedText
                            text={
                              row[
                                key
                              ]
                            }
                          />
                        </p>
                      </div>
                    )
                  )}
                </div>
              )
            )}
          </div>
        </section>

        <footer className="brief-builder-paper-footer">
          <span>
            CREATIVE STRATEGY OP
            / BRIEFING SYSTEM
          </span>

          <strong>
            FADEL.
          </strong>
        </footer>
      </div>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/

export default function BriefBuilder({
  onClose,
}) {
  const [
    data,
    setData,
  ] =
    useState(
      initialData
    );

  const [
    isGeneratingPdf,
    setIsGeneratingPdf,
  ] =
    useState(false);

  const [
    isGeneratingDocx,
    setIsGeneratingDocx,
  ] =
    useState(false);

  const [
    exportError,
    setExportError,
  ] =
    useState('');

  const validationErrors =
    useMemo(
      () =>
        getValidationErrors(
          data
        ),
      [data]
    );

  const canGenerate =
    validationErrors.length ===
    0;

  const fileBaseName =
    useMemo(
      () =>
        slugify(
          data.title
        ),
      [data.title]
    );

  const setField = (
    key,
    value
  ) => {
    setData(
      (
        current
      ) => ({
        ...current,

        [key]:
          value,
      })
    );

    setExportError(
      ''
    );
  };

  const updateRow = (
    rowId,
    key,
    value
  ) => {
    setData(
      (
        current
      ) => ({
        ...current,

        rows:
          current.rows.map(
            (
              row
            ) =>
              row.id ===
              rowId
                ? {
                    ...row,

                    [key]:
                      value,
                  }
                : row
          ),
      })
    );

    setExportError(
      ''
    );
  };

  const addRow = () => {
    setData(
      (
        current
      ) => ({
        ...current,

        rows: [
          ...current.rows,

          createRow(),
        ],
      })
    );
  };

  const removeRow = (
    rowId
  ) => {
    setData(
      (
        current
      ) => ({
        ...current,

        rows:
          current.rows.filter(
            (
              row
            ) =>
              row.id !==
              rowId
          ),
      })
    );
  };

  const validateBeforeExport =
    () => {
      const errors =
        getValidationErrors(
          data
        );

      if (
        errors.length >
        0
      ) {
        setExportError(
          `Complete the required fields: ${errors.join(
            ', '
          )}.`
        );

        return false;
      }

      setExportError(
        ''
      );

      return true;
    };

  /*
  |--------------------------------------------------------------------------
  | PDF
  |--------------------------------------------------------------------------
  */

  const handlePdfDownload =
    async () => {
      if (
        !validateBeforeExport()
      ) {
        return;
      }

      try {
        setIsGeneratingPdf(
          true
        );

        const blob =
          await pdf(
            <BriefPDF
              data={
                data
              }
            />
          ).toBlob();

        downloadBlob(
          blob,

          `${fileBaseName}-creative-brief.pdf`
        );
      } catch (
        error
      ) {
        console.error(
          error
        );

        setExportError(
          'The PDF could not be generated. Check the browser console for the error.'
        );
      } finally {
        setIsGeneratingPdf(
          false
        );
      }
    };

  /*
  |--------------------------------------------------------------------------
  | DOCX
  |--------------------------------------------------------------------------
  */

  const handleDocxDownload =
    async () => {
      if (
        !validateBeforeExport()
      ) {
        return;
      }

      try {
        setIsGeneratingDocx(
          true
        );

        const blob =
          await generateBriefDocx(
            data
          );

        downloadBlob(
          blob,

          `${fileBaseName}-creative-brief.docx`
        );
      } catch (
        error
      ) {
        console.error(
          error
        );

        setExportError(
          'The DOCX could not be generated. Check the browser console for the error.'
        );
      } finally {
        setIsGeneratingDocx(
          false
        );
      }
    };

  return (
    <div
      className="brief-builder-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Creative brief builder"
    >
      <div className="brief-builder-background" />

      <header className="brief-builder-topbar">
        <div className="brief-builder-topbar-copy">
          <span>
            CREATIVE BRIEFING /
            PRODUCTION TOOL
          </span>

          <div>
            <h1>
              Brief Builder
            </h1>

            <p>
              Turn the strategic
              concept into a clean
              production handoff.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="brief-builder-close"
          onClick={
            onClose
          }
          aria-label="Close brief builder"
        >
          <span>
            Close
          </span>

          <strong>
            ×
          </strong>
        </button>
      </header>

      <main className="brief-builder-layout">
        <div className="brief-builder-form-scroll">
          <TitleField
            value={
              data.title
            }
            onChange={(
              value
            ) =>
              setField(
                'title',
                value
              )
            }
          />

          <QuickViewForm
            data={
              data
            }
            setField={
              setField
            }
          />

          <RecipientSelector
            value={
              data.briefFor
            }
            onChange={(
              briefFor
            ) =>
              setField(
                'briefFor',
                briefFor
              )
            }
          />

          <ProductionRows
            data={
              data
            }
            updateRow={
              updateRow
            }
            addRow={
              addRow
            }
            removeRow={
              removeRow
            }
          />

          <section className="brief-builder-panel brief-builder-export-panel">
            <div className="brief-builder-section-heading">
              <span>
                04
              </span>

              <div>
                <strong>
                  Export
                </strong>

                <p>
                  Complete all
                  required fields
                  before generating.
                </p>
              </div>
            </div>

            <div className="brief-builder-export-grid">
              <div className="brief-builder-output-picker">
                <span>
                  OUTPUT FORMAT
                </span>

                <div className="brief-builder-segmented">
                  <button
                    type="button"
                    className={
                      data.output ===
                      'pdf'
                        ? 'is-active'
                        : ''
                    }
                    onClick={() =>
                      setField(
                        'output',
                        'pdf'
                      )
                    }
                  >
                    PDF
                  </button>

                  <button
                    type="button"
                    className={
                      data.output ===
                      'docx'
                        ? 'is-active'
                        : ''
                    }
                    onClick={() =>
                      setField(
                        'output',
                        'docx'
                      )
                    }
                  >
                    DOCX
                  </button>
                </div>
              </div>

              <div className="brief-builder-generate-wrap">
                {data.output ===
                'pdf' ? (
                  <button
                    type="button"
                    className="brief-builder-generate"
                    onClick={
                      handlePdfDownload
                    }
                    disabled={
                      isGeneratingPdf
                    }
                  >
                    <span>
                      {isGeneratingPdf
                        ? 'Generating PDF…'
                        : 'Generate & Download'}
                    </span>

                    <strong>
                      ↓
                    </strong>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="brief-builder-generate"
                    onClick={
                      handleDocxDownload
                    }
                    disabled={
                      isGeneratingDocx
                    }
                  >
                    <span>
                      {isGeneratingDocx
                        ? 'Generating DOCX…'
                        : 'Generate & Download'}
                    </span>

                    <strong>
                      ↓
                    </strong>
                  </button>
                )}

                {!canGenerate &&
                  !exportError && (
                    <p className="brief-builder-error">
                      Required fields
                      are still
                      missing.
                    </p>
                  )}

                {exportError && (
                  <p className="brief-builder-error">
                    {exportError}
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>

        <aside className="brief-builder-preview">
          <Preview
            data={
              data
            }
          />
        </aside>
      </main>
    </div>
  );
}