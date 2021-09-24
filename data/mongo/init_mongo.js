db = db.getSiblingDB('userdb');

db.createUser({
    user: 'default',
    pwd: 'default',
    roles: [{ role: 'readWrite', db: 'userdb'}]
})
db.createCollection('users');

db.users.insertMany([
    {name: 'Default User', position: 'Engineering'}
])