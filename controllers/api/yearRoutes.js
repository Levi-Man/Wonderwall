const router = require('express').Router();
const { getChart } = require('billboard-top-100');


router.get('/:id', async (req, res) => {
    try {

        await getChart('hot-100', `${req.params.id}-01-01`, (err, chart) => {
            if (err) console.log(err);

            const filteredChart = chart.songs.filter((c) => c.rank < 11);

            const printYear = (req.params.id);

            res.render('partials/chart-details', {
                years: filteredChart, printYear
            })

        }
        )
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;