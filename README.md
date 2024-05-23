# NoSQLConnect

A social networking API that uses a NoSQL database.

# NoSQLConnect

## User Schema

- `username`
  - Type: String
  - Constraints: Unique, Required, Trimmed

- `email`
  - Type: String
  - Constraints: Required, Unique, Must match a valid email address

- `thoughts`
  - Type: Array of ObjectIds
  - References: Thought model

- `friends`
  - Type: Array of ObjectIds
  - References: User model (self-reference)

### Schema Settings

- Create a virtual called `friendCount` that retrieves the length of the user's friends array field on query.

## Thought Schema

- `thoughtText`
  - Type: String
  - Constraints: Required, Must be between 1 and 280 characters

- `createdAt`
  - Type: Date
  - Default value: Current timestamp
  - Getter method: Format the timestamp on query

- `username` (The user that created this thought)
  - Type: String
  - Constraints: Required

- `reactions` (These are like replies)
  - Type: Array of nested documents created with the Reaction schema

### Schema Settings

- Create a virtual called `reactionCount` that retrieves the length of the thought's reactions array field on query.

## Reaction Schema

- `reactionId`
  - Type: ObjectId
  - Default value: New ObjectId

- `reactionBody`
  - Type: String
  - Constraints: Required, Maximum 280 characters

- `username`
  - Type: String
  - Constraints: Required

- `createdAt`
  - Type: Date
  - Default value: Current timestamp
  - Getter method: Format the timestamp on query