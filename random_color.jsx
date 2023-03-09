// This selects a layer called ART
// Then finds pageItem called Sea_Salt
// Then selects all childerns which are compound items
// For each path item it randomly changes the color.

function assign_random_color() {
  var doc = app.activeDocument;
var layer = doc.layers.getByName("ART");

for (var i = 0; i < layer.pageItems.length; i++) {
  var item = layer.pageItems[i];
  if (item.name == "Sea_Salt") {
    for (var j =0; j < item.compoundPathItems.length; j++) {
      for (var k =0; k < item.compoundPathItems[j].pathItems.length; k++){
        pathRef = item.compoundPathItems[j].pathItems[k]
        var swatchIndex = Math.round(Math.random() * (doc.swatches.length - 1));
        pathRef.fillColor = doc.swatches[swatchIndex].color;
        pathRef.strokeColor = doc.swatches[swatchIndex].color;
      }
    }
    break
  }
}
}
assign_random_color()



