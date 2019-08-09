---
title: Prompting users for input
date: 2019-08-10
description: Building CLI Apps with Python - Getting input from users
series: Building CLI Apps with Python
---

Getting user input is an important part of any kind of application. Since we've already learned about [options](https://wangonya.com/blog/click-commands-options/), adding a user prompt to our hello world app should be a breeze. All we need to do is add `prompt=True` to the option decorator, so that it prompts the user for input if no option is passed in.

```python
# helloworld.py

import click

@click.command()
@click.option('-c', '--case',
              type=click.Choice(['upper', 'lower']),
              prompt=True)
@click.argument('person', default='you')
def hello(case, person):
    response = "Hello World! Also, hey {} ☺️".format(person)
    if case == 'upper':
        click.echo(response.upper())
    elif case == 'lower':
        click.echo(response.lower())
    else:
        click.echo(response)
```

Save and run the app:

```bash
(venv) $ hello
Case (upper, lower): upper
HELLO WORLD! ALSO, HEY YOU ☺️

(venv) $ hello sally
Case (upper, lower): lower
hello world! also, hey sally ☺️
```

You may also set a custom prompt string if you wish:

```python
# helloworld.py

import click

@click.command()
@click.option('-c', '--case',
              type=click.Choice(['upper', 'lower']),
              prompt='Please enter case')
@click.argument('person', default='you')
def hello(case, person):
    response = "Hello World! Also, hey {} ☺️".format(person)
    if case == 'upper':
        click.echo(response.upper())
    elif case == 'lower':
        click.echo(response.lower())
    else:
        click.echo(response)
```

The set string will now be displayed instead of the default prompt:

```bash
(venv) $ hello
Please enter case (upper, lower): upper
HELLO WORLD! ALSO, HEY YOU ☺️
```
