const seasons = [
  {
    id: 1,
    episodes: [
      {
        id: 1,
        title: "The Grito of Revolution",
        duration: "63m",
        thumbnail: "/episodes/dolores.jpeg",
        description:
          "After a series of mysterious events, the community begins to question the actions of local officials.",
      },
      {
        id: 2,
        title: "The Tragic Fall of Hidalgo",
        duration: "57m",
        thumbnail: "/episodes/hidalgo.webp",
        description:
          "As corruption becomes more evident, a small group of residents decide to take action.",
      },
      {
        id: 3,
        title: "The Vision of Morelos",
        duration: "49m",
        thumbnail: "/episodes/iguala.png",
        description:
          "The conflict escalates as the community faces violent resistance from those in power.",
      },
      {
        id: 4,
        title: "Independence at Last: The Plan of Iguala",
        duration: "68",
        thumbnail: "/episodes/morelos.jpeg",
        description:
          "The conflict escalates as the community faces violent resistance from those in power.",
      },
    ],
  }
];

const formatDuration = (duration: string): string => {
  const minutes = parseInt(duration.replace("m", ""));
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }
  return duration;
};

seasons.forEach((season) => {
  season.episodes.forEach((episode) => {
    episode.duration = formatDuration(episode.duration);
  });
});

export default seasons;
