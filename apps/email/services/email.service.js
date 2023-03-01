'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const emailsDB = [
  {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    removedAt: null,
    from: 'momo@momo.com',
    to: 'user@appsus.com',
    status: 'inbox',
  },
  {
    id: 'e102',
    subject: 'Hello!',
    body: 'Would love to catch',
    isRead: false,
    sentAt: 1551133930594,
    removedAt: null,
    from: 'lolo@momo.com',
    to: 'user@appsus2.com',
  },
]

const EMAIL_KEY = 'emailDB'

_createEmails()

export const emailService = {
  query,
  getUser,
  get,
  save,
  getEmptyEmail,
}

function query(filterBy = {}) {
  return storageService.query(EMAIL_KEY).then((emails) => {
    if (filterBy.status) {
      emails = emails.filter((email) => (filterBy.status === sent && email.sentAt) ||
      (filterBy.status === trash && email.removedAt))
    //   (filterBy.status === draft && email.removedAt))
    }
    return emails
  })
}

function get(emailId) {
  return storageService.get(EMAIL_KEY, emailId)
}

function save(email) {
  if (email.id) {
    return storageService.put(EMAIL_KEY, email)
  } else {
    return storageService.post(EMAIL_KEY, email)
  }
}

function getEmptyEmail(id = 'e100', body = 'Hello') {
  return { id, body }
}

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAIL_KEY)
  if (!emails || !emails.length) {
    emails = emailsDB
    utilService.saveToStorage(EMAIL_KEY, emails)
  }
}

function _createEmail(id, body = 'Hello') {
  const email = getEmptyEmail(id, body)
  email.id = utilService.makeId()
  return email
}

function getUser() {
  const loggedInUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus',
  }
  return loggedInUser
}
