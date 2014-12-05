# Agile Development with BackBone

A boilerplate to start a BackBone webapp with Gulp automated tasks.
A simple application to show users (firstname, lastname, age), edit user and add new user

## Dependencies
- Backbone
- Underscore
- Require.js
- Bootstrap
- Fontawesome

## Usage
### Install global
```
$ npm install -g gulp
$ npm install -g bower
```

### Install local
```
$ bower install underscore
$ bower install backbone
$ bower install jquery
$ bower install bootstrap
```
### Configuration
```
Gulpfile.js -> Automated tasks
Packege.json -> Dependencies

```

Gulpfile.js tasks
- When there are changes in HTML, then browser it reload automatic
- Look for errors in js scripts and show its
- Developer server config
- Include libs installed by Bower

### Development mode
```
$ gulp

http://localhost:8080/
```



