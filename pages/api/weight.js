// Request
// GET	/1/user/[user-id]/body/log/weight/date/[date].json

// URI Arguments
// user-id	required	The encoded ID of the user. Use "-" (dash) for current logged-in user.
// date	required	The date in the format yyyy-MM-dd

// Request Headers
// authorization	required	Specify the token type and Fitbit user’s access token.
// Token type: Bearer
// accept	optional	The media type of the response content the client is expecting.
// Supported: application/json
// accept-language	optional	The measurement unit system to use for response values. See Localization.
// accept-locale	optional	The locale to use for response values. See Localization.

// Response
// {
//     "weight": [
//       {
//         "bmi": 25.91,
//         "date": "2019-03-01",
//         “fat”: 21
//         "logId": 1553067494000,
//         "source": "Aria",
//         "time": "07:38:14",
//         "weight": 200
//       }
//     ]
//   }

export default async function handler(req, res) {
  const data = await fetch('https://api.fitbit.com/1/user/-/body/log/weight/date/2022-08-01/1m.json', {
    headers: {
      Authorization: `Bearer ${req.cookies.accessToken}`,
    },
  })

  const json = await data.json()
  res.status(200).json(json)
}
