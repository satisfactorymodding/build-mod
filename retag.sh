#!/usr/bin/env bash

git tag -d v1
git push origin :refs/tags/v1
git tag v1
git push origin tag v1