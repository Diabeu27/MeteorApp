
MeteorApp.Forms.collection.datepicker = [
    {
      title: 'Default',
      description: 'Just typical datepicker',
      js: '',
      field: [{
        type: 'datepicker',
        key: 'date',
        templateOptions: {
          placeholder: "Enter date"
        }
      }]
    },
    {
      title: 'Required',
      description: 'With required option',
      js: '',
      field: [{
        type: 'datepicker',
        key: 'daterequired',
        templateOptions: {
          placeholder: "Enter date",
          required: true
        }
      }]
    },
    {
      title: 'Min',
      description: 'With minimum date',
      js: '',
      field: [{
        type: 'datepicker',
        key: 'datemin',
        templateOptions: {
          placeholder: 'Enter date',
          MdMinDate: MeteorApp.Forms.date.minDate,
        }
      }]
    },
    {
      title: 'Max',
      description: 'With maximum date',
      js: '',
      field: [{
        type: 'datepicker',
        key: 'datemax',
        templateOptions: {
          MdMaxDate: MeteorApp.Forms.date.maxDate
        }
      }]
    },
    {
      title: 'Min and max',
      description: 'Within given range',
      js: '',
      field: [{
        type: 'datepicker',
        key: 'dateminmax',
        templateOptions: {
          MdMinDate: MeteorApp.Forms.date.minDate,
          MdMaxDate: MeteorApp.Forms.date.maxDate
        }
      }]
    },
    {
      title: 'Weekends',
      description: 'Only weekends within given range are selectable',
      js: '',
      field: [{
        type: 'datepicker',
        key: 'datefilter',
        templateOptions: {
          label: 'Enter filter date',
          required: true,
          MdDateFilter: MeteorApp.Forms.date.onlyWeekendsPredicate,
          MdOpenOnFocus: true
        },
        validation: {
          messages: {
            filtered: ($viewValue, $modelValue, scope) => {
              return 'Only weekends allowed by this field';
            }
          }
        }
      }]
    }
  ]
