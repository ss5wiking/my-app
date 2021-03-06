import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// containers
const Login = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/Login/index').default);
  });
};
const FindPassWord = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/FindPassWord/index').default);
  });
};
const Register = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/Register/index').default);
  });
};
const AddDoctorInfo = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/AddInfo/AddDoctorInfo/index').default);
  });
};
const AddStudentInfo = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/AddInfo/AddStudentInfo/index').default);
  });
};
const AddVisitorInfo = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/AddInfo/AddVisitorInfo/index').default);
  });
};
const TabBar = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/TabBar/index').default);
  });
};
const VideoCollege = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/VideoCollege/index').default);
  });
};
const StreamList = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/List/StreamList/index').default);
  });
};
const RecordList = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/List/RecordList/index').default);
  });
};

const SeriesList = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/List/SeriesList/index').default);
  });
};

const StreamDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/StreamDetail/index').default);
  });
};
const RecordDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/RecordDetail/index').default);
  });
};
const SeriesDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/SeriesDetail/index').default);
  });
};

const Meet = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/Meet/index').default);
  });
};

const MeetOffLineList = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/List/MeetOffLineList/index').default);
  });
};

const MeetStreamList = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/List/MeetStreamList/index').default);
  });
};

const MeetRecordList = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/List/MeetRecordList/index').default);
  });
};

const MeetOffLineDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/MeetOffLineDetail/index').default);
  });
};

const MeetOffLineEnroll = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/MeetOffLineEnroll/index').default);
  });
};

const MeetStreamDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/MeetStreamDetail/index').default);
  });
};

const MeetRecordDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/MeetRecordDetail/index').default);
  });
};

const ComingSoonPage = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/ComingSoonPage/index').default);
  });
};
const PayPage = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/PayPage/index').default);
  });
};
const TestList = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/TestList/index').default);
  });
};

const TestDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/TestDetail/index').default);
  });
};

const TestRanking = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/TestRanking/index').default);
  });
};

const TestQuestionDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('containers/TestQuestionDetail/index').default);
  });
};




const requireAuth = () => {
  setTimeout(() => {
    if (!localStorage['reduxPersist:userInfo']) {
      hashHistory.push('/Login');
    }
  }, 1000);
};

class Routers extends Component {
  render() {
    return (
      <Router history={hashHistory} key={Math.random()}>
        <Route
          path="/HomePage(/:index)"
          getComponent={TabBar}
          onEnter={requireAuth}
        />
        <Route path="/Login" getComponent={Login} />
        <Route path="/FindPassWord" getComponent={FindPassWord} />
        <Route path="/Register" getComponent={Register} />
        <Route path="/AddDoctorInfo" getComponent={AddDoctorInfo} />
        <Route path="/AddStudentInfo" getComponent={AddStudentInfo} />
        <Route path="/AddVisitorInfo" getComponent={AddVisitorInfo} />
        <Route
          path="/VideoCollege"
          getComponent={VideoCollege}
          onEnter={requireAuth}
        />
        <Route
          path="/StreamList"
          getComponent={StreamList}
          onEnter={requireAuth}
        />
        <Route
          path="/RecordList"
          getComponent={RecordList}
          onEnter={requireAuth}
        />
        <Route
          path="/SeriesList"
          getComponent={SeriesList}
          onEnter={requireAuth}
        />
        <Route
          path="/StreamDetail/:id"
          getComponent={StreamDetail}
          onEnter={requireAuth}
        />

        <Route
          path="/RecordDetail/:id"
          getComponent={RecordDetail}
          onEnter={requireAuth}
        />
        <Route
          path="/SeriesDetail/:id"
          getComponent={SeriesDetail}
          onEnter={requireAuth}
        />
        <Route path="/Meet" getComponent={Meet} onEnter={requireAuth} />
        <Route
          path="/MeetOffLineList"
          getComponent={MeetOffLineList}
          onEnter={requireAuth}
        />
        <Route
          path="/MeetStreamList"
          getComponent={MeetStreamList}
          onEnter={requireAuth}
        />
        <Route
          path="/MeetRecordList"
          getComponent={MeetRecordList}
          onEnter={requireAuth}
        />
        <Route
          path="/MeetOffLineDetail/:id"
          getComponent={MeetOffLineDetail}
          onEnter={requireAuth}
        />
        <Route
          path="/MeetOffLineEnroll/:id"
          getComponent={MeetOffLineEnroll}
          onEnter={requireAuth}
        />
        <Route
          path="/MeetStreamDetail/:id/:stream_id"
          getComponent={MeetStreamDetail}
          onEnter={requireAuth}
        />
        <Route
          path="/MeetRecordDetail/:id"
          getComponent={MeetRecordDetail}
          onEnter={requireAuth}
        />
        <Route
          path="/ComingSoonPage"
          getComponent={ComingSoonPage}
          onEnter={requireAuth}
        />
        <Route path="/PayPage" getComponent={PayPage} onEnter={requireAuth} />
        <Route path="/TestList" getComponent={TestList} onEnter={requireAuth} />
        <Route path="/TestDetail" getComponent={TestDetail} onEnter={requireAuth} />
        <Route path="/TestRanking" getComponent={TestRanking} onEnter={requireAuth} />
        <Route path="/TestQuestionDetail" getComponent={TestQuestionDetail} onEnter={requireAuth} />
      </Router>
    );
  }
}
export default Routers;
