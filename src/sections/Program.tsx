type ProgramEvent = {
  startTime: string;
  endTime?: string;
  description: string;
};

export const Program = () => {
  const events: ProgramEvent[] = [
    { startTime: "16:00", endTime: "16:30", description: "Welcome Drink" },
    {
      startTime: "16:30",
      endTime: "17:00",
      description: "Изнесен сватбен ритуал",
    },
    {
      startTime: "17:00",
      endTime: "17:45",
      description: "Снимки, подаръци и поздравления",
    },
    { startTime: "18:00", endTime: "22:00", description: "Официална вечеря" },
    { startTime: "22:00", endTime: ":)", description: "Щуро парти" },
  ];

  return (
    <section className="program-section" id="program">
      <div className="classic-frame">
        <div className="program-header">
          <h2 className="program-title">Програма</h2>
          <div className="program-subtitle">
            <span>Цялото събитие ще се проведе в</span>
            <a
              href="https://maps.google.com/?q=Pasarel+Lake+Club"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              <span className="material-symbols-outlined">location_on</span>
              <div className="links">Pasarel Lake Club</div>
            </a>
          </div>
        </div>

        <div className="program-elements">
          {events.map((event, index) => (
            <div className="event-row" key={index}>
              <div className="event-timing">
                {event.startTime} {event.endTime && `— ${event.endTime}`}
              </div>
              <div className="event-description">{event.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
