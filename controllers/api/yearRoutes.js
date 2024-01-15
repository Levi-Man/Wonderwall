const router = require('express').Router();
const { getChart } = require('billboard-top-100');
// const { Year } = require('../../models');


router.get('/', async (req, res) => {
    try {
        // console.log(chart.songs[i].title);
        // console.log(chart.songs[i].artist);
        // console.log(chart.songs[i].cover);

        await getChart('hot-100', '1994-01-01', (err, chart) => {
            if (err) console.log(err);
            // console.log(chart.songs[0].title);
            const filteredChart = chart.songs.filter((c) => c.rank < 11)
            // console.log(filteredChart);
            res.render('partials/chart-details', {
                years: filteredChart
            })

        }
        )
        // console.log(chartData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;