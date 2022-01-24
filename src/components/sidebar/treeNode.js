import React, { useState, useContext } from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';
import { saveTrack, getLearningTrackBy,  } from '../../utils/cache';


const TreeNode = ({
  className = '',
  index,
  setCollapsed,
  collapsed,
  url,
  title,
  label,
  items,
  ...rest
}) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }

  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  return (
    <li className={calculatedClassName}>
      {/* {console.log(items)} */}

       {title && (
        <Link to={url} onClick={() => saveTrack(url, title)}>
          {getLearningTrackBy(url) && getLearningTrackBy(url).length !== 0 ? (
          <div className="checkGreen">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
              <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"></path>
            </svg>
          </div>
           ) : (
            index + 1
          )}
          <p style={{ marginLeft: '10px' }}>{title}</p>
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        
        <ul>
          {items.map((item, index) => (
            
            <TreeNode
              key={item.url + index.toString()}
              index={index}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
