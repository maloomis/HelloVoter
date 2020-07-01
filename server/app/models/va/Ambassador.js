module.exports = {
  id: {
    type: 'uuid',
    primary: true
  },
  external_id: 'string',
  first_name: {
    type: 'string',
    required: true
  },
  last_name: 'string',
  date_of_birth: 'string',
  phone: {
    type: 'string',
    unique: true,
    required: true
  },
  email: {
    type: 'string',
    unique: true
  },
  address: {
    type: 'string',
    required: true
  },
  location: {
    type: 'point',
    required: true
  },
  claims: {
    type: 'relationships',
    relationship: 'CLAIMS',
    direction: 'out',
    target: 'Tripler',
    properties: {
      since: {
        type: 'localdatetime',
        default: () => new Date,
      },
    },
    eager: true
  },
  signup_completed: {
    type: 'boolean',
    default: false
  },
  approved: {
    type: 'boolean',
    default: false
  },
  quiz_results: 'string',
  created_at: {
    type: 'localdatetime',
    default: () => new Date,
  },
  locked: {
    type: 'boolean',
    default: false
  },
  admin: {
    type: 'boolean',
    default: false
  }
};
