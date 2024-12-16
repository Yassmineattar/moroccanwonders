const determineDestination = (answers) => {
  const destinations = [
    {
      destination: "Essaouira",
      criteria: {
        duration: "short",
        soundtrack: "waves",
        spice: "mint",
        travelTime: "ancient",
        artifact: "ceramic-plate",
        spiritAnimal: "dolphin",
      },
    },
    {
      destination: "Fes",
      criteria: {
        duration: "long",
        soundtrack: "bustling",
        spice: "cinnamon",
        travelTime: "ancient",
        artifact: "handmade-rug",
        spiritAnimal: "lion",
      },
    },
    {
      destination: "Merzouga",
      criteria: {
        duration: "medium",
        soundtrack: "drums",
        spice: "paprika",
        travelTime: "future",
        artifact: "handmade-rug",
        spiritAnimal: "camel",
      },
    },
  ];

  for (let dest of destinations) {
    const { criteria } = dest;

    const isMatch = Object.keys(criteria).every(
      (key) => criteria[key] === answers[key]
    );

    if (isMatch) {
      return dest.destination;
    }
  }

  return null; // No match found
};

export default determineDestination;
