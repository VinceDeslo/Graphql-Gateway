db.createUser({
    user: 'default_user',
    pwd: 'default_pass',
    roles: [{ role: 'readWrite', db: 'userdb'}]
})
db.createCollection('users');
