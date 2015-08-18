import PubSub from "pubsub-js"

class StorageClient {
    addPinned(id) {
        if (window.localStorage) {
            let pinned = this.getPinned();
            // TODO: redundant if-case?
            if (pinned.length == 0) {
                this.saveState([id]);
            }
            else {
                this.saveState(pinned.concat(id));
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