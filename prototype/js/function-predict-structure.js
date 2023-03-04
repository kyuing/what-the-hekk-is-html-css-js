//the function predict() in structure
async function predict() {
 
  // prediction
  let image = document.getElementById('face-image');
  const prediction = await model.predict(image, false); 

  // chart
  google.load();
  google.setOnLoadCallback(initChart);

  function initChart() {
    drawChart(data, options);
  }

  function drawChart(data, options) {}
}