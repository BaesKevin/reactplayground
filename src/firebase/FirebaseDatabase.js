import Firebase from 'firebase'

export default class FirebaseDatabase {
    constructor(config){
        Firebase.initializeApp(config);
        this.database = Firebase.database();
    }

    getDbRef(name){
        return this.database.ref(name);
    }
}