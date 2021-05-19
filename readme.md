# OOP Classroom

This project will require you to build classes for objects you might find in a Galvanize classroom! You will build five classes:

* Computer
* Desk
* Marker
* Room
* Student

The tests best describe what properties and methods to build for each.

## Setup

1. Fork and clone this repository
1. Run `npm install` or `yarn`
1. Run the tests with `npm test`


<!--
  Computer
    new Computer()
      ✓ should accept the following arguments: name, operatingSystem, processor, memory, graphics
      1) should have properties by the same name
      2) should have a property of `on` which defaults to false
    .power()
      3) should turn the computer `on` if it is off
      4) should turn the computer `off` if it is on -->

  <!-- Desk
    new Desk()
      - should accept the following arguments: length, width, height, isWhiteboard
      - should have properties by the same name
      - should have a property of `content` which defaults to an empty string
    .write()
      - should add the inputted string to the `content` property
      - should allow for multiple writes
    .wipe()
      - should clear the `content` if `isWhiteboard` is set to true
      - should *not* clear the `content` if `isWhiteboard` is set to false

  Marker
    new Marker()
      - should accept the following arguments: size, color, remainingInk
      - should have properties by the same name
    .write()
      - should decrement `remainingInk` by the number of characters written
      - should not decrement any characters that are spaces
      - should return the word that is inputted
      - if the marker runs out of ink, it should only return the number of characters equal to remaining ink
      - if the marker runs out of ink, it can still write spaces

  Room
    new Room()
      - should accept the following arguments: name, description
      - should have properties by the same name
      - should have a property of `contents` which defaults to an empty array
    .add()
      - should add the given item to the room
      - should be chainable (e.g. room.add(1).add(2).add(3))
    .has()
      - should return true if the given reference is in the array
      - should return false if the given reference is not in the array -->

  Student
    <!-- new Student()
      - should accept the following arguments: name, skillLevel
      - should have properties by the same name
      - should have a property of `assignments` which defaults to an empty array
    .study()
      - should increase the student's `skillLevel` by 1
      - should cannot increase the student's `skillLevel` above 100
      - should be chainable (e.g. student.study().study().study()) -->
    .doHomework()
      <!-- - accepts an object that includes a `skillLevel` key and marks it as complete (i.e. adds a key of `completed` with a value of `true` to the homework) if the student's skill level is above the inputted homework's `skillLevel`
      - marks homework as incomplete (i.e. `complete: false`) if the skillLevel is too high
      - adds the homework to the `assignments` array whether or not it is completed
      - does not add the homework to the `assignments` array if it does not have a `skillLevel`
      - does not add the homework to the `assignments` array if it's `skillLevel` is below 1
      - does not add the homework to the `assignments` array if it's `skillLevel` is above 100 -->
      <!-- - if no argument is added, attempts to complete all incomplete homework and will complete it if the `skillLevel` is higher
      - if no argument is added, attempts to complete all incomplete homework but it will stay incomplete if `skillLevel` is still not enough -->

      if no argument is added, attempts to complete all incomplete homework.  If `skillLevel` is higher, complete homework.  If lower, stay incomplete.