import React, { Component } from 'react';
import AboutContent from './../../components/AboutContent';
import AboutContacts from './../../components/AboutContacts';
import { LoadIndicator } from './../../components/LoadIndicator';

export default class AboutPage extends Component {
  state = {
    dataObj: null
  };
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const resp = await fetch(
      'https://topvv.github.io/SoftServe-IT-Academy/Demo/Demo3/about_us_info.json'
    );
    const body = await resp.json();
    this.setState({
      dataObj: body
    });
  }
  render() {
    if (!this.state.dataObj) {
      return <LoadIndicator />;
    }
    const {
      image,
      text,
      facebook,
      phone,
      email,
      additionalContacts
    } = this.state.dataObj;
    return (
      <div className='about-page pt-16 pb-2 px-5'>
        <AboutContent contentData={{ image, text }} />
        <AboutContacts
          contactsData={{ facebook, phone, email, additionalContacts }}
        />
      </div>
    );
  }
}
