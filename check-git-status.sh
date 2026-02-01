#!/bin/bash
echo "=== Git Status ==="
git status

echo -e "\n=== Ignored Patterns ==="
git status --ignored | head -20

echo -e "\n=== Tracked Files Count ==="
git ls-files | wc -l

echo -e "\n=== Checking specific exclusions ==="
git check-ignore -v packages/mfe-angular/.angular/cache
git check-ignore -v node_modules
git check-ignore -v dist
