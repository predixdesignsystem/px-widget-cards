/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe('Set widget card title and icon properties', done =>{
  let cardFixture,
      cardEl,
      headerEl,
      iconEl;

  before(()=>{
    chai.should();
  });
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

describe('Set widget card content', done =>{
  let cardFixture,
      slot1,
      slot2;
  before(done=>{
    chai.should();
    cardFixture = fixture('px-widget-card-content-test-fixture');

    flush(()=>{
      slot1 = Polymer.dom(cardFixture).querySelector('[slot=widget-1]')
      slot2 = Polymer.dom(cardFixture).querySelector('[slot=widget-2]')
      done();
    });
  });

  it('slots should exist', ()=>{
    slot1.should.exist;
    slot2.should.exist;
  });

  it('slots should contain content', ()=>{
    slot1.textContent.should.equal('IPA');
    slot2.textContent.should.equal('Stout');
  });

});
