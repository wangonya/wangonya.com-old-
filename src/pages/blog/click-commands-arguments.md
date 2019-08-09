---
title: Adding arguments to CLI commands
date: 2019-08-09
series: Building CLI Apps with Python
description: Understanding CLI arguments with Click
---

Arguments work very similary to [options](https://wangonya.com/blog/click-commands-options/). If you're familiar with functional programming, then you're familiar with arguments. The concept is the same in Click.

Let's edit our code a bit to see how we can integrate arguments.

```python
# helloworld.py

import click

@click.command()
@click.option('-c', '--case', type=click.Choice(['upper', 'lower']))
@click.argument('person', default='you')
def hello(case, person):
    response = "Hello World! Also, hey {} ☺️"
    if case == 'upper':
        click.echo(response.upper())
    elif case == 'lower':
        click.echo(response.lower())
    else:
        click.echo(response)
```
