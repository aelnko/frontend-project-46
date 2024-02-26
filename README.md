# Diff Generator

Diff generator is a program that determines the difference between two data structures. A similar mechanism is used in tests' output or while tracking changes in configuration files.

### Hexlet tests and linter status:
[![Actions Status](https://github.com/aelnko/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/aelnko/frontend-project-46/actions)
[![ESlint](https://github.com/aelnko/frontend-project-46/actions/workflows/eslint.yml/badge.svg)](https://github.com/aelnko/frontend-project-46/actions/workflows/eslint.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/5066baef58c6f5d3fc70/maintainability)](https://codeclimate.com/github/aelnko/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5066baef58c6f5d3fc70/test_coverage)](https://codeclimate.com/github/aelnko/frontend-project-46/test_coverage)

## Installation
To install, run the following command:
````bash
git clone git@github.com:aelnko/frontend-project-46.git
cd frontend-project-46
make
npm link
````

## How to run
To display help, run the following command:
````bash
gendiff -h
````

## Help
````bash
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
````

## Comparing two JSON files
Run the following command:
````bash
gendiff file1.json file2.json
````
[![asciicast](https://asciinema.org/a/sHudFxpyZVPEDTWQSlJUwy5OE.svg)](https://asciinema.org/a/sHudFxpyZVPEDTWQSlJUwy5OE)

## Comparing two YAML files
Run the following command:
````bash
gendiff file1.yaml file2.yml
````
[![asciicast](https://asciinema.org/a/609933.svg)](https://asciinema.org/a/609933)

## Comparing in plain format
Run the following command:
````bash
gendiff --format plain file1.json file2.json
````
[![asciicast](https://asciinema.org/a/609934.svg)](https://asciinema.org/a/609934)

## Comparing in JSON format
Run the following command:
````bash
gendiff --format json file1.json file2.json
````
[![asciicast](https://asciinema.org/a/609935.svg)](https://asciinema.org/a/609935)