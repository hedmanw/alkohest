import PubSub from "pubsub-js"

class StorageClient {

    addPinned(id) {
        if (window.localStorage) {
            let pinned = this.getPinned();
            if (pinned.length == 0) {
                this.saveState([id]);
            }
            else {
                let head = pinned[0];
                this.saveState([id, head]);
            }
            PubSub.publish('pin');
        }
    }

    isPinned(id) {
        return this.getPinned().filter(item => item === id).length > 0;
    }

    removePinned(id) {
        this.saveState(this.getPinned().filter(item => item !== id));
        PubSub.publish('pin');
    }

    getPinned() {
        if (window.localStorage && window.localStorage.getItem('pinned')) {
            return JSON.parse(window.localStorage.getItem('pinned'));
        }
        else {
            return [];
        }
    }

    saveState(ids) {
        window.localStorage.setItem('pinned', JSON.stringify(ids));
    }

    subscribe(callback) {
        return PubSub.subscribe('pin', callback);
    }

    unsubscribe(token) {
        PubSub.unsubscribe(token);
    }
}

export default new StorageClient();