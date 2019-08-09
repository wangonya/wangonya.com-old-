---
title: Adding arguments to CLI commands
date: 2019-08-09
series: Building CLI Apps with Python
description: Understanding CLI arguments with Click
---

Arguments work very similarly to [options](https://wangonya.com/blog/click-commands-options/). If you're familiar with functional programming, then you're familiar with arguments. The concept is the same in Click.

Let's edit our code a bit to see how we can integrate arguments.

```python
# helloworld.py

import click

@click.command()
@click.option('-c', '--case', type=click.Choice(['upper', 'lower']))
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

Just like with commands and options, Click provides a decorator to add arguments.

```python
@click.argument('person', default='you')
```

We specify that `hello()` should expect an argument `person` to be passed in when it's called, and add a default value so that it's ok to call the command without passing in the argument.

Saving and running the app gives the following results:

```bash
(venv) $ hello  # no argument - default will be used
Hello World! Also, hey you ☺️

(venv) $ hello Meg  # Meg is the argument
Hello World! Also, hey Meg ☺️

(venv) $ hello chris -c upper   # combining arguments with options
HELLO WORLD! ALSO, HEY CHRIS ☺️
```

With options and arguments, you can add a lot of functionality to a single command.
