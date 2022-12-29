const { google } = require("googleapis");

const scopes = "https://www.googleapis.com/auth/analytics.readonly";

const jwt = new google.auth.JWT(
  process.env.CLIENT_EMAIL,
  null,
  process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes
);

const view_id = "Your_View_ID";

async function getViews() {
  try {
    await jwt.authorize();

    const response = await google.analytics("v3").data.ga.get({
      auth: jwt,
      ids: "ga:" + view_id,
      "start-date": "30daysAgo",
      "end-date": "today",
      metrics: "ga:pageviews",
    });

    console.log(response);

  } catch (err) {
    console.log(err);
  }
};