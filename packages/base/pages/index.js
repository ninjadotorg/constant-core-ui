import React from 'react';
import Head from 'next/head';

import '../styles/bootstrap.scss';

class Base extends React.PureComponent {
  render() {
    return (
      <div>
        <Head>
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
                <div className="col-12 col-sm-6">
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
      </div>
    );
  }
}

export default Base;
