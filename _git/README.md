# Git Scripts
## Description
Scipts that can run pre/post git commands.

## Setup
### Automatic thumbnail generation & HTML linting + run all tests before every push:
```sh
# Run from the root of the source code directory
ln -s $(pwd)/_git/pre-push.sh $(pwd)/.git/hooks/pre-push
```
