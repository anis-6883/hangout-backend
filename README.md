# Hangout App Backend

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
| Socket.IO  | Real-time Communication |
| bcrypt     | Password Hashing        |
| Docker     | Containerization        |

---

## Project Structure

```text
src/
│
├── config/
│   ├── app.config.ts
│   └── validation-schema.config.ts
│
├── modules/
│   └── user-auth/
│       ├── user-auth.controller.ts
│       └── user-auth.module.ts
│
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts

prisma/
├── generated/
├── migrations/
├── prisma.service.ts
└── schema.prisma
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
