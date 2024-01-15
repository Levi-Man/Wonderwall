const router = require('express').Router();
const { getChart } = require('billboard-top-100');
// const { Year } = require('../../models');


router.get('/:id', async (req, res) => {
    try {
        // console.log(chart.songs[i].title);
        // console.log(chart.songs[i].artist);
        // console.log(chart.songs[i].cover);

        await getChart('hot-100', `${req.params.id}-01-01`, (err, chart) => {
            if (err) console.log(err);

            // console.log(chart.songs[0].title);

            const filteredChart = chart.songs.filter((c) => c.rank < 11);

            // console.log(filteredChart);
            const printYear = (req.params.id);

            res.render('partials/chart-details', {
                years: filteredChart, printYear
            })

        }
        )
        // console.log(chartData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;