const expect = require('chai').expect;
var {window, loadWindow} = require('../libs/testHelper');
const expectedPlanets = require('./expected-planets.js');

var $;

describe('AstroWeight Calculator', () => {
  beforeEach(() => {
    window = loadWindow();
    $ = require('jquery')(window);
  });

  describe('HTML', () => {
    it('should contain an <input> element with an id of "userWeight"', () => {
      const inputElement = $('#userWeight')[0];
      expect(inputElement, 'Input Element').to.exist;
    });

    it('should contain a <select> element with an id of "planets"', () => {
      const selectElement = $('#planets')[0];
      expect(selectElement, 'Select dropdown element').to.exist;
    });

    it('should contain a <p> element with an id of "output"', () => {
      const paragraphElement = $('#output')[0];
      expect(paragraphElement, 'Paragraph element').to.exist;
    });

    it('should contain a <button> element with an id of "calculateButton"', () => {
      const paragraphElement = $('#calculateButton')[0];
      expect(paragraphElement, 'Paragraph element').to.exist;
    });
  });

  describe('Integration', () => {
    it('should print valid output when Pluto is selected and user weight is 100', (done) => {
      $("#planets option[value='0.06']").attr('selected', 'selected');
      $("#userWeight").val(100);
      $("#calculateButton").click();
      expect($("#output").text(), 'Output text').to.equal('If you were on Pluto, you would weigh 6lbs!');
      done();
    });

    it('should print valid output when Earth is selected and user weight is 100', (done) => {
      $("#planets option[value='1']").attr('selected', 'selected');
      $("#userWeight").val(100);
      $("#calculateButton").click();
      expect($("#output").text(), 'Output text').to.equal('If you were on Earth, you would weigh 100lbs!');
      done();
    });
  });
});