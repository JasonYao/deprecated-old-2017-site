# Git Scripts
## Description
Scipts that can run pre/post git commands.

## Setup
### Automatic thumbnail generation & HTML linting + run all tests before every push:
```sh
# Run from the root of the source code directory only **ONCE**
ln -s $(pwd)/git/pre-push $(pwd)/.git/hooks/pre-push
```

Run the above line from the source code directory only **ONCE**.
This will cause git to build and test before pushing automatically,
when you try to `git push`.

## Skipping git hook
If for any reason you'd like to skip the git hook, just run:
```sh
git push --no-verify
```
