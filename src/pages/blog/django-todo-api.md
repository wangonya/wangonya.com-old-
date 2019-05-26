---
title: "Creating a Simple ToDo Api With Django"
date: "2019-04-01T07:57:54+03:00"
description: "Creating a Simple ToDo Api With Django"
---

In this tutorial, we'll create a simple todo api with Python 3 and Django 2.

## Installing the requirements

Create a virtual environment and install Django.

```console
$ virtualenv venv # creates a virtual environment
$ source venv/bin/activate # activates the virtual environment
(venv)$ pip install Django
```

That's all we'll need for now.

## Creating the project

Use the Django `startproject` command to create the project we'll be working on.

```console
$ django-admin startproject todoapi
```

This creates a `todoapi` directory with generated files to start us off. The directory should look something like this:

```
manage.py
todoapi/
    __init__.py
    settings.py
    urls.py
    wsgi.py
```

## Database setup

To keep things simple, we'll use the SQlite database, so we don't have to install anything since it comes with Python. In addition, that's already setup for us in `todoapi/settings.py`. Have a look at the code and you should see something similar to this:

```python
# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
```

## Creating models

To create models for our database, we first need to create a todos "app". This is where we'll implement our features.

```console
$ python manage.py startapp todos
```

This will create a `todos` directory with the following files:

```
migrations/
    __init__.py
__init__.py
admin.py
apps.py
models.py
tests.py
views.py
```

This app should be added to the `todoapi/settings.py`:

```python
INSTALLED_APPS = [
    ...,
    'todos'
]
```

Ok, now that Django knows about our app, open the `models.py` file to add the models. We'll only create one model called `Todo`:

```python
from django.db import models


# Create your models here.
class Todo(models.Model):
    todo = models.CharField(max_length=100, null=False,
                            help_text="This field is required")
    done = models.BooleanField(default=False)
```

This model will create a table for us with `todo` and `done` columns to save our data. The `todo` column will save the actual todo, and the `done` column will save the status -- whether it's done or not. Notice that it is a `BooleanField`, meaning we'll save `True` when done or `False` when not done, which is the default.

Now all we need to do is run `makemigrations` to notify Django of our models, and `migrate` to do the actual migration.

```console
$ python manage.py makemigrations todos
$ python manage.py migrate
```

## Creating the endpoints

We'll have two endpoints for now:

- `/todos` to `GET` a list of all our todos
- `/todos/<id>` to `GET` the todo matching the id

To test this out, we'll create two simple views in the `todos/view.py` file.

```python
from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from .models import Todo

# Create your views here.
def todos(request):
    todos_list = Todo.objects.all()
    data = {
        "todos": list(todos_list.values(
            "todo", "done"
        ))
    }
    return JsonResponse(data)

def single_todo(request, pk):
    todo = get_object_or_404(Todo, pk=pk)
    data = {
        "todo": todo.todo,
        "done": todo.done
    }
    return JsonResponse(data)
```

Create a new file called `urls.py` in your `todos` app and add the following code:

```python
# todos/urls.py
from django.urls import path

from .views import todos, single_todo

urlpatterns = [
    path("todos/", todos, name="todos"),
    path("todos/<int:pk>", single_todo, name="single_todo")
]
```

Go to `todoapi/urls.py` and include the todos url you just created:

```python
# todoapi/urls.py
from django.contrib import admin
from django.urls import path, include  # add include here

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('todos.urls'))  # add this
]
```

## Set up your admin and test the endpoints

Create a superuser:

```console
$ python manage.py createsuperuser
```

Next, register your models in the `/todos/admin.py` file so you can have access to them from the admin dashboard:

```python
from django.contrib import admin
from .models import Todo

# Register your models here.
admin.site.register(Todo)
```

That's it! Now run the server and go to `http://127.0.0.1:8000/admin`. Log in with the details you registered for the superuser above to add your todos.

![dj-admin](https://thepracticaldev.s3.amazonaws.com/i/x6voqtudx91zc4mnvede.png)

![dj-add](https://thepracticaldev.s3.amazonaws.com/i/pmorh3sdlnknzfo1h2c2.png)

You can retrieve the todos created via a rest client via the endpoints

- `http://127.0.0.1:8000/todos`
- `http://127.0.0.1:8000/todos/<id>`
