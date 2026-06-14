# Chat App Backend

A scalable real-time chat application backend built with NestJS, PostgreSQL, Prisma ORM, JWT Authentication, and WebSockets.

## Features

### Authentication

- User registration
- User login
- JWT access token
- Refresh token support
- Password hashing with bcrypt
- Protected routes

### User Management

- User profiles
- Update profile information
- Avatar support
- User search

### Chat System

- One-to-one conversations
- Message history
- Real-time messaging via WebSocket
- Read receipts
- Conversation management

### Settings

- Theme preferences
- Notification settings

---

## Tech Stack

| Technology | Purpose                 |
| ---------- | ----------------------- |
| NestJS     | Backend Framework       |
| PostgreSQL | Database                |
| Prisma ORM | Database ORM            |
| JWT        | Authentication          |
| Passport   | Authentication Strategy |
| Socket.IO  | Real-time Communication |
| bcrypt     | Password Hashing        |
| Docker     | Containerization        |

---

## Project Structure

```text
src/
│
├── auth/
│   ├── controllers/
│   ├── services/
│   ├── guards/
│   ├── strategies/
│   └── dto/
│
├── users/
│   ├── controllers/
│   ├── services/
│   ├── dto/
│   └── entities/
│
├── profiles/
│
├── conversations/
│
├── messages/
│
├── settings/
│
├── websocket/
│
├── prisma/
│
├── common/
│   ├── decorators/
│   ├── filters/
│   ├── interceptors/
│   ├── pipes/
│   └── guards/
│
├── config/
│
├── app.module.ts
└── main.ts
```

---

## Database Schema

### Users

```sql
users
-----
id UUID PRIMARY KEY
email VARCHAR(255) UNIQUE
password_hash TEXT
is_email_verified BOOLEAN

created_at TIMESTAMP
updated_at TIMESTAMP
last_seen_at TIMESTAMP
```

### User Profiles

```sql
user_profiles
-------------
id UUID PRIMARY KEY

user_id UUID UNIQUE

username VARCHAR(50) UNIQUE
full_name VARCHAR(100)

bio TEXT
avatar_url TEXT

created_at TIMESTAMP
updated_at TIMESTAMP
```

### User Settings

```sql
user_settings
-------------
id UUID PRIMARY KEY

user_id UUID UNIQUE

theme VARCHAR(20)
notifications_enabled BOOLEAN

created_at TIMESTAMP
updated_at TIMESTAMP
```

### Conversations

```sql
conversations
-------------
id UUID PRIMARY KEY

type VARCHAR(20)
created_by UUID

created_at TIMESTAMP
updated_at TIMESTAMP
```

### Conversation Users

```sql
conversation_users
------------------
id UUID PRIMARY KEY

conversation_id UUID
user_id UUID

joined_at TIMESTAMP
```

### Messages

```sql
messages
--------
id UUID PRIMARY KEY

conversation_id UUID
sender_id UUID

content TEXT

message_type VARCHAR(20)

is_edited BOOLEAN

created_at TIMESTAMP
updated_at TIMESTAMP
```

### Message Reads

```sql
message_reads
-------------
id UUID PRIMARY KEY

message_id UUID
user_id UUID

read_at TIMESTAMP
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

DATABASE_URL="postgresql://postgres:password@localhost:5432/chat_app"

JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret

JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

FRONTEND_URL=http://localhost:5173
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd chat-backend
```

### Install Dependencies

```bash
npm install
```

### Setup Database

```bash
npx prisma generate
npx prisma migrate dev
```

### Start Development Server

```bash
npm run start:dev
```

Application will run on:

```text
http://localhost:3000
```

---

## API Endpoints

### Authentication

#### Register

```http
POST /auth/register
```

Request:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login

```http
POST /auth/login
```

Request:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "accessToken": "jwt_token",
  "refreshToken": "refresh_token"
}
```

#### Get Current User

```http
GET /auth/me
```

---

### Profile

#### Get Profile

```http
GET /profile/me
```

#### Update Profile

```http
PATCH /profile/me
```

---

### Conversations

#### Get User Conversations

```http
GET /conversations
```

#### Create Conversation

```http
POST /conversations
```

#### Get Conversation

```http
GET /conversations/:id
```

---

### Messages

#### Get Messages

```http
GET /conversations/:id/messages
```

#### Send Message

```http
POST /messages
```

Request:

```json
{
  "conversationId": "uuid",
  "content": "Hello World"
}
```

---

## WebSocket Events

### Connection

```javascript
socket.connect();
```

### Join Conversation

```javascript
socket.emit('joinConversation', {
  conversationId: 'uuid',
});
```

### Send Message

```javascript
socket.emit('sendMessage', {
  conversationId: 'uuid',
  content: 'Hello',
});
```

### Receive Message

```javascript
socket.on('newMessage', (message) => {
  console.log(message);
});
```

---

## Development Scripts

```bash
npm run start
npm run start:dev
npm run start:debug

npm run build

npm run lint

npm run test
npm run test:e2e
```

---

## Future Enhancements

- Group chats
- Message reactions
- File uploads
- Voice messages
- Video calls
- Push notifications
- Online presence
- Message forwarding
- Pinned messages
- Message deletion
- End-to-end encryption

---

## License

MIT License
