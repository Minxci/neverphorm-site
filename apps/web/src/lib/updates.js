export const updates = [
    {
        title: "VecPulse Game Card updated",
        date: "June 21, 2026",
        type: "Devlog",
        text: "Updated the games card to make it clickable and provided development and game information.",
    },
    {
      title: "VecPulse Update v0.1.9",
      date: "June 19, 2026",
      type: "Devlog",
      text: "Well apparently since I can't upload the gameplay of the game here I supposed I'll just mention which things I did and what is left to add. Did some major changes to this mobile game, it's been a fun small project. Only have maybe a couple or so more things to polish, add in the global leaderboard via Google Games Service and Apple Game Center, then will be ready to ship! Android build is ready for launch, then iOS, then soon after this it's back to the main game.",
    },
    {
      title: "Website Update Version 1.1.0",
      date: "June 19, 2026",
      type: "Devlog",
      text: "I updated the contact form... So that's working again.",
    },
    {
      title: "Materials and Textures",
      date: "June 6, 2026",
      type: "Devlog",
      image: "/pictures/pn_rusticmetal.png",
      text: `Creating materials and textures has always been fun and relaxing. Currently working on the first batch of materials for some of the buildings here as of recently. I used to struggle with this stuff but after getting the hang of it, it becomes easy. The exporting of the models along with their added materials/textures from Blender over to Unity is what's been a pain though.`,
    },
    {
      title: "Development Project: Foreshadowing",
      date: "May 25, 2026",
      type: "Devlog",
      text: `Our debut project is being built as a focused atmospheric experience centered around night time rain, exploration, and environmental storytelling. Foreshadowing is a standalone atmospheric experience with subtle ties to future worlds and stories.`,
    },
  ];
  
  // Sorts newest-first by date so Home/Updates never have to think about order
  export function getSortedUpdates() {
    return [...updates].sort((a, b) => new Date(b.date) - new Date(a.date));
  }