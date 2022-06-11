// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  console.log({ session });
  const secret = process.env.NEXTAUTH_SECRET;

  const { token } = await getToken({ req, secret, encryption: true });

  console.log("helllllooo");
  console.log(token);
  const data = await fetch(
    "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token?.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        aggregateBy: [
          {
            dataTypeName: "com.google.step_count.delta",
            dataSourceId:
              "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
          },
        ],
        bucketByTime: { durationMillis: 86400000 },
        startTimeMillis: 1438705622000,
        endTimeMillis: 1439310422000,
      }),
    }
  );

  const json = await data.json();
  // console.log(json);

  res.status(200).json({ json });
}
