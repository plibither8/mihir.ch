export const random = (min: number, max: number) => min + Math.random() * (max - min);

export const randomFromArray = (arr: any[]) => arr[Math.floor(random(0, arr.length))];

export const shuffleArray = (arr: any[]) => arr.sort(() => 0.5 - Math.random());
