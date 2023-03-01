'use strict'

import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const EMAIL_KEY = 'emailDB'

export const emailService = {
  get,
}

function get() {
  const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    removedAt: null,
    from: 'momo@momo.com',
    to: 'user@appsus.com',
  }
  return email
}
