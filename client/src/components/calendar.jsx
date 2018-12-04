import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import './style.css/calendar.css';
 
class Calendar extends React.Component {
    
  static displayName = 'Example';
  state = {
    event: {
      title: 'Recipe conference',
      description: 'This is the sample event provided as an example only',
      location: 'New York City, NY',
      startTime: '2018-09-16T20:15:00-04:00',
      endTime: '2018-09-16T21:45:00-04:00'
    }
  };
  
  items = [
    { apple: 'iCal' },
    { google: 'Google' }
 ];
 
  render() {
    return <AddToCalendar event={this.state.event} className="black-text" listItems={this.items} buttonTemplate={{'far fa-calendar-alt': 'left'}} />
    ;
  };
  
}

export default Calendar;