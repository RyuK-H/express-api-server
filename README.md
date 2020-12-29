# Exchange_TS_Template

### Commit Rules
- Commit Message [(Pandas)](https://pandas.pydata.org/pandas-docs/stable/development/contributing.html)
```
ENH: Enhancement, new functionality
BUG: Bug fix
DOC: Additions/updates to documentation
TST: Additions/updates to tests
BLD: Updates to the build process/scripts
PERF: Performance improvement
CLN: Code cleanup
```

### VsCode Extension
1. ESLint
2. Prettier - Code formatter

### [TIP] Auto Save (eslint, prettier)
1. VSCode `Code > Preferences > Settings`
2. Click `Turn on Settings Sync`
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```