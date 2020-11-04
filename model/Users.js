const BaseModel = require('./BaseModel');

class Users extends BaseModel {
    constructor() {
        super();
    }

    get(id) {
        return this.db
            .collection('users')
            .doc(id)
            .get();
    }

    getBy(conditions) {
        let db = this.db.collection('users');

        conditions.forEach(({ field, operator , value }) => 
            db = db.where(field, operator, value)
        );

        return db.get();
    }

    create(data) {
        return this.db.collection('users').add(data);
    }
}

module.exports = Users;