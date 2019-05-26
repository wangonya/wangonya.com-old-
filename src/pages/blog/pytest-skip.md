---
title: "Skipping tests"
date: 2019-01-31T08:16:36+03:00
description: "Python TDD with Pytest Part 4 -- Skipping tests"
---

Sometimes you might want to skip a particular test while executing others for some reason. Maybe the database guy isn't done setting up and that particular test requires a database connection. Instead of having to wait, you can just write the test and instruct pytest to skip it, giving the appropriate reason so it doesn't look like you just skipped a failing test to keep your test suite green.

There's a couple of ways to do this. The simplest is to use the `@pytest.mark.skip` decorator like so:

```python
import pytest

def test_stuff(): # this test will be executed
    pass

@pytest.mark.skip(reason="just testing if skip works")
def test_other_stuff(): # this one will be skipped
    pass
```

Running your tests should produce the output below:

```shell
collected 2 items
skip.py .s                           [100%]

===================== 1 passed, 1 skipped in 0.05 seconds ===============
```

Notice the little `s`. It shows the test that was skipped. Pytest also tells us that `1 passed, 1 skipped`. If you need a more verbose output, you can use the `-rs` flag `pytest skip.py -rs`:

```shell
collected 2 items
skip.py .s                    [100%]
==================== short test summary info ===============
SKIP [1] skip.py:14: just testing if skip works

=================== 1 passed, 1 skipped in 0.02 seconds ==========
```

The test above was skipped even before it started. This isn't always ideal. You can have more control over how the test is skipped by using the `pytest.skip(reason)` function:

```python
import pytest

def setup_stuff():
    return False

def test_stuff(): # this test will be executed
    pass

def test_other_stuff(): # this one will be skipped if setup_stuff() returns false
    if not setup_stuff():
        pytest.skip("setup failed")
    else:
        pass
```

```shell
collected 2 items
skip.py .s                  [100%]
=================== short test summary info =============================
SKIP [1] skip.py:12: setup failed

==================== 1 passed, 1 skipped in 0.05 seconds =================
```

If you prefer to check that the condition is satisfied before the test starts, then you can use `skipif`:

```python
import pytest

def setup_stuff():
    return False

def test_stuff(): # this test will be executed
    pass

@pytest.mark.skipif(not setup_stuff(), reason="setup failed")
def test_other_stuff(): # this one will be skipped if setup_stuff() returns false
    pass
```

```shell
collected 2 items
skip.py .s                  [100%]
=================== short test summary info =============================
SKIP [1] skip.py:12: setup failed

==================== 1 passed, 1 skipped in 0.05 seconds =================
```

There are many other ways you can customize your tests to skip depending on certain conditions as explained in the [docs](https://docs.pytest.org/en/latest/skipping.html).
