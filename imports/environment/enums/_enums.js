export const BUSINESS_ID = {
  SEARCHING: 'searching',
  ERROR: 'error',
  NOT_FOUND: 'not-found',
  LANDING: 'landing',
  RESERVED: 'reserved',
  DEVELOPMENT: 'localhost'
}

export const USER_ROLE = {
  NONE: 'none',
  OWNER: 'owner',
  CONTRIBUTOR: 'contributor',
  CLIENT: 'client',
  CONTACT: 'contact'
}

export const ACCOUNT_STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  ARCHIVED: 'archived',
  DELETED: 'deleted'
}

export const CONNECTION_STATUS = {
  ONLINE: 'online',
  AWAY: 'away',
  OFFLINE: 'offline'
}

export const TAG_CATEGORY = {
  PEOPLE: 'people',
  PROJECT_CATEGORY: 'project-category'
}

export const LOGIN_TYPE = {
  PASSWORD: 'password',
  RESUME: 'resume'
}

export const LOGIN_METHOD = {
  CREATE_USER: 'createUser',
  VERIFY_EMAIL: 'verifyEmail',
  LOGIN: 'login'
}

export const PROJECT_STATUS = {
  IN_PROGRESS: 'in progress',
  PENDING: 'pending',
  PAUSED: 'paused',
  DELAYED: 'delayed',
  COMPLETED: 'completed',
  CANCELED: 'canceled'
}

export const TASK_STATUS = {
  OVERDUE: 'overdue',
  IN_PROGRESS: 'uncompleted',
  COMPLETED: 'completed'
}

export const PROJECT_TASKS_VIEW = {
  LIST: 'list',
  CARDS: 'cards'
}

export const SIDEBAR_TAB = {
  TASKS: 'tasks',
  CHATS: 'chats' +
  '' +
  ''
}

export const COMMENTABLE_COLLECTION = {
  TASKS: 'tasks',
  CHAT_CHANNELS: 'chatChannels'
}

export const CHAT_CHANNEL_TYPE = {
  DIRECT_MESSAGE: 'directMessage',
  PROJECT: 'project',
  PUBLIC: 'public',
  PRIVATE: 'private'
}

export const NOTIFICATION_SOURCE = [
  {
    type: 'chatMessage',
    message: 'You have {count} unread messages in {chatChannelName}', // This is a placeholder and is not used
    url: '/chats/{chatChannelId}'  // This is a placeholder and is not used
  },
  {
    type: 'taskComment',
    message: null,
    url: null
  }
]

export const DRAG_DROP_TYPE = {
  TASK: 'task',
  TASK_GROUP: 'task-group',
  STATUS: 'status',
  PROJECT: 'project'
}

export const USER_TASK_STATUS = {
  HAS_NO_TASKS: 'Has no tasks',
  HAS_TASKS: 'Has tasks'
}

export const FILE_BY = {
  OWNER: 'Owner',
  CONTRIBUTOR: 'Contributor',
  CLIENT: 'Client',
  CONTACT: 'Contact'
}

export const ALLOWED_FILE_PREVIEW_EXT = [
  'PDF',
  'PPT',
  'PPTX',
  'XLS',
  'XLSX',
  'DOC',
  'DOCX',
  'ODF',
  'ODT',
  'ODF',
  'ODP',
  'HTML',
  'HTM',
  'TXT',
  'AI',
  'PSD'
]

export const IMAGES_EXT = [
  'GIF',
  'PNG',
  'TIFF',
  'JPEG',
  'JPG'
]

export const TASK_CATEGORY_VIEW = {
  No_category: true,
  All: false,
  Completed: false,
  Today: false,
  Tomorrow: false,
  Next_week: false,
  This_week: false,
  Delegated: false
}

export const CHAT_CATEGORY_VIEW = {
  Contributor: true,
  Client: true,
  Public: true
}

export const DEFAULT_PROJECT_STATUS = {
  NEW: [
    'New',
    'blue',
    'Opened'
  ],
  IN_PROGRESS: [
    'In progress',
    'green',
    'Opened'
  ],
  PENDING: [
    'Pending',
    'orange',
    'Opened'
  ],
  DELAYED: [
    'Delayed',
    'red',
    'Opened'
  ],
  COMPLETED: [
    'Completed',
    'grey',
    'Closed'
  ],
  CANCELED: [
    'Canceled',
    'grey',
    'Closed'
  ]
}

export const CUSTOM_STATUS_COLORS = [
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'grey'
]

export const CUSTOM_STATUS = [
  'Opened',
  'Closed'
]

export const USER_TASK_REPETITION = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  YEARLY: 'yearly'
}
