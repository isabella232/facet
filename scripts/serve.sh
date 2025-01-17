#!/bin/bash

set -o errexit -o pipefail

# Run an initial Facet build, so the websites have something to start with.
yarn --cwd packages/facet run build

# Start services for the website, sandbox site, Storybook site, and Facet packages.
yarn run concurrently \
    "yarn --cwd packages/facet run dev" \
    "yarn --cwd packages/facet run dev:storybook" \
    "yarn --cwd packages/facet run dev:tokens" \
    "yarn --cwd sites/sandbox run dev" \
    "yarn --cwd sites/facet run dev" \
    --raw --kill-others
