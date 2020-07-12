// @TODO: YOUR CODE HERE

function renderGraph(data){
  console.log(data);
  //set the dimensions and margins of the graph
  var margin = {top: 10, right: 30, bottom: 40, left: 40},
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;
  // append the svg object to the body of the page
  var svg = d3.select("#scatter")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
             "translate(" + margin.left + "," + margin.top + ")");
   
      // Add X axis
      var x = d3.scaleLinear()
        .domain([0, 35])
        .range([ 0, width ]);
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

        // text label for the x axis
  svg.append("text")             
  .attr("transform",
        "translate(" + (width/2) + " ," + 
                       (height + margin.top + 20) + ")")
  .style("text-anchor", "middle")
  .text("Poverty");


      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, 35])
        .range([ height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y));
 
        // text label for the y axis
  svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x",0 - (height / 2))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("Smokers");   

        // Add dots
    
        svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
          .attr("cx", function (d) { return x(d.poverty); } )
          .attr("cy", function (d) { return y(d.smokes); } )
          .attr("r", 8.0)
          .style("fill", "#69b3a2")

      
      

         
}     
      d3.csv("assets/data/data.csv").then(function(demographics) {
      
      demographics.poverty = demographics.map(data => +data.poverty);
      demographics.healthcare = demographics.map(data => +data.healthcare);

      demographics.age = demographics.map(data => +data.age);
      demographics.smokes = demographics.map(data => +data.smokes);
     
      renderGraph(demographics);
      // console.log(data)

            
});
