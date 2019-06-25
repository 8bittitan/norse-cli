# Norse

A CLI for scaffolding Mongoose models

## Inspiration

This CLI is heavily based on the `rails g` command in Ruby on Rails.

## API

```
norse g [modelName]
```

Creates a new model with `modelName` as the name (`norse g Post` creates Post.js).

```
norse g Post field:type
```

Creates a `Post` model with `field` as the document attribute and `type` as the attribute type (String, Boolean, etc...)
