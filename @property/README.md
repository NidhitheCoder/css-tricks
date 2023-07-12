# @proprty

- The @property css at-rule is part of the css houdini umbrella of APIs, it allows developers to explicitly define their css custom properties, allowing for property type checking, setting default values, and define whether a property can inherit values or not.

## At-rule

- At-rule are css statements that instruct css how to behave. they begin with an at sign, '@' (u+0040 COMMERCIAL AT), followed by an identifier and includes everything up to the next semicolon, ';' (U+003B SEMICOLON), or the next css block, whichever comes first.

#### syntax

```
    general structure
    @identifier (RULE);

    Example: tells browser to use UTF-8 character set

    @charset "utf-8";

```

## css Houdini

- Houdini is a set of low-level API's that exposes parts of the CSS engine, giving developers the power to extend CSS by hooking into the styling and layout process of a browser's rendering engine. houdini is a group of APIs that give developers direct access to the CSS Object Model(CSSOM), enabling developers to write code the browser can parse as CSS, thereby creating new CSS features without waiting for them to be implemented natively in browsers.

#### Advantages

- Houdini is faster than using js for style changes
- houdini code doesn't wait for that first rendering cycle to be complete.
- Helps to creating renderable and understandable styles.
- Houdini providers an object-based API for working with CSS values in js

- A feature of CSS houdini is the worklet. with worklets , you can create modular CSS, requiring a single line of javascript to import configurable components: no pre-processors or javascript frameworks needed.

Example

````li {
  background-image: paint(myComponent, stroke, 10px);
  --highlights: blue;
  --lowlights: green;
}```
````
