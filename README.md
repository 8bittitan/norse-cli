# Norse

A CLI for scaffolding a node application with Mongoose as the ORM.

## Inspiration

This CLI is heavily based on the `rails` CLI from Ruby on Rails.

## API

```
norse model [modelName] [...fields]
```

Creates a new model with `modelName` as the name (`norse model Post` creates Post.js).

```
norse model Post field:type
```

Creates a `Post` model with `field` as the document attribute and `type` as the attribute type (String, Boolean, etc...). By default the field will have type `String` if not specified.

```
norse controller [controllerName]
```

Creates a new controller with the name being `controllerName`Controller (`norse controller post` creates postController.js).

```
norse controller post create update
```

Creates a `postController` with the methods of `create()` and `update()`. By default `index`, `create`, `show`, `update` and `destroy` are all created.

```
norse scaffold [modelName] [..fields]
```

Creates both a model and controller based on the `modelName` provided and `fields` provided. The default methods from controller command are added by default.

```
norse scaffold Post title description published_at:Date
```

Will create a model of `Post` with supplied fields and the controller of `postController` with default methods.
