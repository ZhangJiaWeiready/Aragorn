import { ipcRenderer, remote, shell } from 'electron';
import React from 'react';
import './index.less';
import { Button } from 'antd';

const AppUrl = 'https://github.com/njzydark/Aragorn';

export default function About() {
  function handleUpdate() {
    ipcRenderer.send('check-update', true);
  }

  return (
    <div className="info-wrapper">
      <main>
        <h3>Aragorn</h3>
        <a
          style={{ margin: 10 }}
          onClick={() => {
            shell.openExternal(AppUrl);
          }}
        >
          {AppUrl}
        </a>
        <p className="desc">v{remote.app.getVersion()}</p>
        <Button type="primary" onClick={handleUpdate}>
          检查更新
        </Button>
      </main>
    </div>
  );
}
