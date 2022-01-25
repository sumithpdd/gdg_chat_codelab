/**
 * save some global data in client
 *
 * @2019/02/23
 */

const userInfoMap = {
  // userName: '',
  // userEmail: '',
  // fullName: '', @2019/03/08
};
// save the learning track by user
const userLearnTracks = [
  // {tutorial_slug:'', title:'', category:'', date:'', status:''}, ...
];
// quiz records
const userQuizMap = [
  // {title:'', slug: '', user: '', ans: ['a','b','c','d']}, ...
];

//  ------ user info process ------------------------------
export const saveUser = (userName, userEmail, fullName) => {
  userInfoMap.userName = userName;
  userInfoMap.userEmail = userEmail;
  userInfoMap.fullName = fullName;
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('ueUser', JSON.stringify(userInfoMap));
  }
};

export const getUser = () => {
  // retrieve cache first...
  if (Object.keys(userInfoMap).length) return userInfoMap;

  if (typeof window !== 'undefined') {
    if (typeof window.localStorage === 'undefined') return null;

    // retrive local storage
    let user = window.localStorage.getItem('ueUser');
    if (user) {
      let ujson = JSON.parse(user);
      userInfoMap.userName = ujson.userName;
      userInfoMap.userEmail = ujson.userEmail;
      userInfoMap.fullName = ujson.fullName;
      return userInfoMap;
    }
  }
  return null;
};

//  ------------ learning track recording ---------------
const initLearningTrack = () => {
  if (userLearnTracks.length) return; // only init once
  if (typeof window !== 'undefined') {
    let saved = JSON.parse(window.localStorage.getItem('userLearnTracks'));
    if (saved) saved.map((o) => userLearnTracks.push(o));
  }
};
// status: start, unlock, quiz, complete
// need to remove repetition?
export const saveLearningTrack = (slug, title, category, date, status) => {
  initLearningTrack(); // init first
  userLearnTracks.splice(0, 0, { slug, title, category, date, status }); // insert to first
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('userLearnTracks', JSON.stringify(userLearnTracks));
  }
};

export const getLearningTracks = () => {
  if (typeof window !== 'undefined') {
    if (typeof window.localStorage === 'undefined') return null;

    let saved = JSON.parse(window.localStorage.getItem('userLearnTracks'));
    if (saved) return saved; // use DESC order better @2019/06/03
  }
  // if(saved) return saved.reverse()
  return null;
};

export const getLearningTrackBy = (slug) => {
  let tracks = [];
  if (typeof window !== 'undefined') {
    let saved = JSON.parse(window.localStorage.getItem('userLearnTracks'));
    if (!saved) return null;

    saved.map((t) => {
      if (t.slug === slug) tracks.push(t);
    });
  }
  return tracks;
};

export const saveTrack = (slug, title) => {
  const date = new Date().toISOString();
  const category = 'flutter';
  const status = 'read';
  const tracks = getLearningTrackBy(slug);
  let saved = false;
  if (tracks)
    tracks.map((t) => {
      if (t.status === status) saved = true;
    });
  if (saved) return;

  saveLearningTrack(slug, title, category, date, status);
};
// ------------- quiz submition records -----------------
const initUserQuiz = () => {
  if (userQuizMap.length) return; // only init once
  if (typeof window !== 'undefined') {
  let saved = JSON.parse(window.localStorage.getItem('userQuizMap'));
  if (saved) saved.map((o) => userQuizMap.push(o));
  }
};

export const saveUserQuiz = (title, slug, user, ans, level, duration, completion) => {
  initUserQuiz(); // init first
  let record = { title, slug, user, ans, level, duration, completion };
  userQuizMap.splice(0, 0, record);
  if (typeof window !== 'undefined') {
  window.localStorage.setItem('userQuizMap', JSON.stringify(userQuizMap));
  }
};

export const getUserQuizs = (userName) => {
  initUserQuiz(); // init first
  let searched = [];
  if (!Object.keys(userQuizMap).length) return null;
  // FIXME: use memory to search @2019/03/11
  userQuizMap.map((q) => {
    if (q.user === userName) searched.splice(0, 0, q);
  });
  return searched;
};

export const getQuiz = (userName, slug) => {
  initUserQuiz(); // init first
  let searched;
  if (!Object.keys(userQuizMap).length) return null;

  userQuizMap.map((q) => {
    if (q.user === userName && q.slug === slug) searched = q;
  });
  return searched;
};

export const deleteQuiz = (userName, slug) => {
  let index; // which to delete

  if (typeof window !== 'undefined') {
    userQuizMap.map((q, i) => {
      if (q.user === userName && q.slug === slug) index = i;
    });
    userQuizMap.splice(index, 1);
    window.localStorage.setItem('userQuizMap', JSON.stringify(userQuizMap));
  }
};
