import React from 'react';
import Head from 'next/head';

import '../styles/main.scss';
import '../styles/bootstrap.scss';

class Base extends React.PureComponent {
  render() {
    return (
      <div>
        <Head>
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
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <button className="c-btn c-btn-primary">
                      Place order
                    </button>
                  </div>
                  <div className="preview-element">
                    <button className="c-btn c-btn-primary c-btn-sm">
                      Place order
                    </button>
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
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <button className="c-btn c-btn-secondary c-btn-primary">
                      Place order
                    </button>
                  </div>
                  <div className="preview-element">
                    <button className="c-btn c-btn-secondary c-btn-primary c-btn-sm">
                      Place order
                    </button>
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
                      </code>
                    </div>
                  </div>
                  <div className="preview-element">
                    <input className="c-input c-input-error" defaultValue="error" />
                    <div>
                      <code>
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
