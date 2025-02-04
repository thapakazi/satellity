import '../node_modules/noty/src/noty.scss';
import '../node_modules/noty/src/themes/nest.scss';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './assets/css/h5bp.css';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import showdown from 'showdown';
import Locale from './locale/index.js';
import MainLayout from './layouts/main.js';
import AdminRoute from './admin/admin.js';
import NoMatch from './sink.js';
import Oauth from './users/oauth.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faComment, faComments, faEdit, faEye, faTrashAlt, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faChalkboard, faEllipsisV, faHome, faPlus, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
library.add(
  faBookmark, faComment, faComments,
  faEdit, faEye, faTrashAlt,
  faHeart,
  faChalkboard, faEllipsisV, faHome,
  faPlus, faUsersCog, faMarkdown
);

showdown.setOption('customizedHeaderId', true);
showdown.setOption('simplifiedAutoLink', true);
showdown.setOption('openLinksInNewWindow', true);
showdown.setOption('strikethrough', true);
showdown.setOption('simpleLineBreaks', true);
showdown.setOption('parseImgDimensions', true);
showdown.setOption('omitExtraWLInCodeBlocks', true);
showdown.setOption('tables', true);
showdown.extension('header-anchors', function() {
  var ancTpl = '$1$4<a id="user-content-$3" class="anchor" href="#$3" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>$5';

  return [{
    type: 'html',
    regex: /(<h([1-3]) id="([^"]+?)">)(.*)(<\/h\2>)/g,
    replace: ancTpl
  }];
});

window.i18n = new Locale(navigator.language);

ReactDOM.render((
  <Router>
    <div>
      <Switch>
        <Route path='/oauth/callback' component={Oauth} />
        <Route path='/admin' component={AdminRoute} />
        <Route path='/404' component={NoMatch} />
        <MainLayout />
      </Switch>
    </div>
  </Router>
), document.querySelector('#layout-container'));
