---
title: norris-cli
date: 2018-12-27T09:24:39+03:00
---
Best feeling I've had this year: seeing something I did listed on PyPi 😊 🎉

It's a really simple cli app that get's a random joke from [chucknorris.io](https://api.chucknorris.io/) every time you run it. I made it with [Click](https://click.palletsprojects.com/en/7.x/)

## Install it
```
pip3 install norris-cli
```
**Make sure you install the pip3 version.**

## How to use
```
$ norris-cli --help
Usage: norris-cli [OPTIONS]

  If I had a nickel for every Chuck Norris joke out there...

Options:
  -c, --category [dev|movie|food|celebrity|science|sport|political|religion|animal|history|music|travel|career|money|fashion]
  --help                          Show this message and exit.

```

### Get a random joke
```
$ norris-cli
Chuck Norris doesn't call the wrong number. You answer the wrong phone.
```

### Specify a category
_You can see all available categories by running `norris-cli --help`_
```
$ norris-cli -c dev
Chuck Norris can't test for equality because he has no equal.
```

```
$ norris-cli -c food
Chuck Norris' favorite cereal is Kellogg's Nails 'N' Gravel.
```

Enjoy!

![approval](https://media.giphy.com/media/3hvmlYNsOTFWE/giphy.gif)
