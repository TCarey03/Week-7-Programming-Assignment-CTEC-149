Phase 1 - Automated Disco

Journal

I implemented the automated lighting using setInterval(). I created a function called randomColor() that generates random red, green, and blue values using Math.floor(Math.random() * 255). The values are combined into an RGB string and used as the background color for the two panels.

I used setInterval() with a delay of 1500 milliseconds, which causes the panel colors to change every 1.5 seconds.

Using a consistent interval is important because it keeps the lighting changes happening at a predictable rate. If the colors changed too quickly, the effect could be difficult to see, while a very long delay would make the disco feel less active.

---------------------------

Phase 2 - Interactive Floor

Journal

Event bubbling happens when an event starts on an element and then travels up through its parent elements. Since the Dancer is inside the Dance Floor, clicking the Dancer would normally also trigger the click event on the Dance Floor.

I used event.stopPropagation() inside the Dancer's click listener to stop the event from bubbling up to the Dance Floor. This allows the Dancer to have its own action without also triggering the Floor's click action.

The Dance Floor has its own click listener that changes the background to a random RGB color. The Dancer's listener changes the dancer's emoji and stops the event from reaching the Floor.

----------------------

Phase 3 - Dance Controller

Journal

I used a global window keyboard listener so that the keyboard controls can work regardless of which part of the page currently has focus. Instead of attaching the listener to one specific HTML element, the window can listen for keyboard events throughout the page.

I used event.key to determine which key was pressed. The Arrow Up, Arrow Down, Arrow Left, and Arrow Right keys each change the dancer to a different emoji representing a different dance move.

I also added the r key as a reset shortcut. When the user presses r, the Dance Floor returns to its original black color and clearInterval() stops the panel timer.

One challenge with keyboard input is that holding down a key can cause the keydown event to fire repeatedly. This could cause an action to happen many times instead of only once. For this project, the repeated events are not a major problem because changing the dancer's emoji repeatedly does not cause any serious issues.
