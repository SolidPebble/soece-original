import "./Notice.css";

const Notice = ({ notices = [] }) => {
  // Hide component if no notices exist
  if (!notices || notices.length === 0) return null;

  return (
    <section className="soece_notices_section">
      <div className="soece_notices_container">
        {/* Header Row */}
        <div className="soece_notices_header">
          <div className="header_title_group">
            <h1 className="news_label">NEWS</h1>
            <h2 className="latest_events_label">LATEST EVENTS</h2>
          </div>
          <div className="header_actions">
            <span>🔗</span>
            <span>📄</span>
            <span>📥</span>
          </div>
        </div>

        <div className="notices_list">
          {notices.map((notice, index) => (
            <div key={index} className="notice_card_row">
              {/* Status Dot */}
              <div className={`status_dot ${notice.isLive ? "live" : "upcoming"}`}></div>

              {/* Standardized Split Card */}
              <div className="notice_card standardized_split">
                <div className="card_accent_border"></div>
                <div className="split_container">
                  
                  <div className="split_left">
                    <span className="notice_category">{notice.category || "Announcement"}</span>
                    <h3>{notice.title}</h3>
                  </div>

                  <div className="split_right">
                    <div className="meta_item">
                      <span className="meta_icon">🏛️</span>
                      <div>
                        <p className="meta_label">Venue</p>
                        <p className="meta_value">{notice.venue}</p>
                      </div>
                    </div>
                    <div className="meta_item">
                      <span className="meta_icon">📅</span>
                      <div>
                        <p className="meta_label">Date & Time</p>
                        <p className="meta_value">{notice.date} | {notice.time}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notice;