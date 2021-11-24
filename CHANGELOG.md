# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- *None*

## [2.1.0] - 2021-11-24
### Added
- Automatic formatting as user types
- User input is restricted to digits and '+'
- Automatic formatting of initial phone number passed to component

### Changed
- Country picker no longer selectable using keyboard navigation (e.g. by pressing tab)
- Removed from country picker countries which libphonenumber doesn't support (e.g. Antarctica)
- Flag icon now greyed out when component is in disabled state

### Removed
- *None*
