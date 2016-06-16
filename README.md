#px-widget-cards [![Build Status](https://travis-ci.org/PredixDev/px-widget-cards.svg?branch=master)](https://travis-ci.org/PredixDev/px-widget-cards)

## Overview

px-widget-cards is a Predix UI component. Use the 'px-twoup', 'px-threeup', 'px-fourup' and 'px-sixup' components to create cards with two, three, four or six components laid out in a grid (see demo.html for usage and running example).

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line.

```
bower install px-widget-cards --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-widget-cards/px-widget-cards.html"/>
```

Finally, use the component in your application:

```
<px-twoup id="widgetsx2" widget-header="2 Widget Card" widget-icon="fa-eye">
  <div class=widget-1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
  </div>
  <div class=widget-2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
  </div>
</px-twoup>
```

or
```
<px-threeup id="widgetsx3" widget-header="3 Widget Card" widget-icon="fa-eye">
  <div class=widget-1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
  </div>
  <div class=widget-2>
    <p>Lorem ipsum dolor sit amet</p>
  </div>
  <div class=widget-3>
    <p>Lorem ipsum dolor sit amet</p>
  </div>
</px-threeup>
```

or
```
<px-fourup id="widgetsx4" widget-header="4 Widget Card" widget-icon="fa-eye">
  <div class=widget-1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
  </div>
  <div class=widget-2>
    <p>Lorem ipsum dolor sit amet, consectetur</p>
  </div>
  <div class=widget-3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
  </div>
  <div class=widget-4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</px-fourup>
```

or
```
<px-sixup id="widgetsx6" widget-header="6 Widget Card" widget-icon="fa-briefcase">
  <div class=widget-1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
  </div>
  <div class=widget-2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
  </div>
  <div class=widget-3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
  </div>
  <div class=widget-4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class=widget-5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
  </div>
  <div class=widget-6>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur</p>
  </div>
</px-sixup>
```

<br />
<hr />

## documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-widget-cards).

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ grunt sass
```

From the component's directory, to start a local server run:

```
$ grunt depserve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### DevMode
Devmode runs `grunt depserve` and `grunt watch` concurrently so that when you make a change to your source files and save them, your preview will be updated in any browsers you have opened and turned on LiveReload.
From the component's directory run:

```
$ grunt devmode
```

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-widget-cards/issues) to submit any bugs you might find.
