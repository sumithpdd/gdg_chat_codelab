import React, { useState, useContext } from 'react';
import Link from '../link';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';

import { saveLearningTrack, getLearningTrackBy, getLearningTracks } from '../../utils/cache';
const A = 65; // ASCII character code
const userLearnTracks = [
  // {tutorial_slug:'', title:'', category:'', date:'', status:''}, ...
];
export default class LearningTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedUserTracks: [],
      letters: Array.from({ length: 26 }, (_, i) => String.fromCharCode(A + i)),
    };
  }
  // saveTrack(status) {
  //   const { data, pageContext } = this.props;
  //   const pageslug = pageContext.slug;
  //   const fm = data.tsec.frontmatter;
  //   const { category } = data.catdef.frontmatter;
  //   const date = new Date().toISOString();
  //   const tracks = getLearningTrackBy(pageslug);
  //   let saved = false;
  //   if (tracks)
  //     tracks.map((t) => {
  //       if (t.status === status) saved = true;
  //     });
  //   if (saved) return;

  //   saveLearningTrack(pageslug, fm.title, category, date, status);
  // }

  saveTrack(slug,  title) {
    const date = new Date().toISOString();
    const category = 'flutter';
    const status = 'read';
    let data = {
      slug,     
      title,
      category,
      date,
      status,
    };
    const tracks = getLearningTrackBy(slug);
    let saved = false;
    if (tracks)
      tracks.map((t) => {
        if (t.status === status) saved = true;
      });
    if (saved) return;

    saveLearningTrack(slug, title, category, date, status);
    console.log(getLearningTracks());
  }
  render() {
    return (
      <div>
        Just clicked:
        {this.props.items.map((item, index) => (
          <Link
            to={item.url}
            onClick={() => this.handleClick(item.url, item.title)}
            key={index}
          >
            {/* {state.linklist && state.linklist.indexOf(item.url) !== -1 ? ( */}
            <div className="checkGreen">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
                <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"></path>
              </svg>
            </div>
            {/* ) : (
            index + 1
          )} */}
            <p style={{ marginLeft: '10px' }}>{item.title}</p>
          </Link>
        ))}
      </div>
    );
  }
}
