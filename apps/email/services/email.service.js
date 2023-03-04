'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const emailsDB = [
  {
    id: 'e101',
    subject:
      'My $9.99 UX Portfolio Course sale ends TOMORROW!',
    body: 'Do yourself a favor and pick up the How to Write a Compelling Case Study guidebook',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Udemy Instructor',
    to: 'user@appsus.com',
    status: 'inbox',
    img: 'assets/img/UdemyImg.png',
    isStarred: false,
  },
  {
    id: 'e102',
    subject: 'הירדמו עם צלילים מרגיעים.',
    body: 'הפלייליסטים האלה נועדו לעזור לכם להירדם, נסו אותם בפעם הבאה שתלכו לישון.',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Spotify',
    to: 'user@appsus2.com',
    status: 'inbox',
    img: 'assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e103',
    subject: 'Build a better UX Portfolio for just $9.99!',
    body: 'Dont sleep on this sale...',
    isRead: true,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'codeRed@spmail.com',
    to: 'user@appsus2.com',
    status: 'inbox',
    img: 'assets/img/ksp.png',
    isStarred: true,
  },
  {
    id: 'e104',
    subject: 'חג פורים, חג גדול לגיימרים!',
    body: 'כל מוצרי Logitech G ב-20% הנחה! מקלדות, עכברים, אוזניות (וריקודים).',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'KSP.co.il ',
    to: 'user@appsus2.com',
    status: 'inbox',
    img: 'assets/img/ksp.png',
    isStarred: true,
  },
  {
    id: 'e105',
    subject: 'ההופעות הכי שוות ב גריי בחודש מרץ! (פרסומת)',
    body: 'עידן רייכל, שלמה ארצי והיהודים!',
    isRead: true,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'קופת תל אביב- 2207',
    to: 'user@appsus2.com',
    status: 'inbox',
    img: 'assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e106',
    subject: 'דור and 62 others made changes in your shared folders',
    body: 'CaJan23-ExcerciseSubmission',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Dropbox@gmail.com',
    to: 'user@appsus2.com',
    status: 'inbox',
    img: 'assets/img/ksp.png',
    isStarred: true,
  },
  {
    id: 'e107',
    subject: 'LAST CALL! 30% OFF BEST BRANDS | פרסומת',
    body: 'הזדמנות אחרונה למבצע – מותגים מנצחים ב-30% הנחה.',
    isRead: true,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Footlocker',
    to: 'user@appsus2.com',
    status: 'sent',
    img: 'assets/img/ksp.png',
    isStarred: true,
  },
  {
    id: 'e108',
    subject: 'חשבון Google שלך ​​שוחזר בהצלחה',
    body: 'ברוכים השבים לחשבון',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Google@gmail.com',
    to: 'user@appsus2.com',
    status: 'sent',
    img: 'assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e109',
    subject: 'ההטבה עדיין מחכה לך בחשבון 💰 | פרסומת',
    body: 'עדיין מחכים לך 25 ש״ח לרכישה במגוון החנויות שלנו',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Hadas from Wolt',
    to: 'user@appsus2.com',
    status: 'sent',
    img: 'assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e110',
    subject: 'Wishing for an encounter with Shiny Jirachi?',
    body: 'Wishes can come true—just ask Jirachi!',
    isRead: true,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Pokémon GO',
    to: 'user@appsus2.com',
    status: 'draft',
    img: 'assets/img/ksp.png',
    isStarred: true,
  },
  {
    id: 'e111',
    subject: 'יש אירועים שממש לא כדאי לפספס... ובמייל הזה נמצא אחד מהם',
    body: 'פנייה זו נעשית בהסתמך על מידע מתוך מאגר מידע שבבעלות החברה.',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Duty Free - James Richardson',
    to: 'user@appsus2.com',
    status: 'sent',
    img: 'assets/img/ksp.png',
    isStarred: true,
  },
  {
    id: 'e112',
    subject: '🏋️‍♂️ How much progress did you make?',
    body: 'Check out your learning progress.',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Duolingo@walla.com',
    to: 'user@appsus2.com',
    status: 'draft',
    img: 'assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e113',
    subject: 'קבלה שלך מ-Apple',
    body: 'שירות +iCloud עם שטח אחסון בגודל 50 ג״ב',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Apple@tapoah.com',
    to: 'user@appsus2.com',
    status: 'trash',
    img: 'assets/img/ksp.png',
    isStarred: true,
  },
  {
    id: 'e114',
    subject: 'היי פרטנר! , אני החשבונית החודשית שלך',
    body: 'נא לא לענות להודעה זו',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Partner',
    to: 'user@appsus2.com',
    status: 'sent',
    img: 'assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e115',
    subject:
      'סופ"ש קפה מתחיל! |(פרסומת)',
    body: 'כל מותגי הקפה הטחון והפולים במשלוח חינם לרוכשים ב-₪249',
    isRead: true,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'CafeCafo@gmail.com',
    to: 'user@appsus2.com',
    status: 'draft',
    img: 'assets/img/ksp.png',
    isStarred: true,
  },
  {
    id: 'e116',
    subject: 'Welcome to Google Maps Platform',
    body: 'Find the right API',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Google Maps Platform',
    to: 'user@appsus2.com',
    status: 'trash',
    img: 'assets/img/ksp.png',
    isStarred: true,
  },
  {
    id: 'e109',
    subject: 'ההטבה עדיין מחכה לך בחשבון 💰 | פרסומת',
    body: 'עדיין מחכים לך 25 ש״ח לרכישה במגוון החנויות שלנו',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Hadas from Wolt',
    to: 'user@appsus2.com',
    status: 'sent',
    img: 'assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e106',
    subject: 'טל and 62 others made changes in your shared folders',
    body: 'CaJan23-ExcerciseSubmission',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Dropbox@gmail.com',
    to: 'user@appsus2.com',
    status: 'inbox',
    img: 'assets/img/ksp.png',
    isStarred: true,
  },
  {
    id: 'e101',
    subject:
      'My $9.99 UX Portfolio Course sale ends TOMORROW!',
    body: 'Do yourself a favor and pick up the How to Write a Compelling Case Study guidebook',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Udemy Instructor',
    to: 'user@appsus.com',
    status: 'inbox',
    img: 'assets/img/ksp.png',
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
    from: 'eilat@walla.com',
    to: 'user@appsus.com',
    status: 'inbox',
    img: '../../../assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e114',
    subject: 'היי פרטנר! , אני החשבונית החודשית שלך',
    body: 'נא לא לענות להודעה זו',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Partner',
    to: 'user@appsus2.com',
    status: 'sent',
    img: 'assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e122',
    subject: 'SMACKDOWN AND MONEY IN THE BANK ARE COMING TO THE UK!',
    body: '© Copyright WWE 1980-2023 All Rights Reserved',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'WWE',
    to: 'user@appsus.com',
    status: 'inbox',
    img: '../../../assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e123',
    subject:'Your Zoom password has been reset.',
    body: 'If you have any questions, please contact Zoom Customer Support.',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Zoom',
    to: 'user@appsus.com',
    status: 'inbox',
    img: '../../../assets/img/ksp.png',
    isStarred: true,
  },
  {
    id: 'e124',
    subject:'Confirm Your Font Awesome Account Email Address',
    body: 'Youre so close to using your first Font Awesome Kit!',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'FontAwesome@gmail.com',
    to: 'user@appsus.com',
    status: 'inbox',
    img: '../../../assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e125',
    subject:'Save the dates for next Seasons Community Day',
    body: 'Stay tuned for more details about March Community Day!',
    isRead: false,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Pokémon GO',
    to: 'user@appsus.com',
    status: 'inbox',
    img: '../../../assets/img/ksp.png',
    isStarred: false,
  },
  {
    id: 'e126',
    subject:'WINTER SALE! ⛈️ 30% OFFFFFF | פרסומת',
    body: 'מותגים מנצחים עם פריטי חורף שווים - עכשיו ב-30% הנחה.',
    isRead: true,
    sentAt: new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
    removedAt: null,
    from: 'Footlocker',
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
