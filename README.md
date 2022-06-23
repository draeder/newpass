# Newpass
## Simple CLI utility that suggests a new cryptographically secure password
According to various password strength testers online, the randomly generated passwords produced by this utility would take the following amount of time for a computer to crack:

> 54 thousand trillion trillion trillion years

> 29 octodecillion years

> 1 duodecillion years

> 10000+ centuries

## Install
```js
$ npm i newpass -g
```

## Usage
### Generate a random password
Prints a random cryptographically secure password to the terminal

```js
$ newpass
```
### Generate a password from a SHA256 hash of a string
This option can be used to print a 'memorable' password to the terminal. Which is to say, the outputted password will always be the same if the passed in string is identical.

It requires a unique string longer than 8 characters with a mixture of upper and lower case, numbers and special characters. The password will always be the same if the passed in string is the same. 

While this option uses SHA256 hashing, it is less secure than generating a random password.

```js
$ newpass -s "Some unique string 123!"
```

## Issues
Please report any issues [here]("https://github.com/draeder/newpass/issues).