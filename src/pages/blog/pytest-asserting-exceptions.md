---
title: "Asserting Exceptions with Pytest"
date: 2019-01-29T05:15:40+03:00
description: "Python TDD with Pytest Part 2 -- Asserting Exceptions"
---

First time I had someone review my pull requests, she was pretty strict on tests. I couldn't merge if the tests were failing, of course. But I also couldn't merge if coverage had decreased by even 1%. TDD was still new to me so maintaining coverage was a challenge since I was only testing the bare minimum I could. I had to find out how to make my tests more robust and ensure as much of my code was tested as possible. One area that I wasn't really sure how to test was the custom exceptions I had written. Here's an example:

```python
# login.py

def check_email_format(email):
    """check that the entered email format is correct"""
    pass

def test_email_exception():
    """test that exception is raised for invalid emails"""
    pass
```

This is probably something you want to do if you're implementing a system with email authentication. The example is oversimplified, but it serves the purpose of this post well.

To test for raised exceptions, pytest offers a handy method: `pytest.raises`. Let's see how to use it in our example:

```python
import re
import pytest

def check_email_format(email):
    """check that the entered email format is correct"""
    if not re.match(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", email):
        raise Exception("Invalid email format")
    else:
        return "Email format is ok"

def test_email_exception():
    """test that exception is raised for invalid emails"""
    with pytest.raises(Exception):
        assert check_email_format("good@email.com")
```

The `check_email_format` method takes in an email and checks that it matches the regex pattern given. If it does, it returns `"Email format is ok"`, otherwise, an exception is raised.

Using `pytest.raises` in a `with` block as a context manager, we can check that an exception is actually raised if an invalid email is given. Running the tests on the code as it is above should fail:

```shell
collected 1 item
login.py F                [100%]

==================== FAILURES ========================

    def test_email_exception():
        """test that exception is raised for invalid emails"""
        with pytest.raises(Exception):
>           assert check_email_format("good@email.com")
E           Failed: DID NOT RAISE <class 'Exception'>

login.py:16: Failed
```

Notice it says `Failed: DID NOT RAISE <class 'Exception'>`. If an exception is not raised, the test fails. I found this to be pretty awesome. We passed in a valid email format (according to our standards here) so the test works as expected. Now we can make it pass.

```python
import re
import pytest

def check_email_format(email):
    """check that the entered email format is correct"""
    if not re.match(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", email):
        raise Exception("Invalid email format")
    else:
        return "Email format is ok"

def test_email_exception():
    """test that exception is raised for invalid emails"""
    with pytest.raises(Exception):
        assert check_email_format("bademail.com") # invalid email format to raise exception
```

Run your test: `pytest login.py`:

```shell
collected 1 item

login.py .              [100%]

====================== 1 passed in 0.05 seconds ======================
```

You can also add an extra check for the exception message:

```python
import re
import pytest

def check_email_format(email):
    """check that the entered email format is correct"""
    if not re.match(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", email):
        raise Exception("Invalid email format")
    else:
        return "Email format is ok"

def test_email_exception():
    """test that exception is raised for invalid emails"""
    with pytest.raises(Exception) as e:
        assert check_email_format("bademail.com")
    assert str(e.value) == "Invalid email format"
```

![gif](https://media.giphy.com/media/xTiTnnLkYTDWSOWSHK/giphy.gif)
