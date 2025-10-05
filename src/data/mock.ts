export type Athlete = {
  id: string;
  name: string;
  category: 'RX+' | 'RX' | 'Performance' | 'Rookie';
  team?: string;
  scores: Record<string, { score: number; rank: number }>;
};

export type Wod = {
  id: string;
  name: string;
  description: string;
  movements: string[];
  videoUrl?: string;
};

export const wods: Wod[] = [
  {
    id: 'wod1',
    name: 'WOD 1 - Engine Builder',
    description: 'AMRAP 12: 200m Run, 15 Wall Balls, 10 Toes-to-Bar',
    movements: ['Run', 'Wall Balls', 'Toes-to-Bar'],
    videoUrl: 'https://www.youtube.com/watch?v=Fe3Q2T89n0Q',
  },
  {
    id: 'wod2',
    name: 'WOD 2 - Barbell Cycling',
    description: 'For Time: 21-15-9 Power Snatch + Bar Facing Burpees',
    movements: ['Power Snatch', 'Burpees'],
  },
  {
    id: 'wod3',
    name: 'WOD 3 - Gymnastics Test',
    description: 'EMOM 12: 1-3 Muscle Ups, Max Cal Row Resting Minute',
    movements: ['Muscle Ups', 'Row'],
  },
];

export const athletes: Athlete[] = [
  {
    id: 'a1',
    name: 'Athlete One',
    category: 'RX',
    team: 'Team Alpha',
    scores: {
      wod1: { score: 320, rank: 5 },
      wod2: { score: 7 * 60 + 42, rank: 8 },
    },
  },
  {
    id: 'a2',
    name: 'Athlete Two',
    category: 'Performance',
    team: 'Team Beta',
    scores: {
      wod1: { score: 350, rank: 2 },
      wod2: { score: 7 * 60 + 10, rank: 3 },
    },
  },
];


