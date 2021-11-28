import React, { useLayoutEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { logout } from 'app/shared/reducers/authentication';

export const Logout = () => {
  const logoutUrl = useAppSelector(state => state.authentication.logoutUrl);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(logout());
    window.location.href = logoutUrl || '/';
  });

  return (
    <div>
      <div className="app-loading">
        <div className="lds-pacman">
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="app-loading">
        <div id="jhipster-error" style={{ display: 'none' }}>
          <h1>An error has occurred :-(</h1>
          <h2>Usual error causes</h2>
          <ol>
            <li>
              You started the application from an IDE and you didnt run <code style={{ color: 'red' }}>npm start</code> or
              <code style={{ color: 'red' }}>npm run webapp:build</code>.
            </li>
            <li>
              You had a network error while running <code style={{ color: 'red' }}>npm install</code>. If you are behind a corporate proxy,
              it is likely that this error was caused by your proxy. Have a look at the JHipster error logs, you will probably have the
              cause of the error.
            </li>
            <li>
              You installed a Node.js version that doesnt work with JHipster: please use an LTS (long-term support) version, as its the only
              version we support.
            </li>
          </ol>
          <h2>Building the client side code again</h2>
          <p>
            If you want to go fast, run <code style={{ color: 'red' }}>./mvnw</code> to build and run everything.
          </p>
          <p>If you want to have more control, so you can debug your issue more easily, you should follow the following steps:</p>
          <h2>Getting more help</h2>

          <h3>If you have a question on how to use JHipster</h3>
          <p>
            Go to Stack Overflow with the
            <a href="http://stackoverflow.com/tags/jhipster" target="_blank" rel="noopener noreferrer">
              jhipster
            </a>{' '}
            tag.
          </p>

          <h3>If you have a bug or a feature request</h3>
          <p>
            First read our
            <a href="https://github.com/jhipster/generator-jhipster/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
              contributing guidelines
            </a>
            .
          </p>
          <p>
            Then, fill a ticket on our
            <a href="https://github.com/jhipster/generator-jhipster/issues/new/choose" target="_blank" rel="noopener noreferrer">
              bug tracker
            </a>
            , well be happy to resolve your issue!
          </p>

          <h3>If you want to chat with contributors and other users</h3>
          <p>
            Join our chat room on
            <a href="https://gitter.im/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
              Gitter.im
            </a>
            . Please note that this is a public chat room, and that we expect you to respect other people and write in a correct English
            language!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logout;
