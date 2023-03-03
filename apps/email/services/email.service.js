'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const emailsDB = [
  {
    id: 'e101',
    subject:
      'New instructor posts on C++, javascript, cyber, python and more...',
    body: 'Discover new technical content by our very own Udocity instructors.',
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
    isStarred: false,
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
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e103',
    subject: 'Build a better UX Portfolio for just $9.99!',
    body: 'Build a better UX Portfolio for just $9.99!',
    isRead: true,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'burger@momo.com',
    to: 'user@appsus2.com',
    status: 'inbox',
    isStarred: true,
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
    status: 'inbox',
    isStarred: true,
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
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e106',
    subject: 'Build a UI Portfolio for just $6.99!',
    body: 'Build a UI Portfolio for just $6.99!',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'finder@momo.com',
    to: 'user@appsus2.com',
    status: 'inbox',
    isStarred: true,
  },
  {
    id: 'e107',
    subject: 'Who is there?!!??!?!?!?!?',
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
    status: 'sent',
    isStarred: true,
  },
  {
    id: 'e108',
    subject: 'Who is there?!',
    body: 'Would love to catch',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'WWE@momo.com',
    to: 'user@appsus2.com',
    status: 'sent',
    isStarred: false,
  },
  {
    id: 'e109',
    subject: 'Would love to catch with you sometimes and eat',
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
    status: 'sent',
    isStarred: false,
  },
  {
    id: 'e110',
    subject: '₪249 | Lavazza, Mauro, AVA, Jacobs ועוד!(פרסומת)',
    body: 'Would love to catch',
    isRead: true,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Gever@momo.com',
    to: 'user@appsus2.com',
    status: 'draft',
    isStarred: true,
  },
  {
    id: 'e111',
    subject: 'Burger Burget Pizza Pizze Burger Pizze',
    body: 'Burger Burget Pizza Pizze Burger Pizze ',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Who@momo.com',
    to: 'user@appsus2.com',
    status: 'sent',
    isStarred: true,
  },
  {
    id: 'e112',
    subject: 'Who Who WhoWhoWhoWhoWhoWhoe?!',
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
    status: 'draft',
    isStarred: false,
  },
  {
    id: 'e113',
    subject: 'Who is there?!',
    body: 'Would love to catch',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'DOO@momo.com',
    to: 'user@appsus2.com',
    status: 'trash',
    isStarred: true,
  },
  {
    id: 'e114',
    subject: 'Wishing for an encounter with Shiny Jirachi?',
    body: 'Wishing for an encounter  Shiny?',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Who@momo.com',
    to: 'user@appsus2.com',
    status: 'sent',
    isStarred: false,
  },
  {
    id: 'e115',
    subject:
      'סופ"ש קפה מתחיל! כל מותגי הקפה הטחון והפולים במשלוח חינם לרוכשים ב-₪249 |(פרסומת)',
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
    status: 'draft',
    isStarred: true,
  },
  {
    id: 'e116',
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
    status: 'trash',
    isStarred: true,
  },
  {
    id: 'e117',
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
    status: 'sent',
    isStarred: false,
  },
  {
    id: 'e118',
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
    status: 'trash',
    isStarred: true,
  },
  {
    id: 'e119',
    subject:
      'Coding!',
    body: 'Cright left center top bottom css html js Hello World',
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
    isStarred: false,
  },
  {
    id: 'e120',
    subject:
      'אלפי ישראלים לא טועים, הרשמו למנוי שלנו.',
    body: 'Come visit Eilat, or just stay and code some vue apps. ',
    isRead: true,
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
    isStarred: false,
  },
  {
    id: 'e121',
    subject:
      'יאללה בואו יאאלה בואו',
    body: 'Come visit Eilat, or just stay and code some vue apps.',
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
    isStarred: false,
  },
  {
    id: 'e122',
    subject:
      'יורדים לתת',
    body: ' left center top bottom css html js Hello World',
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
    isStarred: false,
  },
  {
    id: 'e123',
    subject:
      'טלפונים סלולריםת',
    body: ' top bottom css html js Hello World',
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
    isStarred: true,
  },
  {
    id: 'e124',
    subject:
      'יורדים לאילת? תבואו לבקר! נים לכם סלולריםסומת)',
    body: 'Conter top bottom css html js Hello World',
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
    isStarred: false,
  },
  {
    id: 'e125',
    subject:
      'יורדים לאילת? תבואו לבקר! אלפי פריטמתינים לכם לשריוסומת)',
    body: 'Come visit Eilat, or justop bottom css html js Hello World',
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
    isStarred: false,
  },
  {
    id: 'e126',
    subject:
      'יורדים לאינים לכם לשריון בסניפי אילת!(פרסומת)',
    body: 'Come visit Eilat, or op bottom css html js Hello World',
    isRead: true,
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
    isStarred: false,
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
    if (filterBy.status) {
      const regex = new RegExp(filterBy.status, 'i')
      emails = emails.filter((email) => regex.test(email.status))
    }
    return emails
  })
}

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

function getEmptyEmail(from = 'newUser', to = '',subject = '',body = '' , sentAt = '22:10 PM',status = 'inbox') {
  return { from, to, subject, body,sentAt,status }
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
