export default class Time {
  // BEGIN
  static fromString(timeString) {
    const [h, m] = timeString.split(':');
    const hours = parseInt(h);
    const minutes = parseInt(m);
    return new Time(hours, minutes);}
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
