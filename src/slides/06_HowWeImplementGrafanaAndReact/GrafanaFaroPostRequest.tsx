import { SlideLayout, codePaneThemes } from 'spectacle'
import Back from '../../assets/images/back.png'

const MultiCodeLayout = SlideLayout.MultiCodeLayout

export function GrafanaFaroPostRequest() {
  return (
    <>
      <MultiCodeLayout
        numColumns={2}
        backgroundImage={`url(${Back})`}
        title="Grafana Faro Envío de datos"
        titleProps={{ fontSize: '48px', textAlign: 'left' }}
        codeBlocks={[
          {
            language: 'json',
            description: 'Eventos',
            highlightRanges: [[3], [9]],
            theme: codePaneThemes.a11yDark,
            code: `
            "events": [
              {
                "name": "session_start",
                "domain": "browser",
                "attributes": {},
                "timestamp": "2023-09-10T08:36:46.977Z"
              },
              {
                "name": "view_changed",
                "domain": "browser",
                "attributes": {},
                "timestamp": "2023-09-10T08:36:46.977Z"
              }
            ]
        `,
          },
          {
            language: 'json',
            description: 'Logs',
            highlightRanges: [3, 4],
            theme: codePaneThemes.a11yDark,
            code: `
            "logs": [
              {
                "message": "Faro was initialized",
                "level": "log",
                "context": {},
                "timestamp": "2023-09-10T08:36:46.985Z"
              }
            ]
        `,
          },
          {
            language: 'json',
            description: 'Métricas',
            highlightRanges: [3, 5, 12],
            theme: codePaneThemes.a11yDark,
            code: `
            "measurements": [
              {
                "type": "web-vitals",
                "values": {
                  "ttfb": 172.80000000447035
                },
                "timestamp": "2023-09-10T08:36:47.088Z"
              },
              {
                "type": "web-vitals",
                "values": {
                  "fcp": 5918.30000000447
                },
                "timestamp": "2023-09-10T08:36:47.114Z"
              }
            ]
        `,
          },
        ]}
      ></MultiCodeLayout>
      <MultiCodeLayout
        backgroundImage={`url(${Back})`}
        title="Grafana Faro Envío de datos"
        titleProps={{ fontSize: '48px', textAlign: 'left' }}
        codeBlocks={[
          {
            language: 'json',
            description: 'Meta Sesión',
            highlightRanges: [2],
            theme: codePaneThemes.a11yDark,
            code: `
            "session": {
              "id": "{id_agent}"
            }
        `,
          },
          {
            language: 'json',
            description: 'Meta SDK',
            highlightRanges: [6, 10, 14, 18, 22, 26, 30],
            theme: codePaneThemes.a11yDark,
            code: `
            "sdk": {
              "name": "@grafana/faro-core",
              "version": "1.1.4",
              "integrations": [
                {
                  "name": "@grafana/faro-web-sdk:instrumentation-errors",
                  "version": "1.1.4"
                },
                {
                  "name": "@grafana/faro-web-sdk:instrumentation-web-vitals",
                  "version": "1.1.4"
                },
                {
                  "name": "@grafana/faro-web-sdk:instrumentation-session",
                  "version": "1.1.4"
                },
                {
                  "name": "@grafana/faro-web-sdk:instrumentation-view",
                  "version": "1.1.4"
                },
                {
                  "name": "@grafana/faro-web-sdk:instrumentation-console",
                  "version": "1.1.4"
                },
                {
                  "name": "@grafana/faro-web-tracing",
                  "version": "1.1.4"
                },
                {
                  "name": "@grafana/faro-react",
                  "version": "1.1.4"
                }
              ]
            }
        `,
          },
          {
            language: 'json',
            description: 'Meta App',
            highlightRanges: [2, 3, 4],
            theme: codePaneThemes.a11yDark,
            code: `
            "app": {
              "name": "agents",
              "version": " v 1.7.89",
              "environment": "production"
            }
        `,
          },
          {
            language: 'json',
            description: 'Meta View',
            highlightRanges: [2],
            theme: codePaneThemes.a11yDark,
            code: `
            "view": {
              "name": "default"
            }
        `,
          },
          {
            language: 'json',
            description: 'Meta Browser',
            highlightRanges: [2, 6],
            theme: codePaneThemes.a11yDark,
            code: `
            "browser": {
              "name": "Chrome",
              "version": "116.0.0.0",
              "os": "Mac OS 10.15.7",
              "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
              "language": "es-ES",
              "mobile": false,
              "brands": [
                {
                  "brand": "Chromium",
                  "version": "116"
                },
                {
                  "brand": "Not)A;Brand",
                  "version": "24"
                },
                {
                  "brand": "Google Chrome",
                  "version": "116"
                }
              ]
            }
        `,
          },
          {
            language: 'json',
            description: 'Meta Page',
            highlightRanges: [2],
            theme: codePaneThemes.a11yDark,
            code: `
            "page": {
              "url": "https://agents.masstack.com/mySale?brand=yoigo"
            }
        `,
          },
          {
            language: 'json',
            description: 'Meta User',
            highlightRanges: [2, 4],
            theme: codePaneThemes.a11yDark,
            code: `
            "user": {
              "id": "frank.gonzalezh@masmovil.com",
              "email": "frank.gonzalezh@masmovil.com",
              "username": "frank.gonzalezh-masmovil.com"
            }
        `,
          },
        ]}
      ></MultiCodeLayout>
      <MultiCodeLayout
        backgroundImage={`url(${Back})`}
        title="Grafana Faro Envío de datos"
        titleProps={{ fontSize: '48px', textAlign: 'left' }}
        codeBlocks={[
          {
            language: 'json',
            description: 'Trazas Resource Spans',
            highlightRanges: [
              [7, 10],
              [13, 16],
              [19, 22],
              [25, 28],
              [31, 34],
            ],
            theme: codePaneThemes.a11yDark,
            code: `
            "traces": {
              "resourceSpans": [
                {
                  "resource": {
                    "attributes": [
                      {
                        "key": "service.name",
                        "value": {
                          "stringValue": "agents"
                        }
                      },
                      {
                        "key": "telemetry.sdk.language",
                        "value": {
                          "stringValue": "webjs"
                        }
                      },
                      {
                        "key": "telemetry.sdk.name",
                        "value": {
                          "stringValue": "opentelemetry"
                        }
                      },
                      {
                        "key": "telemetry.sdk.version",
                        "value": {
                          "stringValue": "1.15.2"
                        }
                      },
                      {
                        "key": "service.version",
                        "value": {
                          "stringValue": " v 1.7.89"
                        }
                      }
                    ],
                    "droppedAttributesCount": 0
                  },
                }
              ]
            }
            `,
          },
          {
            language: 'json',
            description: 'Trazas Scope Spans',
            highlightRanges: [3, 11],
            theme: codePaneThemes.a11yDark,
            code: `
            "scopeSpans": [
              {
              "scope": {
                "name": "@opentelemetry/instrumentation-xml-http-request",
                "version": "0.41.2"
              },
              {
                "scope": {
                  "name": "@opentelemetry/instrumentation-fetch",
                  "version": "0.41.2"
              },
              "spans": [
                {
                  "traceId": "5e32109f6dc77bb9f618493d48cee8e6",
                  "spanId": "e17a2898e5371d5d",
                  "name": "GET",
                  "kind": 3,
                  "startTimeUnixNano": 1694335010303000000,
                  "endTimeUnixNano": 1694335011527000000,
                  "attributes": [
                    {
                      "key": "session_id",
                      "value": {
                        "stringValue": "w4EwbssgS8"
                      }
                    },
                    {
                      "key": "http.method",
                      "value": {
                        "stringValue": "GET"
                      }
                    },
                    {
                      "key": "http.url",
                      "value": {
                        "stringValue": "https://agents-api.sta.masstack.com/v1/customers-api/agents"
                      }
                    },
                    {
                      "key": "http.response_content_length",
                      "value": {
                        "intValue": 0
                      }
                    },
                    {
                      "key": "http.status_code",
                      "value": {
                        "intValue": 200
                      }
                    },
                    {
                      "key": "http.status_text",
                      "value": {
                        "stringValue": ""
                      }
                    },
                    {
                      "key": "http.host",
                      "value": {
                        "stringValue": "agents-api.sta.masstack.com"
                      }
                    },
                    {
                      "key": "http.scheme",
                      "value": {
                        "stringValue": "https"
                      }
                    },
                    {
                      "key": "http.user_agent",
                      "value": {
                        "stringValue": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
                      }
                    }
                  ],
                  "droppedAttributesCount": 0,
                  "events": [
                    {
                      "attributes": [],
                      "name": "open",
                      "timeUnixNano": 1694335010303300000,
                      "droppedAttributesCount": 0
                    },
                    {
                      "attributes": [],
                      "name": "send",
                      "timeUnixNano": 1694335010303600000,
                      "droppedAttributesCount": 0
                    },
                    {
                      "attributes": [],
                      "name": "fetchStart",
                      "timeUnixNano": 1694335010304200200,
                      "droppedAttributesCount": 0
                    },
                    {
                      "attributes": [],
                      "name": "domainLookupStart",
                      "timeUnixNano": 1694335001170600200,
                      "droppedAttributesCount": 0
                    },
                    {
                      "attributes": [],
                      "name": "domainLookupEnd",
                      "timeUnixNano": 1694335001170600200,
                      "droppedAttributesCount": 0
                    },
                    {
                      "attributes": [],
                      "name": "connectStart",
                      "timeUnixNano": 1694335001170600200,
                      "droppedAttributesCount": 0
                    },
                    {
                      "attributes": [],
                      "name": "secureConnectionStart",
                      "timeUnixNano": 1694335001170600200,
                      "droppedAttributesCount": 0
                    },
                    {
                      "attributes": [],
                      "name": "connectEnd",
                      "timeUnixNano": 1694335001170600200,
                      "droppedAttributesCount": 0
                    },
                    {
                      "attributes": [],
                      "name": "requestStart",
                      "timeUnixNano": 1694335001170600200,
                      "droppedAttributesCount": 0
                    },
                    {
                      "attributes": [],
                      "name": "responseStart",
                      "timeUnixNano": 1694335001170600200,
                      "droppedAttributesCount": 0
                    },
                    {
                      "attributes": [],
                      "name": "responseEnd",
                      "timeUnixNano": 1694335011287900200,
                      "droppedAttributesCount": 0
                    },
                    {
                      "attributes": [],
                      "name": "loaded",
                      "timeUnixNano": 1694335011527000000,
                      "droppedAttributesCount": 0
                    }
                  ],
                  "droppedEventsCount": 0,
                  "status": {
                    "code": 0
                  },
                  "links": [],
                  "droppedLinksCount": 0
                },
            `,
          },
        ]}
      ></MultiCodeLayout>
    </>
  )
}
