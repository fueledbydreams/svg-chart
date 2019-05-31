const { parse } = require("url");

module.exports = (req, res) => {
  const { query } = parse(req.url, true);
  const percent = parseInt(query.percent, 10) || null;
  const offset = 100 - percent;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink" viewBox="0 0 42 42" class="pie-donut" fill="none" stroke-width="2">
        <circle class="donut-hole" cx="21" cy="21" r="15.91549430918952" fill="#fff"></circle>
        <circle class="donut-ring" cx="21" cy="21" r="15.91549430918952" fill="transparent" stroke="#d2d3d4" stroke-width="3"></circle>
        <circle class="donut-segment" cx="21" cy="21" r="15.91549430918952" fill="transparent" stroke="#ce4b99" stroke-width="3" stroke-dasharray="${percent} ${offset}" stroke-dashoffset="25"></circle>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.end(svg);
};
