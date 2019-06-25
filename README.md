# Norse

A CLI for scaffolding Mongoose models

## Inspiration

This CLI is heavily based on the `rails` CLI from Ruby on Rails.

## API

```
norse model [modelName]
```

Creates a new model with `modelName` as the name (`norse model Post` creates Post.js).

```
norse model Post field:type
```

Creates a `Post` model with `field` as the document attribute and `type` as the attribute type (String, Boolean, etc...)
