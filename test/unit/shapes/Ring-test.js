suite('Ring', function() {

  // ======================================================
  test('add ring', function() {
      var stage = addStage();
      var layer = new Kinetic.Layer();
      var ring = new Kinetic.Ring({
          x: stage.getWidth() / 2,
          y: stage.getHeight() / 2,
          innerRadius: 50,
          outerRadius: 90,
          fill: 'green',
          stroke: 'black',
          strokeWidth: 4,
          draggable: true
      });
      layer.add(ring);
      stage.add(layer);
      assert.equal(ring.getClassName(), 'Ring');

      var trace = layer.getContext().getTrace();
      assert.equal(trace, 'clearRect(0,0,578,200);save();transform(1,0,0,1,289,100);beginPath();arc(0,0,50,0,6.283,false);moveTo(90,0);arc(0,0,90,6.283,0,true);closePath();fillStyle=green;fill();lineWidth=4;strokeStyle=black;stroke();restore();');
   });
});