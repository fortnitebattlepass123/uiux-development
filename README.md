# Development

### Link to Deployed Website
If you used the stencil code, this is `https://fortnitebattlepass123.github.io/uiux-development`

### Goal and Value of the Application
The goal of this application is to provide an interface for Stardew Valley
players to browse and aggregate furniture for their virtual homes. This interface
provides value by allowed users to quickly sort/filter furniture and view the 
price of their final aggregation.

### Usability Principles Considered
I use thorough case checking to prevent user error. There is a limited domain
of input the user can give to the system, preventing any error. Additionally,
the interface emphasizes recognition over recall by making all menu items 
visible. Finally, the interface is minimalist and does not include any unneeded
info.

### Organization of Components
Within App.js, there is a DecorItem component that is mapped to every item 
in furniture.json. Below that, there is a Cart component which dynamically creates
and deletes CartItem components.

### How Data is Passed Down Through Components
Data is passed to components using props. The DecorItem component gets the entire
json item and also an addToCart function. The Cart component gets the current cart,
the total price of the cart, and a removeDecor function. Each CartItem gets the item
and the removeDecor function.

### How the User Triggers State Changes
The user triggers state changes by filtering, sorting, removing and adding to 
the cart. The interface uses useEffect to watch for state changes on the filtering
and sorting values and dynamically stacks on the filters and sorts. 

