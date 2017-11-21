chai.should();

describe('Set widget card title and icon properties', done =>{
  let cardFixture,
      cardEl,
      headerEl,
      iconEl;

  beforeEach(done=>{
    cardFixture = fixture('px-widget-card-attribute-test-fixture');
    flush(()=>{
      cardEl = Polymer.dom(cardFixture.root).querySelector('px-card');
      headerEl = Polymer.dom(cardEl.root).querySelector('header');
      iconEl = Polymer.dom(headerEl).querySelector('px-icon');
      done();
    });
  });
  it('should be able to set widget card title and render in the card', ()=>{
    cardFixture.attributes['widget-header'].value.should.equal('LRN2CODE');
    cardFixture.widgetHeader.should.equal('LRN2CODE');
    headerEl.textContent.trim().should.equal('LRN2CODE');
  });

  it('should be able to set widget card icon and render in the card', ()=>{
    cardFixture.attributes['widget-icon'].value.should.equal('px-fea:analysis');
    cardFixture.widgetIcon.should.equal('px-fea:analysis');
    iconEl.should.exist;
    iconEl.tagName.should.equal('PX-ICON');
    iconEl.icon.should.equal('px-fea:analysis');
  });
});
