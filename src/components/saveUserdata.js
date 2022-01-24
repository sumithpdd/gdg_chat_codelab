import React, { Component } from 'react';
import { saveTrack } from '../utils/cache';

export class SaveUserData extends Component {
  constructor(props) {
    super(props);

    this.data = props;
  }
  componentDidMount() {
      console.log(this.data)
    saveTrack(this.data.mdx.fields.slug, this.data.mdx.fields.title)
  }
  render() {
    return <>{
        }</>;
  }
}

export default SaveUserData;
