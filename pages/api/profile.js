// Request
// /1/user/[user-id]/profile.json

import { getCookie } from 'cookies-next'

/* 
    Response
    {
    "user": {
      "age": 28,
      "ambassador": false,
      "autoStrideEnabled": true,
      "avatar": "https://asset-service.fitbit.com/4eb6ae1f-1df6-11b2-7f7f-7f7f7f7f7f7f_profile_100_square.jpg",
      "avatar150": "https://asset-service.fitbit.com/4eb6ae1f-1df6-11b2-7f7f-7f7f7f7f7f7f_profile_150_square.jpg",
      "avatar640": "https://asset-service.fitbit.com/4eb6ae1f-1df6-11b2-7f7f-7f7f7f7f7f7f_profile_640_square.jpg",
      "averageDail`ySteps": 11730,
      "challengesBeta": true,
      "clockTimeDisplayFormat": "12hour",
      "corporate": false,
      "corporateAdmin": false,
      "dateOfBirth": "1994-11-09",
      "displayName": "Keyan",
      "displayNameSetting": "name",
      "distanceUnit": "en_US",
      "encodedId": "2S8VWR",
      "features": {
        "exerciseGoal": true
      },
      "firstName": "Keyan",
      "foodsLocale": "en_GB",
      "fullName": "Keyan",
      "gender": "MALE",
      "glucoseUnit": "en_US",
      "height": 182.9,
      "heightUnit": "en_US",
      "isBugReportEnabled": false,
      "isChild": false,
      "isCoach": false,
      "languageLocale": "en_GB",
      "lastName": "",
      "legalTermsAcceptRequired": true,
      "locale": "en_GB",
      "memberSince": "2014-06-26",
      "mfaEnabled": false,
      "offsetFromUTCMillis": 0,
      "sdkDeveloper": true,
      "sleepTracking": "Normal",
      "startDayOfWeek": "MONDAY",
      "strideLengthRunning": 107.7,
      "strideLengthRunningType": "auto",
      "strideLengthWalking": 75.9,
      "strideLengthWalkingType": "auto",
      "swimUnit": "en_US",
      "temperatureUnit": "METRIC",
      "timezone": "Europe/London",
      "topBadges": [
        {
          "badgeGradientEndColor": "B0DF2A",
          "badgeGradientStartColor": "00A550",
          "badgeType": "DAILY_STEPS",
          "category": "Daily Steps",
          "cheers": [],
          "dateTime": "2019-05-20",
          "description": "40,000 steps in a day",
          "earnedMessage": "Congrats on earning your first Cleats badge!",
          "encodedId": "228TLJ",
          "image100px": "https://www.gstatic.com/fitbit/badge/images/badges_new/100px/badge_daily_steps40k.png",
          "image125px": "https://www.gstatic.com/fitbit/badge/images/badges_new/125px/badge_daily_steps40k.png",
          "image300px": "https://www.gstatic.com/fitbit/badge/images/badges_new/300px/badge_daily_steps40k.png",
          "image50px": "https://www.gstatic.com/fitbit/badge/images/badges_new/badge_daily_steps40k.png",
          "image75px": "https://www.gstatic.com/fitbit/badge/images/badges_new/75px/badge_daily_steps40k.png",
          "marketingDescription": "You've walked 40,000 steps  And earned the Cleats badge!",
          "mobileDescription": "You earned the Cleats badge for this massive step tally and gained a serious amount of traction.",
          "name": "Cleats (40,000 steps in a day)",
          "shareImage640px": "https://www.gstatic.com/fitbit/badge/images/badges_new/386px/shareLocalized/en_US/badge_daily_steps40k.png",
          "shareText": "I took 40,000 steps and earned the Cleats badge! #Fitbit",
          "shortDescription": "40,000 steps",
          "shortName": "Cleats",
          "timesAchieved": 1,
          "value": 40000
        },
        {
          "badgeGradientEndColor": "00D3D6",
          "badgeGradientStartColor": "007273",
          "badgeType": "LIFETIME_DISTANCE",
          "category": "Lifetime Distance",
          "cheers": [],
          "dateTime": "2021-06-27",
          "description": "2,500 lifetime miles",
          "earnedMessage": "Whoa! You've earned the Monarch Migration badge!",
          "encodedId": "22B8MJ",
          "image100px": "https://www.gstatic.com/fitbit/badge/images/badges_new/100px/badge_lifetime_miles2500.png",
          "image125px": "https://www.gstatic.com/fitbit/badge/images/badges_new/125px/badge_lifetime_miles2500.png",
          "image300px": "https://www.gstatic.com/fitbit/badge/images/badges_new/300px/badge_lifetime_miles2500.png",
          "image50px": "https://www.gstatic.com/fitbit/badge/images/badges_new/badge_lifetime_miles2500.png",
          "image75px": "https://www.gstatic.com/fitbit/badge/images/badges_new/75px/badge_lifetime_miles2500.png",
          "marketingDescription": "By reaching 2,500 lifetime miles, you've earned the Monarch Migration badge!",
          "mobileDescription": "Every year the monarch butterfly migrates that same number of miles to warmer climates.",
          "name": "Monarch Migration (2,500 lifetime miles)",
          "shareImage640px": "https://www.gstatic.com/fitbit/badge/images/badges_new/386px/shareLocalized/en_US/badge_lifetime_miles2500.png",
          "shareText": "I covered 2,500 miles with my #Fitbit and earned the Monarch Migration badge.",
          "shortDescription": "2,500 miles",
          "shortName": "Monarch Migration",
          "timesAchieved": 1,
          "unit": "MILES",
          "value": 2500
        },
        {
          "badgeGradientEndColor": "FFDB01",
          "badgeGradientStartColor": "D99123",
          "badgeType": "DAILY_FLOORS",
          "category": "Daily Climb",
          "cheers": [],
          "dateTime": "2019-04-18",
          "description": "300 floors in a day",
          "earnedMessage": "Congrats on earning your first Waterfall badge!",
          "encodedId": "22984B",
          "image100px": "https://www.gstatic.com/fitbit/badge/images/badges_new/100px/badge_daily_floors300.png",
          "image125px": "https://www.gstatic.com/fitbit/badge/images/badges_new/125px/badge_daily_floors300.png",
          "image300px": "https://www.gstatic.com/fitbit/badge/images/badges_new/300px/badge_daily_floors300.png",
          "image50px": "https://www.gstatic.com/fitbit/badge/images/badges_new/badge_daily_floors300.png",
          "image75px": "https://www.gstatic.com/fitbit/badge/images/badges_new/75px/badge_daily_floors300.png",
          "marketingDescription": "You've climbed 300 floors to earn the Waterfall badge!",
          "mobileDescription": "Looks like you've gone overboard in the most awesome way!",
          "name": "Waterfall (300 floors in a day)",
          "shareImage640px": "https://www.gstatic.com/fitbit/badge/images/badges_new/386px/shareLocalized/en_US/badge_daily_floors300.png",
          "shareText": "I climbed 300 flights of stairs and earned the Waterfall badge! #Fitbit",
          "shortDescription": "300 floors",
          "shortName": "Waterfall",
          "timesAchieved": 1,
          "value": 300
        },
        {
          "badgeGradientEndColor": "B0DF2A",
          "badgeGradientStartColor": "00A550",
          "badgeType": "LIFETIME_FLOORS",
          "category": "Lifetime Climb",
          "cheers": [],
          "dateTime": "2019-08-17",
          "description": "8,000 lifetime floors",
          "earnedMessage": "Yipee! You've earned the Cloud badge!",
          "encodedId": "228TK5",
          "image100px": "https://www.gstatic.com/fitbit/badge/images/badges_new/100px/badge_lifetime_floors8k.png",
          "image125px": "https://www.gstatic.com/fitbit/badge/images/badges_new/125px/badge_lifetime_floors8k.png",
          "image300px": "https://www.gstatic.com/fitbit/badge/images/badges_new/300px/badge_lifetime_floors8k.png",
          "image50px": "https://www.gstatic.com/fitbit/badge/images/badges_new/badge_lifetime_floors8k.png",
          "image75px": "https://www.gstatic.com/fitbit/badge/images/badges_new/75px/badge_lifetime_floors8k.png",
          "marketingDescription": "By climbing 8000 lifetime floors, you've earned the Cloud badge!",
          "mobileDescription": "We're on cloud nine thinking about this awesome achievement!",
          "name": "Cloud (8,000 lifetime floors)",
          "shareImage640px": "https://www.gstatic.com/fitbit/badge/images/badges_new/386px/shareLocalized/en_US/badge_lifetime_floors8k.png",
          "shareText": "I climbed 8,000 floors with my #Fitbit and earned the Cloud badge.",
          "shortDescription": "8,000 floors",
          "shortName": "Cloud",
          "timesAchieved": 1,
          "value": 8000
        }
      ],
      "waterUnit": "METRIC",
      "waterUnitName": "ml",
      "weight": 98.1,
      "weightUnit": "METRIC"
    }
  }
  */

export default async function handler(req, res) {
  const accessToken = getCookie('_wd_access_token', { req, res })

  const data = await fetch('https://api.fitbit.com/1/user/-/profile.json', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const json = await data.json()
  res.status(200).json(json)
}
