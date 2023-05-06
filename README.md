similar to handling events in regular HTML, but with a few key differences. In this lesson, we will learn how to handle events in React using functional components.

## Event Handling Syntax

- The syntax for handling events in React is similar to a regular JavaScript project. However, instead of using the `addEventListener` method or the `onclick` html event, we use the camelCase naming convention. For example, instead of using `onclick`, we use `onClick`.

## Exercise: Handling Events

- Create a new functional component called Counter. This component should have a count state variable initialized to 0, and a button that increments the count by 1 each time it is clicked.

## Exercises:

1. Create a simple React app that displays a button and a message. When the button is clicked, the message should change to "Button clicked!".

2. Create a custom component called ToggleSwitch that displays a switch that can be turned on and off. The component should accept a handleToggle function prop that is called when the switch is toggled.

3. Modify the ToggleSwitch component from exercise 2 to accept an additional isOn boolean prop that determines the initial state of the switch. When the switch is toggled, the isOn prop should be updated to reflect the new state.
