# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Examine this code:

```js
class Shape {
  constructor(type) {
    this.type = type;
  }
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('circle');
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super('square');
    this.side = side;
  }
  getArea() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(5), new Square(4), new Circle(3)];
const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
```

Explain how this code demonstrates **polymorphism**. Why can we call `getArea()` on each shape without checking what type of shape it is?

## Response 1
In the code shown above, both `Circle` and ` Square` are **subclasses** of `Shape`. We are able to call the `getArea()` **method** on any shape because they are all inheriting this method from their **superclass**, and this means the method will always exist in the **prototype chain**, it is just being redefined inside each new subclass.


---

## Prompt 2

Look at this code:

```js
class Media {
  constructor(title) {
    this.title = title;
  }
  play() { 
    return `Playing media: ${this.title}`; 
  }
}

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
  playSong() {
    return `♪ Playing "${this.title}" by ${this.artist}`;
  }
}

class Podcast {
  constructor(title, host) {
    this.title = title;
    this.host = host;
  }
  playPodcast() {
    return `🎙️ Playing podcast "${this.title}" hosted by ${this.host}`;
  }
}

const playlist = [
  new Song("Thriller", "Michael Jackson"),
  new Podcast("CodeNewbie", "Saron Yitbarek"),
  new Media("voice-memo.mp3")
];

playlist.forEach(item => {
  if (item instanceof Song) {
    console.log(item.playSong());
  } else if (item instanceof Podcast) {
    console.log(item.playPodcast());
  } else {
    console.log(item.play());
  }
});
```

This code works, but it has some problems. Answer the following:

1. Rewrite the `Song` and `Podcast` classes to use inheritance and polymorphism. What changes would you make?
2. After your changes, rewrite the `playlist.forEach()` loop. How does polymorphism simplify this code?
3. Explain what would happen if you wanted to add a new `Video` class. Compare how much work it would take with the original code versus your improved version.

## Response 2

My rewritten code would look like this :

```js
class Media {
  constructor(title) {
    this.title = title;
  }
  play() { 
    return `Playing media: ${this.title}`; 
  }
}

class Song extends Media {
  constructor(title, artist) {
    // Making use of the super keyword to inherit from Media
    super(title)
    this.artist = artist;
  }
  // Using the same method name as the superclass, in order to redefine an existing method instead of creating a new one.
  play() {
    return `♪ Playing "${this.title}" by ${this.artist}`;
  }
}

class Podcast extends Media {
  constructor(title, host) {
    super(title)
    this.host = host;
  }
  play() {
    return `🎙️ Playing podcast "${this.title}" hosted by ${this.host}`;
  }
}

const playlist = [
  new Song("Thriller", "Michael Jackson"),
  new Podcast("CodeNewbie", "Saron Yitbarek"),
  new Media("voice-memo.mp3")
];

playlist.forEach(item => {
   console.log(item.play());
});
```

Adding a new `Video` **class** would be simpler using my modified code, it would  **extend** the `Media` class and modify the `play()` **according** to what is trying to be achieved in this new class. Inside the **constructor** we would use the **super** keyword to inherit the **properties** from the **superclass** and that would be all.