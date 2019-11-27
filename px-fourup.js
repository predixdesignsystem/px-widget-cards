/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-card/px-card.js';
import './px-widget-cards-behavior.js';
import './css/px-widget-cards-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-widget-cards-styles"></style>

    <px-card header-text="{{widgetHeader}}" icon="{{widgetIcon}}" full-bleed="">
      <div class="layout layout--flush layout--widget">
        <div class="layout__item">
          <slot name="widget-1"></slot>
        </div>
        <div class="layout__item">
          <slot name="widget-2"></slot>
        </div>
      </div>
      <div class="layout layout--flush layout--widget">
        <div class="layout__item">
          <slot name="widget-3"></slot>
        </div>
        <div class="layout__item">
          <slot name="widget-4"></slot>
        </div>
      </div>
    </px-card>
`,

  is: 'px-fourup',
  behaviors: [PxWidgetCardsBehavior]
});
