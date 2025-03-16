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
          `On September 16, 1810, Father Miguel Hidalgo issued the Grito de Dolores, a revolutionary call to arms, by ringing church bells in Dolores, Mexico, and encouraging his parishioners to rise against Spanish authority. This "Cry of Dolores" ignited the Mexican War of Independence and is remembered yearly as Mexico's Independence Day.`,
      },
      {
        id: 2,
        title: "The Tragic Fall of Hidalgo",
        duration: "57m",
        thumbnail: "/episodes/hidalgo.webp",
        description:
          "Following initial triumphs, Hidalgo mysteriously withdrew from Mexico City, losing momentum. In January 1811, his inadequately prepared men suffered a disastrous loss at Calderón Bridge. Hidalgo escaped north after being stripped of his military leadership by other insurgents. He was betrayed, caught on March 21, and murdered by firing squad on July 30, 1811.",
      },
      {
        id: 3,
        title: "The Vision of Morelos",
        duration: "49m",
        thumbnail: "/episodes/iguala.png",
        description:
          `José María Morelos envisioned an autonomous Mexico based on equality and justice. The revolutionary priest pushed for the abolition of slavery, the redistribution of land, universal education, and the removal of racial hierarchies. His "Sentimientos de la Nación" envisioned a sovereign country where authority flowed from the people, regardless of socioeconomic class or background.`,
      },
      {
        id: 4,
        title: "The Plan of Iguala",
        duration: "68",
        thumbnail: "/episodes/morelos.jpeg",
        description:
          "The Plan of Iguala, issued on February 24, 1821, by Iturbide and Guerrero during Mexico's War of Independence (not the Mexican Revolution), provided three guarantees: Catholicism as the national religion, independence from Spain, and social equality. It envisioned a constitutional monarchy, which ultimately led to Mexican independence.",
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
