// /1/user/[user-id]/activities/date/[date].json

// Request

const demoMock = {
  activities: [
    {
      activityId: 90009,
      activityParentId: 90009,
      activityParentName: 'Run',
      calories: 72,
      description: 'Running - 5 mph (12 min/mile)',
      distance: 0.685729,
      duration: 421000,
      hasActiveZoneMinutes: true,
      hasStartTime: true,
      isFavorite: false,
      lastModified: '2022-12-11T16:56:21.000Z',
      logId: 52523797620,
      name: 'Run',
      startDate: '2022-12-11',
      startTime: '16:32',
      steps: 779,
    },
    {
      activityId: 90013,
      activityParentId: 90013,
      activityParentName: 'Walk',
      calories: 292,
      description: 'Walking less than 2 mph, strolling very slowly',
      duration: 1947000,
      hasActiveZoneMinutes: true,
      hasStartTime: true,
      isFavorite: false,
      lastModified: '2022-12-11T22:05:16.000Z',
      logId: 52566777244,
      name: 'Walk',
      startDate: '2022-12-11',
      startTime: '21:30',
      steps: 2968,
    },
    {
      activityId: 90013,
      activityParentId: 90013,
      activityParentName: 'Walk',
      calories: 275,
      description: 'Walking less than 2 mph, strolling very slowly',
      duration: 2151000,
      hasActiveZoneMinutes: true,
      hasStartTime: true,
      isFavorite: false,
      lastModified: '2022-12-11T23:02:23.000Z',
      logId: 52566844644,
      name: 'Walk',
      startDate: '2022-12-11',
      startTime: '22:09',
      steps: 2688,
    },
  ],
  goals: {
    activeMinutes: 30,
    caloriesOut: 3100,
    distance: 8.05,
    floors: 10,
    steps: 10000,
  },
  summary: {
    activeScore: -1,
    activityCalories: 1317,
    caloriesBMR: 1990,
    caloriesOut: 3209,
    distances: [
      {
        activity: 'Run',
        distance: 0.685729,
      },
      {
        activity: 'total',
        distance: 8.12,
      },
      {
        activity: 'tracker',
        distance: 8.12,
      },
      {
        activity: 'loggedActivities',
        distance: 0.685729,
      },
      {
        activity: 'veryActive',
        distance: 5.48,
      },
      {
        activity: 'moderatelyActive',
        distance: 0.52,
      },
      {
        activity: 'lightlyActive',
        distance: 2.09,
      },
      {
        activity: 'sedentaryActive',
        distance: 0,
      },
    ],
    elevation: 0,
    fairlyActiveMinutes: 16,
    floors: 0,
    heartRateZones: [
      {
        caloriesOut: 2063.07172,
        max: 120,
        min: 30,
        minutes: 1274,
        name: 'Out of Range',
      },
      {
        caloriesOut: 959.66146,
        max: 144,
        min: 120,
        minutes: 153,
        name: 'Fat Burn',
      },
      {
        caloriesOut: 153.70064,
        max: 174,
        min: 144,
        minutes: 11,
        name: 'Cardio',
      },
      {
        caloriesOut: 15.8953,
        max: 220,
        min: 174,
        minutes: 1,
        name: 'Peak',
      },
    ],
    lightlyActiveMinutes: 105,
    marginalCalories: 900,
    restingHeartRate: 73,
    sedentaryMinutes: 484,
    steps: 10549,
    veryActiveMinutes: 65,
  },
}

import { getCookie } from 'cookies-next'

export default async function handler(req, res) {
  const inDemo = getCookie('_wd_demo', { req, res })

  if (inDemo) {
    res.status(200).json(demoMock)
    return
  }

  const accessToken = getCookie('_wd_access_token', { req, res })

  const data = await fetch('https://api.fitbit.com/1/user/-/activities/date/2022-12-11.json', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const json = await data.json()

  res.status(200).json(json)
}
