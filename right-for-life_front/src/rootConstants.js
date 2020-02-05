export const BE_URL = 'http://localhost:4000';

export const API = Object.freeze({
  ANIMALS: {
    name: 'ANIMALS',
    // api: `${BE_URL}/animals`,
    api: 'https://maksv21.github.io/softserve/animals/',
  },
  NEWS: {
    name: 'NEWS',
    api: `${BE_URL}/news`,
  },
  HAPPY_STORIES: {
    name: 'HAPPY_STORIES',
    api: `${BE_URL}/happyStories`,
  },
  DONATE: {
    name: 'DONATE',
    api: `${BE_URL}/donate`,
  },
  SUPPLIES: {
    name: 'SUPPLIES',
    api: `${BE_URL}/supplies`,
  },
  ABOUT_US: {
    name: 'ABOUT_US',
    api: `${BE_URL}/about`,
  },
  EMERGENCY_HELP: {
    name: 'EMERGENCY_HELP',
    api: `${BE_URL}/emergency`,
  }, 
});
