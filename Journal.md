Phase 1 - Automated Disco

Journal

I implemented the automated lighting using setInterval(). I created a function called randomColor() that generates random red, green, and blue values using Math.floor(Math.random() * 255). The values are combined into an RGB string and used as the background color for the two panels.

I used setInterval() with a delay of 1500 milliseconds, which causes the panel colors to change every 1.5 seconds.

Using a consistent interval is important because it keeps the lighting changes happening at a predictable rate. If the colors changed too quickly, the effect could be difficult to see, while a very long delay would make the disco feel less active.
