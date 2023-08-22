#!/bin/bash

# Function to create subdirectories and files for a given domain
create_domain() {
  DOMAIN_DIR="$1"
  mkdir -p $DOMAIN_DIR
  touch $DOMAIN_DIR/queries.ts
  touch $DOMAIN_DIR/mutations.ts
  touch $DOMAIN_DIR/fragments.ts
  touch $DOMAIN_DIR/types.ts
}

# Create subdirectories and files for authors, papers, and tweets
create_domain "authors"
create_domain "papers"
create_domain "tweets"

# Create directory for shared types
mkdir -p "types"

echo "GraphQL directories and files have been created successfully."
