# `Viewport`

Contains information about current Web App device viewport, its dimensions and
state.

## Init

```typescript  
import {Viewport} from 'twa-sdk';  
import {init} from 'twa-bridge';  
  
const viewport = new Viewport();  
// or with your bridge instance.  
const viewport = new Viewport({bridge: init()});  
```  

## Dimensions

`Viewport` instance contains information about viewport dimensions. We can
get current visible are height and width via `height` and `width` properties.

The application can display just the top part of the Web App, with its lower
part remaining outside the screen area. From this position, the user can "pull"
the Web App to its maximum height, while the bot can do the same by
calling `expand` method (use `isExpanded` prop to get current expansion state).
As the position of the Web App changes, the current height value of the visible
area will be updated in real time.

Please note that the refresh rate of this value is not sufficient to smoothly
follow the lower border of the window. It should not be used to pin interface
elements to the bottom of the visible area. It's more appropriate to use the
value of the `stableHeight` field for this purpose.

## Requesting viewport information

To get fresh viewport information, you could use static `request` function:

```typescript
import {Viewport} from 'twa-sdk';
import {init} from 'twa-bridge';

Viewport.request().then(console.log);
// or with bridge instance.
Viewport.request(init()).then(console.log);

// Output:
// { height: 122, isExpanded: false, width: 375, isStateStable: true }
```

## Events

Events available for [listening](../about#events):

- `heightChange: (height: number) => void`
- `widthChange: (width: number) => void`
- `stableHeightChange: (stableHeight: number) => void`
- `expansionChange: (isExpanded: boolean) => void`
