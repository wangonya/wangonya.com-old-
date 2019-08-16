---
title: Performing CRUD operations with a CLI app using an online API
date: 2019-08-15
description: How to perform Create, Retrieve, Update and Delete operations with a CLI app using an online API
series: Building CLI Apps with Python
---

For the next phase in this series, we'll learn how to make a CLI app to perform CRUD operations, i.e, Creating, Retrieving, Updating and Deleting data. We'll use [jsonstore](https://www.jsonstore.io/) to store our data.

## What we'll create
A `contacts` app with the following functionality:

```bash
# add a new contact with name=Peter and mobile=01034512
$ contacts add --name Peter --mobile 01034512
New contact added!
{
  name: Peter,
  mobile: 01034512
}
```

```bash
# view all contacts
$ contacts list
Here's a list of all your contacts:
{
  ...  # list of all contacts
}
```

```bash
# view one contact
$ contacts view Peter
{
  name: Peter,
  mobile: 01034512
}

$ contacts view Meg
The contact you searched for does'nt exist
```

```bash
# update the contact with name=Peter
# set new name as Chris
$ contacts update Peter --name Chris
Contact updated!
```

```bash
# delete the contact with name=Chris
$ contacts delete Chris
Contact deleted!
```

```bash
# export contacts list to json file
$ contacts export
```

## API endpoint
As mentioned earlier, [jsonstore](https://www.jsonstore.io/) will be used to store our data. Head over to their home page and grab the API endpoint provided. We'll make use of Python's [requests](https://2.python-requests.org/en/master/user/quickstart/) library and make `POST`, `PATCH`, `GET` and `DELETE` requests to that endpoint to perform the respective operations.

## App setup
We've already gone through the basics of setting up in previous posts so I won't go into much detail on that. Here are the steps:

```bash
$ mkdir contacts-cli

$ cd contacts-cli

$ virtualenv env

$ . env/bin/activate

(env) $
```
