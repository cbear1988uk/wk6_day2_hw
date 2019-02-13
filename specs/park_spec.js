const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  beforeEach(function(){
    park = new Park('Jurassic Park', 25)
  });

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.price
    assert.strictEqual(actual, 25)
  });

  describe('dinosaurs', function(){

    it('should start with no dinosaurs', function(){
      const actual = park.dinosaurs
      assert.deepStrictEqual(actual, [])
    })

    it('should have a collection of dinosaurs', function(){
      const actual = park.countDinosaurs()
      assert.strictEqual(actual, 0)
    });

    it('should be able to add a dinosaur to its collection', function(){
      park.addDinosaurs('T-Rex')
      const actual = park.countDinosaurs()
      assert.strictEqual(actual, 1)
    });

    it('should be able to remove a dinosaur from its collection', function(){
      park.addDinosaurs('Spinosaurus')
      park.addDinosaurs('Velociraptor')
      park.removeDinosaur('Spinosaurus')
      const expected = ['Velociraptor']
      const actual = park.dinosaurs
      assert.deepStrictEqual(actual, expected)
    });

    it('should be able to find the dinosaur that attracts the most visitors');

    it('should be able to find all dinosaurs of a particular species');

    it('should be able to remove all dinosaurs of a particular species', function(){
      park.addDinosaurs('Allosaurus')
      park.addDinosaurs('Brontosaurus')
      park.removeAllDinosaurs()
      const actual = park.countDinosaurs()
      assert.strictEqual(actual, 0)
    });

  });

    describe('visitors', function(){

      it('should start with no visitors', function(){
        const actual = park.visitors
        assert.deepStrictEqual(actual, [])
      })


    })

});
