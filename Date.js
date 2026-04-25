const d = new Date();
console.log(d);

const dateString = d.toDateString();
console.log("Date String:", dateString);

const timeString = d.toTimeString();
console.log("Time String:", timeString);

const isoString = d.toISOString();
console.log("ISO String:", isoString);

const localString = d.toLocaleString();
console.log("Local String:", localString);

const d2 = new Date("2022-03-25");
console.log("Parsed Date:", d2);

const timestamp = Date.now();
console.log("Current Timestamp:", timestamp);