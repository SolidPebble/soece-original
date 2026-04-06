import "./Event_academic_calendar.css";

const Event_academic_calendar = ({ events = [] }) => {
  // If no events are provided, hide the section
  if (!events || events.length === 0) return null;

  return (
    <section className="calendar_section">
      <div className="calendar_container">
        <div className="calendar_header">
          <h2>Academic Calendar</h2>
          <p>Semester Schedule & Key Dates</p>
        </div>

        <div className="calendar_timeline">
          {events.map((event, index) => (
            <div key={index} className="timeline_item">
              <div className="timeline_date_box">
                <span className="date_day">{event.day}</span>
                <span className="date_month">{event.month}</span>
              </div>
              
              <div className="timeline_content">
                <div className="content_top">
                  <span className={`event_badge ${event.type.toLowerCase()}`}>
                    {event.type}
                  </span>
                </div>
                <h4 className="event_title">{event.title}</h4>
                <p className="event_desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event_academic_calendar;