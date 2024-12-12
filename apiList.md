# DevTinder API's

## Auth Router
- POST /signup
- POST /login
- POST /logout

## Profile Router
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

## Connection Request Router
- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

## User Router
- GET /user/connections
- GET /user/request/received
- GET /user/feed

### Status: ignored, interested, accepted, rejected


