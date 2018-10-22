export default class MessageRepository {
    constructor(firebase){
        this.firebase = firebase;
        this.messagesRef = this.firebase.getDbRef('messages');
    }

    // setting the datasetChangedCb also sets a listener on the messages so the callback is invoked each
    // time the dataset changes
    set onMessagesChanged(cb){
        this.cb = cb;

        this.messagesRef.on('value', (snapshot) => {
            this.cb(snapshot.val());
        });
    }

    addMessage(message){
        this.messagesRef.push({ message });
    }

    deleteMessage(id){
        this.firebase.getDbRef(`messages/${id}`).remove();
    }
}