const { getChart } = require('billboard-top-100');

getChart('hot-100', '1994-01-01', (err, chart) => {
    if (err) console.log(err);
    for (let i = 0; i < 10; i++) {
        // console.log(chart.songs[i].title);
        // console.log(chart.songs[i].artist);
        // console.log(chart.songs[i].cover);
        let charter = document.getElementById("chart-list");
        let chartItemHtml =
            `<li class="chart-item" id="chart-${i}>
            <p>${chart.songs[i].title}></p>
            <p>${chart.songs[i].artist}</p>
            <img src="${chart.songs[i].cover}" alt="${chart.songs[i].title}" height="35" width="35">
            </li>`;
        charter.append(chartItemHtml);
    }
});