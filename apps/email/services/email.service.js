'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const emailsDB = [{
        id: 'e101',
        subject: 'יורדים לאילת? תבואו לבקר! אלפי פריטים במחירי אילת ממתינים לכם לשריון בסניפי אילת כבר היום! טלפונים סלולרים, מחשבים, שואבי אבק, צעצועים ועוד!(פרסומת)',
        body: 'Come visit Eilat, or just stay and code some vue apps. right left center top bottom css html js Hello World',
        isRead: false,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com',
        status: 'inbox',
        img: '../../../assets/img/ksp.png',
    },
    {
        id: 'e102',
        subject: 'Hello!',
        body: 'Would love to catch',
        isRead: false,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'lolo@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e103',
        subject: 'Burger lover?',
        body: 'Would love to catch',
        isRead: true,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'burger@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e104',
        subject: 'Lets fight!!',
        body: 'Would love to catch',
        isRead: false,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'angry@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e105',
        subject: 'Code some love!',
        body: 'Would love to catch',
        isRead: true,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'love@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e106',
        subject: 'I will find you',
        body: 'Would love to catch',
        isRead: false,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'finder@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: true,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: false,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: false,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: true,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: false,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: false,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: false,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: false,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: true,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: false,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: true,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
        to: 'user@appsus2.com',
    },
    {
        id: 'e107',
        subject: 'Who is there?!',
        body: 'Would love to catch',
        isRead: true,
        sentAt: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        removedAt: null,
        from: 'Who@momo.com',
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
    remove,
}

function query(filterBy = {}) {   
  return storageService.query(EMAIL_KEY).then((emails) => {  
         let filterdEmails = emails.filter((email) => 
         email.status === filterBy.status)     
         return filterdEmails   
}) }

function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
}

function remove(emailId) {
    return storageService.remove(EMAIL_KEY, emailId)
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