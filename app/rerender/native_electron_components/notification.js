const path = require('path');

class NativeElectronNotification {
  constructor() {
    this.notification = null;
  }

  notify(title, body, icon, tag, cb) {
    if (this.notification) {
      this.notification.close();
    }
    this.notification = new Notification(title, {
      body,
      tag,
      icon: icon || path.resolve(__dirname, '..', 'resources', 'icon.png')
    });
    return cb && cb(tag);
  }
}

export default NativeElectronNotification;
