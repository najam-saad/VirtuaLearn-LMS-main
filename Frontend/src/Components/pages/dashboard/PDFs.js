// MyApp.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import {Logger} from 'logging-library';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';



const file = '../../graphics/android.jpg'
const type = 'jpg'

class Files1 extends Component {
  render() {
   
    return (
      <FileViewer
        fileType={type}
        filePath={file}
        errorComponent={CustomErrorComponent}
        onError={this.onError}/>
    );
  }

  onError(e) {
    Logger.logError(e, 'error in file-viewer');
  }
}

export default Files1;