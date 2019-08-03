---
title: Setting up your development environment
date: 2019-08-02
description: Setting up Python 3.x, pip, Virtualenv and Click
series: Building CLI Apps with Python
---

In this post, we'll cover the very basics of working with Python and Click to create a CLI app. We'll install Python 3, set up our development environment, install Click, and create a `hello-world` app.

## Python 3.x
Getting started with Python is easy. Most <sup>*</sup>nix systems come with Python pre-installed. We'll be using Python 3. To check which version of Python you have, open up your terminal and run `python -V`. You should get an output similar to this:

```bash
Python 2.7.10
```

This means the default Python version installed on my computer is `2.7.10`. Most Macs ship with Python 2 by default. If you got a `3.x.x`, then you're good to go. After installing Python 3, running `python3 -V` outputs:

```bash
Python 3.7.3
```

If you don't have Python installed, you can head over to [python.org](https://www.python.org/downloads/), download the appropriate installer for your system, and run it. This step is necessary if you're on Windows.

## pip
`pip` is a package manager for Python. It allows us to install libraries and dependencies that we'll need to use for our project. It comes pre-installed with Python. To check if you have it, you can run `pip -V` or `pip3 -V`. You should see something like:

```bash
pip 19.0.3 from /usr/local/lib/python3.7/site-packages/pip (python 3.7)
```

## Virtualenv
When working on your Python projects, it's always a good idea to create isolated environments to work in. This is because different projects will require different dependencies or different versions of those dependencies. Installing these globally will be hard to manage and will just mess up your system. Installing them in a project's environment keeps things clean. There's a couple of options to deal with environments in Python but we'll focus on `virtualenv`.

We're going to create a new directory and create a virtual environment in it. On your terminal, run:

```bash
$ mkdir hello-world-cli && cd hello-world-cli
```

The command above creates a new directory called `hello-world-cli` and enters that directory.

Next, we'll install `virtualenv` using `pip` and create our virtual environment.

```bash
$ pip3 install virtualenv
```

```bash
$ virtualenv venv
```

We now have a Python virtual environment in our directory. To use it, we need to activate it by running:

```bash
$ source venv/bin/activate
(venv) $
```

You'll notice the change in your terminal prompt when the environment is activated. The environment name is prefixed at the prompt. That's how you know you're working in the environment.

## Click
Now that we have our environment ready, we can start working on our project. Python provides [a number of packages](https://docs.python-guide.org/scenarios/cli/) to help in creating CLI apps. We'll be using [Click](https://click.palletsprojects.com/en/7.x/), so we need to install it to get started.

```bash
(venv) $ pip install Click
```

That's all we need to get started.

### Hello World!
As usual, we'll start off with a "Hello World!" program.

Still in the `hello-world-cli` directory, create a file called `hello-world.py`:

```bash
(venv) $ touch hello-world.py
```

Open the file in your preferred text editor and add this code:

```python
import click

@click.command()
def hello():
    click.echo('Hello World!')

if __name__ == '__main__':
    hello()
```

Let's examine what's happening at each line.

```python
import click
```

Here, we import `click` so we can use it to create our commands.

```python
@click.command()
```

Whenever you see something on top of a function with an `@` symbol in Python, that's a decorator. Without going into a lot of details on decorators, it's enough to understand (for now) that they simply modify the behavior of the functions they "decorate". Click uses the concept of decorators to convert Python functions into commands that can be directly executed through the terminal. The decorator here converts `hello()` into a command. We'll learn more about commands later.

```python
def hello():
```

This is how we define functions in Python.

```python
    click.echo('Hello World')
```

Calling `hello()` will run `click.echo('Hello World')` which displays the text "Hello World!" on the terminal.

```python
if __name__ == '__main__':
```

This is the main entry point of our script.

```python
    hello()
```

This invokes our function/command.

Ok, time to see the results. Save the file, go back to the terminal, and run the program:

```bash
(venv) $ python hello-world.py
Hello World!
```

Congratulations on making it this far 🎉

We'll be doing more cool stuff in the next posts.

## Practice exercise
I've edited the code a bit so that we're now passing the word "World!" to our `hello()` function in order to display "Hello World!" in full. **Problem: The code is incomplete**. See if you can complete it successfully.

```python
import click

@click.command()
def hello():
    click.echo('Hello {}')

if __name__ == '__main__':
    hello("World!")
```

<small class="code"><a target="_blank" href="https://www.digitalocean.com/community/tutorials/how-to-use-string-formatters-in-python-3">Hint</a></small>
