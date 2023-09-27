# SASS

### Sass(Syntactically awesome stylesheets)
- CSS Processor/extension
- We can create variables with prefix '$' in scss files.
- It is easy to read and write that other custom css properties.
- We can able to write styles with nesting.
- we can break our css into separate file and we can use them into a main.scss file.
- when we are starting with '_'a scss file name. that is not going to compile.
- In Sass we have functions and mixins . which allow us to create blocks of css that we can run wherever we want.
- We can inherit or extends styles in sass.
    eg:
   ```
    %message-shared {
        border: 1px solid #ccc;
        padding: 10px;
        color: #333;
    }

    .message {
        @extend %message-shared;
    }

    .success {
        @extend %message-shared;
        border-color: green;
    }

    .error {
        @extend %message-shared;
        border-color: red;
    }

    .warning {
        @extend %message-shared;
        border-color: yellow;
    }
    ```
- Also we can able to use operators and conditionals in sass.