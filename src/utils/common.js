function timeSince(date) {
  let seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}
const tagColors = [
  {
    textColor: "#27292f",
    bgColor: "#fbca04",
  },
  {
    textColor: "#27292f",
    bgColor: "#d4c5f9",
  },
  {
    textColor: "#fff",
    bgColor: "#106099",
  },
  {
    textColor: "#fff",
    bgColor: "#b60205",
  },
  {
    textColor: "#fff",
    bgColor: "#b60205",
  },
  {
    textColor: "#27292f",
    bgColor: "#f7afdb",
  },
  {
    textColor: "#27292f",
    bgColor: "#c7def8",
  },
  {
    textColor: "#fff",
    bgColor: "#000",
  },
  {
    textColor: "#fff",
    bgColor: "#706161",
  },
  {
    textColor: "#8967af",
    bgColor: "#d4c5f9",
  },
];
function getRandomColor() {
  let randomNum = Math.floor(Math.random() * 10);
  return tagColors[randomNum];
}
export { timeSince, getRandomColor };
