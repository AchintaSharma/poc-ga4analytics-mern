const mongoose = require('mongoose');
const Data = require('../models/data.model');
const constants = require('../utils/constants');

// Imports the Google Analytics Data API client library.
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

// Using a default constructor instructs the client to use the credentials specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.

const analyticsDataClient = new BetaAnalyticsDataClient();

// Runs a simple report.
async function runReport() {

    const results = [];
    const query = {
        property: `properties/${constants.propertyId}`,
        dateRanges: [
            {
                startDate: '2022-04-01',
                endDate: 'today',
            },
        ],
        dimensions: [
            {
                name: 'date',
            },
            {
                name: 'city'
            }
        ],
        metrics: [
            {
                name: 'activeUsers',
            },
            {
                name: 'sessions'
            }
        ],
        orderBys: [
            {
                dimension: {
                    dimensionName: 'date'
                },
                desc: true
            }
        ],
        pivots: [
            {
                fieldNames: [
                    "date"
                ]
            }
        ]
    }

    const [response] = await analyticsDataClient.runReport(query);

    response.rows.forEach(row => {
        const date = row.dimensionValues[0].value;
        const city = row.dimensionValues[1].value;
        const activeUsers = row.metricValues[0].value;
        const sessions = row.metricValues[1].value;
        results.push({
            date,
            city,
            activeUsers,
            sessions
        })
    });

    return results;
}

exports.getData = async (req, res) => {
    const results = await runReport();

    results.forEach(async element => {

        const query = {
            date: element.date,
            city: element.city,
            activeUsers: element.activeUsers,
            sessions: element.sessions
        }

        const dataFound = await Data.findOne(query);

        if (dataFound) {
            console.log("Data already exists in DB");
        }

        else if (!dataFound) {
            const dataStored = await Data.create(query);
            console.log("Data Stored: ", dataStored)
        }
    });

    return res.status(200).send(results);
}
