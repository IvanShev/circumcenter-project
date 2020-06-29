

var values = [[1,2],[5,3],[0,7]];   // initial coordinates of the triangle
var numIterations = 3;              // number of iterations



function circumcenter(ax,bx,cx,ay,by,cy) {

  var d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
  return [(((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d),(((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d)];
}

function iterate(values) {

  values_copy = JSON.parse(JSON.stringify(values));

  for (var j = 0; j < values_copy.length; j++) {
    for (var k = 0; k < values_copy.length; k++) {
      for (var m = 0; m < values_copy.length; m++) {
        if ( JSON.stringify(values_copy[j])!=JSON.stringify(values_copy[k]) &&
             JSON.stringify(values_copy[j])!=JSON.stringify(values_copy[m]) &&
             JSON.stringify(values_copy[k])!=JSON.stringify(values_copy[m]) ) {

          var new_point = circumcenter(values_copy[j][0],values_copy[k][0],values_copy[m][0],
                                   values_copy[j][1],values_copy[k][1],values_copy[m][1]);

          if (!values_copy.includes(new_point)) {
            values.push(new_point);
          }

        }
      }
    }
  }

  return values;
}

var new_values = iterate(values)
for (var i = 0; i < (numIterations-1); i++) {
  iterate(new_values);
}


var x_values = [];
var y_values = [];

for (var i = 0; i < new_values.length; i++) {
  x_values.push(new_values[i][0]);
  y_values.push(new_values[i][1]);
}



var scatter_trace = [{
    type: "scattergl",
    mode: "markers",
    marker: {
        size: 10,
        color: '#388DBD',
    },
    x: x_values,
    y: y_values,
}];

var layout_2d = {
    hovermode: false,
    dragmode: 'zoom',
    margin: {
   l: 20,
   r: 20,
   b: 20,
   t: 20,
   pad: 0
  },
    width: 700,
    height: 700,
}

Plotly.newPlot('circumcenter_graph', scatter_trace, layout_2d, {displayModeBar: false, displaylogo: false});