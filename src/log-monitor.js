// # LogMonitor
//  Example monitor which simply saves the last event to variable

module.exports = class LogMonitor {

  constructor() {
    this._lastEvent = null;
  }

  get lastEvent() {
    return this._lastEvent;
  }

  handleEvent(event) {
    this._lastEvent = event;
    console.log(`Event ${event.eventId}: ${event.text}`);
    return;
  }

};
