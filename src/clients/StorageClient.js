import PubSub from "pubsub-js"

class StorageClient {

    setPinned(id) {
        if (window.localStorage) {
            let pinned = this.getPinned();
            if (pinned.length == 0) {
                window.localStorage.setItem('pinned', JSON.stringify([id]));
            }
            else {
                let head = pinned[0];
                window.localStorage.setItem('pinned', JSON.stringify([id, head]));
            }
            PubSub.publish('pin')
        }
    }

    isPinned(id) {
        return this.getPinned().filter(item => item === id).length > 0;
    }

    getPinned() {
        if (window.localStorage && window.localStorage.getItem('pinned')) {
            return JSON.parse(window.localStorage.getItem('pinned'));
        }
        else {
            return [];
        }
    }

    // INVARIANT: getPinned().size() == 2
    swapPinned() {
        let pinned = this.getPinned();
        this.setPinned(pinned[1]);
    }

    subscribe(callback) {
        return PubSub.subscribe('pin', callback);
    }

    unsubscribe(token) {
        PubSub.unsubscribe(token);
    }
}

export default new StorageClient();