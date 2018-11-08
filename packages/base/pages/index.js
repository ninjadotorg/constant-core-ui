import React from 'react';
import Head from 'next/head';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-regular-svg-icons';

import '../styles/bootstrap.scss';

class Base extends React.PureComponent {
  render() {
    const title = "Design system - constant.money";
    const description = "Design system of constant.money";
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={description} />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <link rel="manifest" href="/static/icons/site.webmanifest" />
          <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#0a2240" />
          <meta name="msapplication-TileColor" content="#0a2240" />
          <meta name="theme-color" content="#0a2240" />
          <meta property="og:url" content="https://constant.money" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://constant.money/static/images/preview.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@ninjadotorg" />
          <meta name="twitter:creator" content="@ninjadotorg" />
          {/* https://fonts.google.com/specimen/PT+Mono?selection.family=PT+Mono */}
          <link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet" />
          {/* https://fonts.google.com/specimen/Montserrat?selection.family=Montserrat:400,500,700,900 */}
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&amp;subset=cyrillic,cyrillic-ext,latin-ext,vietnamese" rel="stylesheet" />
          {/* https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans:400,700&selection.subset=cyrillic,cyrillic-ext,latin-ext,vietnamese */}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet" />
        </Head>
        <section>
          <div className="preview-container">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h2>Button</h2>
                  <div className="preview-element">
                    <button className="c-btn c-btn-primary c-btn-lg">
                      Place order
                    </button>
                    <div>
                      <code>
                        .c-btn .c-btn-primary .c-btn-lg
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <button className="c-btn c-btn-primary">
                      Place order
                    </button>
                    <div>
                      <code>
                        .c-btn .c-btn-primary
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <button className="c-btn c-btn-primary c-btn-sm">
                      Place order
                    </button>
                    <div>
                      <code>
                        .c-btn .c-btn-primary .c-btn-sm
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <button className="c-btn c-btn-primary c-block">
                      Place order
                    </button>
                    <div>
                      <code>
                        .c-btn .c-btn-primary .c-block
                      </code>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <h2>Secondary button</h2>
                  <div className="preview-element">
                    <button className="c-btn c-btn-secondary c-btn-primary c-btn-lg">
                      Place order
                    </button>
                    <div>
                      <code>
                        .c-btn .c-btn-secondary .c-btn-primary .c-btn-lg
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <button className="c-btn c-btn-secondary c-btn-primary">
                      Place order
                    </button>
                    <div>
                      <code>
                        .c-btn .c-btn-secondary .c-btn-primary
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <button className="c-btn c-btn-secondary c-btn-primary c-btn-sm">
                      Place order
                    </button>
                    <div>
                      <code>
                        .c-btn .c-btn-secondary .c-btn-primary .c-btn-sm
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="preview-container">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h2>Input</h2>
                  <div className="preview-element">
                    <input className="c-input" defaultValue="default" />
                    <div>
                      <code>
                        .c-input
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <input className="c-input c-input-error" defaultValue="error" />
                    <div>
                      <code>
                        .c-input .c-input-error
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <input className="c-input c-input-success" defaultValue="success" />
                    <div>
                      <code>
                        .c-input .c-input-success
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <input className="c-input c-input-disabled" defaultValue="disabled" disabled />
                    <div>
                      <code>
                        .c-input .c-input-disabled
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="preview-container">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h2>Form format</h2>
                  <div className="preview-element">
                    <div className="c-input-group">
                      <label>
                        Username
                        <input className="c-input" defaultValue="default" />
                      </label>
                    </div>
                    <div>
                      <code>
                        <pre>
                          {
                            `
<div className="c-input-group">
  <label>
    Username
    <input className="c-input" defaultValue="default" />
  </label>
</div>
                            `
                          }
                        </pre>
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="preview-container">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h2>Utils</h2>
                  <div className="preview-element">
                    <div className="c-shadow-bottom c-bg-white" style={{ height: '50px' }} />
                    <div>
                      <code>
                        .c-shadow-bottom
                        .c-bg-white
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="preview-container">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h2>List</h2>
                  <div className="preview-element">
                    <ul className="c-list-inline">
                      <li>List item</li>
                      <li>List item</li>
                      <li>List item</li>
                      <li>List item</li>
                      <li>List item</li>
                    </ul>
                    <div>
                      <code>
                        <pre>
                          {`<ul className="c-list-inline">
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>`}
                        </pre>
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <div>
                      <ul className="c-list">
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                      </ul>
                    </div>
                    <div>
                      <code>
                        <pre>
                          {`<ul className="c-list">
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>`}
                        </pre>
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="preview-container">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h2>Color</h2>
                  <div className="preview-element">
                    <div className="c-color-red">
                      color
                    </div>
                    <div>
                      <code>
                        .c-color-red
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <div className="c-color-black">
                      color
                    </div>
                    <div>
                      <code>
                        .c-color-black
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <div className="c-color-white">
                      color
                    </div>
                    <div>
                      <code>
                        .c-color-white
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <div>
                      get-color
                      <br />
                      list:
                    </div>
                    <div>
                      <code>
                        <pre>
                          {`
$colors: (
  primary: #2989FF,
  c-white: #FFFFFF,
  c-red: #FE4A49,
  c-orange: #FF954A,
  c-turquose: #2EC4B5,
  c-dandelion: #FED766
);

$grays: (
  black-haze: #F6F7F8,
  black-squeeze: #F5F9FC,
  catskill-white: #EDF3FA,
  periwinkle: #CAD5E3,
  spindle: #B4C4D9,
  nepal: #91A8C7,
  bali-hai: #8099BA,
  endeavour: #2A628F,
  endeavour2: #13293D
);

.abc {
  color: get-color('c-red');
}
.abc {
  color: get-gray('black-haze');
}
`}
                        </pre>
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="preview-container">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h2>Fonts</h2>
                  <div className="preview-element">
                    <div className="open-sans">
                      open sans
                    </div>
                    <div>
                      <code>
                        .open-sans
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <div className="c-hash">
                      pt mono
                    </div>
                    <div>
                      <code>
                        .pt-mono or .c-hash
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <div className="montserrat">
                      montserrat
                    </div>
                    <div>
                      <code>
                        .montserrat
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="preview-container">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Table</h2>
                  <div className="preview-element">
                    <table className="c-table c-table-list">
                      <tbody>
                        <tr>
                          <td>Total</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Total item</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td>Total heart</td>
                          <td>100</td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <code>
                        <pre>

                        </pre>
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="preview-container">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Breadcrumb</h2>
                  <div className="preview-element">
                    <div className="c-breadcrumb">
                      <ul>
                        <li><a href="#">Constant</a></li>
                        <li><a href="#">Explorer</a></li>
                        <li><a href="#">Block: abc</a></li>
                        <li><span>Txs</span></li>
                      </ul>
                    </div>
                    <div>
                      <code>
                        <pre>
                          {
                            `
<div className="c-breadcrumb">
  <ul>
    <li><a href="#">Constant</a></li>
    <li><a href="#">Explorer</a></li>
    <li><a href="#">Block: abc</a></li>
    <li><span>Txs</span></li>
  </ul>
</div>
                          `
                          }
                        </pre>
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="preview-container">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Pagination</h2>
                  <div className="preview-element">
                    <div className="c-pagination">
                      <ul>
                        <li className="prev"><a href="#"><FontAwesomeIcon icon={faChevronLeft} /></a></li>
                        <li className="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">...</a></li>
                        <li><a href="#">8</a></li>
                        <li><a href="#">9</a></li>
                        <li className="next"><a href="#"><FontAwesomeIcon icon={faChevronRight} /></a></li>
                      </ul>
                    </div>
                    <div>
                      <code>
                        <pre>
                          {
                            `
<div className="c-pagination">
  <ul>
    <li className="prev"><a href="#"><FontAwesomeIcon icon={faChevronLeft} /></a></li>
    <li className="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">8</a></li>
    <li><a href="#">9</a></li>
    <li className="next"><a href="#"><FontAwesomeIcon icon={faChevronRight} /></a></li>
  </ul>
</div>
                          `
                          }
                        </pre>
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Base;
